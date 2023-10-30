import { NextRequest, NextResponse } from "next/server";
import { Client } from "../../../../../models/Client";
import { getPaginatedResult } from "@/utils/util";
import { connectToDatabase } from "../../../../../db/connection";


connectToDatabase()
export const GET = async (req: NextRequest) => {

    // getting data from the req url
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const username = searchParams.get("username");
    const phone = searchParams.get("phone");
    const date = searchParams.get("date");
    const total = searchParams.get("total");
    const status = searchParams.get("status");
    const purchase = searchParams.get("purchase");
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    try {
        // building the query
        let query = Client.find();

        if (username) {
            query.where({
                username: { $regex: ".*" + username + ".*", $options: "i" },
            });
        }

        if (phone) {
            query.where({
                phone: { $regex: ".*" + phone + ".*" },
            });
        }

        if (date) {
            const start = new Date(date);
            const end = new Date(date);
            end.setHours(23, 59, 59, 999);
            // @ts-ignore
            query.where("createdAt").gte(start).lte(end);
        }

        if (total) {
            query.where("total").equals(total);
        }

        if (purchase) {
            query.where("purchase").equals(purchase);
        }

        if (status) {
            query.where({
                status: { $regex: status, $options: "i" },
            });
        }

        // see how many client
        let totalClient = await Client.countDocuments(query);

        // if the filter return no client
        if (!totalClient) {
            return NextResponse.json(
                {
                    message: "No client(s) was found matching your criteria",
                },
                { status: 404 },
            );
        }

        // calling a method that return start index and end index and a results which in our case client
        const { startIndex, results } = getPaginatedResult(
            page,
            limit,
            totalClient,
        );

        // getting client based on the query + pagination
        const filteredClient = await query
            .skip(startIndex)
            .limit(limit)
            .exec();



        // make the result equal the filteredClient
        results.result = filteredClient;

        return NextResponse.json(
            {
                message: "the Filter was applied successfully",
                filtered: results,
                total: totalClient,
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