import { NextRequest, NextResponse } from "next/server";
import { Catalogue } from "../../../../../models/Catalogue";
import { connectToDatabase } from "../../../../../db/connection";
import { getPaginatedResult } from "@/utils/util";


connectToDatabase()
export const GET = async (req: NextRequest, res: NextResponse) => {

    // getting data from the req url
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const catalogue = searchParams.get("catalogue");
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");
    const nbrOfArticles = searchParams.get("nbrOfArticles");
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    try {
        // building the query
        let query = Catalogue.find();

        if (catalogue) {
            query.where({
                catalogue: { $regex: ".*" + catalogue + ".*", $options: "i" },
            });
        }

        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            end.setHours(23, 59, 59, 999);
            // @ts-ignore
            query.where("createdAt").gte(start).lte(end);
        }

        if (nbrOfArticles) {
            query.where("nbrOfArticles").equals(nbrOfArticles);
        }

        // see how many client
        let totalCatalogue = await Catalogue.countDocuments(query);

        // if the filter return no client
        if (!totalCatalogue) {
            return NextResponse.json(
                {
                    message: "No Catalogue(s) was found matching your criteria",
                },
                { status: 404 },
            );
        }

        // calling a method that return start index and end index and a results which in our case Catalogue
        const { startIndex, results } = getPaginatedResult(
            page,
            limit,
            totalCatalogue,
        );

        // getting Catalogue based on the query + pagination
        const filteredCatalogue = await query
            .skip(startIndex)
            .limit(limit)
            .exec();



        // make the result equal the filteredCatalogue
        results.result = filteredCatalogue;

        return NextResponse.json(
            {
                message: "the Filter was applied successfully",
                filtered: results,
                total: totalCatalogue,
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