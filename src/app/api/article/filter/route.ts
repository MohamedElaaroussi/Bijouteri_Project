import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server"
import { OPTIONS } from "../../auth/[...nextauth]/route";
import { getPaginatedResult } from "@/utils/util";
import { Article } from "../../../../../models/Article";


// filter article
export const GET = async (req: NextRequest) => {

    const session = await getServerSession(OPTIONS);
    if (!session) {
        return NextResponse.json({ message: "Not authenticated" }, { status: 403 });
    }

    // getting data from the req url
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const buyPrice = searchParams.get("buyPrice");
    const sellPrice = searchParams.get("sellPrice");
    const color = searchParams.get("color");
    const weight = searchParams.get("weight");
    const typeArticle = searchParams.get("typeArticle");
    const barCode = searchParams.get("barCode");
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    try {

        const query = Article.find()

        if (buyPrice) query.where("buyPrice").equals(buyPrice)
        if (sellPrice) query.where("sellPrice").equals(sellPrice)
        if (color) query.where({ color: { $regex: ".*" + color + ".*", $options: "i" } });
        if (weight) query.where("weight").equals(weight)
        if (typeArticle) query.where({ typeArticle: { $regex: ".*" + typeArticle + ".*", $options: "i" } });
        if (barCode) query.where("barCode").equals(barCode)

        // see how many Article
        let totalArticles = await Article.countDocuments(query);


        // if the filter return no Article
        if (!totalArticles) {
            return NextResponse.json(
                {
                    message: "No Article(s) was found matching your criteria",
                },
                { status: 200 },
            );
        }

        // calling a method that return start index and end index and a results which in our case Article
        const { startIndex, results } = getPaginatedResult(page, limit, totalArticles);

        // getting articles based on the query + pagination
        const filteredArticles = await Article.find(query)
            .skip(startIndex)
            .limit(limit)
            .exec();

        // make the result equal the filteredArticles
        results.result = filteredArticles;

        return NextResponse.json(
            {
                message: "the Filter was applied successfully",
                filtered: results,
                total: totalArticles,
            },
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 },
        );
    }
}