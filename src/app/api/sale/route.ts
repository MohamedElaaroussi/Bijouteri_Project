
import { NextRequest, NextResponse } from "next/server";
import { getPaginatedResult } from "@/utils/util";
import { connectToDatabase } from "../../../../db/connection";
import { Article } from "../../../../models/Article";
import { Sale } from "../../../../models/Sale";
import { getToken } from "next-auth/jwt";


connectToDatabase()

// get sales + pagination
export const GET = async (req: NextRequest, res: NextResponse) => {

    // getting the page number and limit from the url
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;
    const totalSales = await Sale.estimatedDocumentCount()

    // calling a method that return start index and end index, 
    // and results object that may contain next and previous page
    const { startIndex, results } = getPaginatedResult(page, limit, totalSales)

    try {
        const sales = await Sale.find().skip(startIndex).limit(limit).populate({ path: "client", select: "username" }).populate({ path: "items.article", select: 'img weight' })
        results.total = totalSales;
        results.result = sales;
        return NextResponse.json(results, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
};

export const POST = async (req: NextRequest, res: NextResponse) => {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    try {
        const saleToBeAdded = await req.json()
        const itemsId: string[] = [];
        if (saleToBeAdded?.items?.length > 0) {
            saleToBeAdded.items.forEach((item: any) => {
                itemsId.push(item.article.id);
            });
            await Article.updateMany({ _id: { $in: itemsId } }, { $inc: { nbrOfArticles: -1 } })
        }
        const sale = new Sale(saleToBeAdded)
        // @ts-ignore
        sale.createdBy = token.user._id
        await sale.save()
        return NextResponse.json({ "message": "Sale was created" }, { status: 201 })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ "message": "Something went wrong" }, { status: 500 })
    }
};
