import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../../db/connection";
import { Repair } from "../../../../../models/Repair";
import { getPaginatedResult } from "@/utils/util";

connectToDatabase();

// filter repair with pagination
export const GET = async (req: NextRequest) => {

    // getting data from the req url
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const username = searchParams.get("username");
    const phone = searchParams.get("phone");
    const date = searchParams.get("date");
    const status = searchParams.get("status");
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    try {
        // building the query
        let query = Repair.find();

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

        if (status) {
            query.where({
                status: { $regex: status, $options: "i" },
            });
        }

        // see how many repair
        let totalRepair = await Repair.countDocuments(query);

        // if the filter return no repair
        if (!totalRepair) {
            return NextResponse.json(
                {
                    message: "No repair(s) was found matching your criteria",
                },
                { status: 200 },
            );
        }

        // calling a method that return start index and end index and a results which in our case repair
        const { startIndex, results } = getPaginatedResult(
            page,
            limit,
            totalRepair,
        );

        // getting repair based on the query + pagination
        const filteredRepair = await query
            .skip(startIndex)
            .limit(limit)
            .exec();

        // make the result equal the filteredRepair
        results.result = filteredRepair;

        return NextResponse.json(
            {
                message: "the Filter was applied successfully",
                filtered: results,
                total: totalRepair,
            },
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 },
        );
    }
};
