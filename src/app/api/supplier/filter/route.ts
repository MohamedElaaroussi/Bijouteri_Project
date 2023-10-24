import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../../db/connection";
import { Supplier } from "../../../../../models/Supplier";
import { getServerSession } from "next-auth/next";
import { OPTIONS } from "../../auth/[...nextauth]/route";
import { getPaginatedResult } from "@/utils/util";

connectToDatabase();

// filter supplier with pagination
export const GET = async (req: NextRequest) => {
    const session = await getServerSession(OPTIONS);
    if (!session) {
        return NextResponse.json({ message: "Not authenticated" }, { status: 403 });
    }

    // getting data from the req url
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const username = searchParams.get("username");
    const phone = searchParams.get("phone");
    const date = searchParams.get("date");
    const total = searchParams.get("total");
    const status = searchParams.get("status");
    const article = searchParams.get("article");
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    try {
        // building the query
        let query = Supplier.find();

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

        if (article) {
            query.where("article").equals(article);
        }

        if (status) {
            query.where({
                status: { $regex: status, $options: "i" },
            });
        }

        // see how many supplier
        let totalSupplier = await Supplier.countDocuments(query);

        // if the filter return no supplier
        if (!totalSupplier) {
            return NextResponse.json(
                {
                    message: "No fournisseur(s) was found matching your criteria",
                },
                { status: 200 },
            );
        }

        // calling a method that return start index and end index and a results which in our case supplier
        const { startIndex, results } = getPaginatedResult(
            page,
            limit,
            totalSupplier,
        );

        // getting supplier based on the query + pagination
        const filteredSupplier = await query
            .skip(startIndex)
            .limit(limit)
            .exec();



        // make the result equal the filteredSupplier
        results.result = filteredSupplier;

        return NextResponse.json(
            {
                message: "the Filter was applied successfully",
                filtered: results,
                total: totalSupplier,
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
