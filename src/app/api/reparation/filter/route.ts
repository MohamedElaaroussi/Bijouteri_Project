import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../../db/connection";
import { Reparation } from "../../../../../models/Reparation";
import { getPaginatedResult } from "@/utils/util";

connectToDatabase();
// filter repair with pagination
export const GET = async (req: NextRequest) => {

    // getting data from the req url
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const phone = searchParams.get("phone");
    const repair = searchParams.get("repair");
    const date = searchParams.get("date");
    const totalPrice = searchParams.get("totalPrice");
    const article = searchParams.get("article");
    const status = searchParams.get("status");
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    try {
        // building the query
        let query = Reparation.find();

        if (repair) {
            query.where("repair").equals(repair);
        }

        if (article) {
            query.findOne({ "articles.article": article }).populate("")
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

        if (totalPrice) {
            query.where("totalPrice").equals(totalPrice);
        }

        console.log(query);

        // see how many reparation
        let totalReparation = await Reparation.countDocuments(query);

        // if the filter return no reparation
        if (!totalReparation) {
            return NextResponse.json(
                {
                    message: "No reparation(s) was found matching your criteria",
                },
                { status: 200 },
            );
        }

        // calling a method that return start index and end index and a results which in our case reparation
        const { startIndex, results } = getPaginatedResult(
            page,
            limit,
            totalReparation,
        );

        // getting repair based on the query + pagination
        const filteredReparation = await query
            .skip(startIndex)
            .limit(limit)
            .exec();

        // make the result equal the filteredReparation
        results.result = filteredReparation;

        return NextResponse.json(
            {
                message: "the Filter was applied successfully",
                filtered: results,
                total: totalReparation,
            },
            { status: 200 },
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 },
        );
    }
};
