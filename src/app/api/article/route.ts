import { NextRequest, NextResponse } from "next/server"
import { Article } from "../../../../models/Article";
import { getPaginatedResult } from "@/utils/util";
import { getToken } from "next-auth/jwt"
import { connectToDatabase } from "../../../../db/connection";
import { Catalogue } from "../../../../models/Catalogue";


connectToDatabase()
// Get article + pagination
export const GET = async (req: NextRequest) => {

    // getting the page number and limit from the url
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const search = searchParams.get("search");
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;
    try {
        const totalArticles = await Article.countDocuments({ "name": { $regex: ".*" + search + ".*", $options: 'i' } })

        // calling a method that return start index and end index, 
        // and results object that may contain next and previous page
        const { startIndex, results } = getPaginatedResult(page, limit, totalArticles)
        const articles = await Article.find({ "name": { $regex: ".*" + search + ".*", $options: 'i' } }).skip(startIndex).limit(limit).exec();
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
        const article = new Article(articleToBeAdded)
        // @ts-ignore
        article.createdBy = token.user._id;
        await article.save()
        return NextResponse.json({ "message": "Article created successfully" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ "message": "Something went wrong" }, { status: 500 })
    }

}