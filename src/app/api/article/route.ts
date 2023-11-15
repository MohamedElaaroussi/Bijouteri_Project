import fs from 'fs';
import { NextRequest, NextResponse } from "next/server"
import { Article } from "../../../../models/Article";
import { getPaginatedResult } from "@/utils/util";
import { getToken } from "next-auth/jwt"
import { connectToDatabase } from "../../../../db/connection";
import { Catalogue } from "../../../../models/Catalogue";
import path from "path";


connectToDatabase()
// Get article + pagination
export const GET = async (req: NextRequest) => {

    // getting the page number and limit from the url
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const search = searchParams.get("search");
    let startDate = searchParams.get("startDate");
    let endDate: string | Date | null = searchParams.get("endDate");
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    if (endDate) {
        endDate = new Date(endDate);
        endDate.setHours(23, 59, 59, 999);
    }

    try {
        const searchByQuery = { ...(search ? { "name": { $regex: ".*" + search + ".*", $options: 'i' } } : {}) }
        const searchBtwDate = { ...(startDate && endDate ? { $and: [{ "createdAt": { $gte: startDate } }, { "createdAt": { $lte: endDate } }] } : {}) }
        const totalArticles = await Article.countDocuments({ ...searchByQuery, ...searchBtwDate })

        // calling a method that return start index and end index, 
        // and results object that may contain next and previous page
        const { startIndex, results } = getPaginatedResult(page, limit, totalArticles)
        const articles = await Article.find(searchByQuery).skip(startIndex).limit(limit).exec();
        results.total = totalArticles;
        results.result = articles;
        return NextResponse.json(results, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
}

// create article
export const POST = async (req: NextRequest) => {

    try {
        const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
        const articleToBeAdded = await req.json()
        if (articleToBeAdded.catalogue.length) {
            await Catalogue.updateMany({ _id: { $in: articleToBeAdded.catalogue } }, { $inc: { nbrOfArticles: 1 } })
        }

        if (articleToBeAdded.img) {
            // replace the data:image 
            const base64Data = articleToBeAdded.img.replace(/^data:image\/\w+;base64,/, '');

            // Create a buffer from the base64 data
            const buffer = Buffer.from(base64Data, 'base64');
            const imgName = articleToBeAdded.name + ".png"

            // replace the colon from the img name
            articleToBeAdded.img = imgName.replace(/:/g, '-')

            // Save the base64 image to the public directory
            const filePath = path.join(process.cwd(), 'public/uploads', articleToBeAdded.img);
            fs.writeFileSync(filePath, buffer);
        }
        const article = new Article(articleToBeAdded)
        // @ts-ignore
        article.createdBy = token.user._id;
        await article.save()
        return NextResponse.json({ "message": "Article created successfully" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ "message": "Something went wrong" }, { status: 500 })
    }

}