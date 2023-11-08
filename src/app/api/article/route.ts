import { NextRequest, NextResponse } from "next/server"
import { Article } from "../../../../models/Article";
import { getPaginatedResult } from "@/utils/util";
import { getServerSession } from "next-auth";
import { OPTIONS } from "../auth/[...nextauth]/route";
import { connectToDatabase } from "../../../../db/connection";
import { Catalogue } from "../../../../models/Catalogue";


connectToDatabase()

// Get article + pagination
export const GET = async (req: NextRequest) => {

    const session = await getServerSession(OPTIONS);

    if (!session) {
        return NextResponse.json(
            { message: "Not authenticated" },
            { status: 403 },
        );
    }

    // getting the page number and limit from the url
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;
    const totalArticles = await Article.estimatedDocumentCount()

    // calling a method that return start index and end index, 
    // and results object that may contain next and previous page
    const { startIndex, results } = getPaginatedResult(page, limit, totalArticles)

    try {
        const articles = await Article.find().skip(startIndex).limit(limit).exec();
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
        const articleToBeAdded = await req.json()
        if (articleToBeAdded.catalogue.length) {
            await Catalogue.updateMany({ _id: { $in: articleToBeAdded.catalogue } }, { $inc: { nbrOfArticles: articleToBeAdded.nbrOfArticles } })
        }
        const article = new Article(articleToBeAdded)
        await article.save()
        return NextResponse.json({ "message": "Article created successfully" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ "message": "Something went wrong" }, { status: 500 })
    }

}