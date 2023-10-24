import { NextRequest, NextResponse } from "next/server";
import { Sale } from "../../../../../models/Sale";
import { getPaginatedResult } from "@/utils/util";
import { connectToDatabase } from "../../../../../db/connection";


connectToDatabase()

// filter sales
export const GET = async (req: NextRequest) => {

    // getting data from the req url
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);

    const client = searchParams.get("client");
    const status = searchParams.get("status");
    const date = searchParams.get("date");
    const totalPrice = searchParams.get("totalPrice");
    const totalWeight = searchParams.get("totalWeight");

    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    try {
        // building the query
        let query = Sale.find().populate({ path: "client", select: "username", match: { username: { $eq: client } } }).populate({ path: "items.article", select: 'img weight' });

        if (date) {
            const start = new Date(date);
            const end = new Date(date);
            end.setHours(23, 59, 59, 999);
            // @ts-ignore
            query.where("date").gte(start).lte(end);
        }

        if (totalPrice) {
            query.where("totalPrice").equals(totalPrice);
        }

        if (totalWeight) {
            query.where("totalWeight").equals(totalWeight);
        }

        if (status) {
            query.where("status").equals(status);
        }

        // see how many Sale
        let totalSale = await Sale.countDocuments(query)

        // if the filter return no Sale
        if (!totalSale) {
            return NextResponse.json(
                {
                    message: "No sale(s) was found matching your criteria",
                },
                { status: 200 },
            );
        }

        // calling a method that return start index and end index and a results which in our case Sale
        const { startIndex, results } = getPaginatedResult(
            page,
            limit,
            totalSale,
        );

        // getting Sale based on the query + pagination
        const filteredSale = await query
            .skip(startIndex)
            .limit(limit)
            .exec();

        // make the result equal the filteredSale
        results.result = filteredSale;

        return NextResponse.json(
            {
                message: "the Filter was applied successfully",
                filtered: results,
                total: totalSale,
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