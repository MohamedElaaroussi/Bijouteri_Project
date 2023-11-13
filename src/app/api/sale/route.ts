
import { NextRequest, NextResponse } from "next/server";
import { getPaginatedResult } from "@/utils/util";
import { connectToDatabase } from "../../../../db/connection";
import { Article } from "../../../../models/Article";
import { Sale } from "../../../../models/Sale";
import { getToken } from "next-auth/jwt";
import { Client } from "../../../../models/Client";


connectToDatabase()
// get sales + pagination
export const GET = async (req: NextRequest, res: NextResponse) => {

    // getting the page number and limit from the url
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const search = searchParams.get("search");
    let startDate = searchParams.get("startDate");
    let endDate: string | Date | null = searchParams.get("endDate");
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    if (endDate) {
        endDate = new Date(endDate);
        endDate.setHours(23, 59, 59, 999);
    }

    try {
        const client = await Client.find({ "username": { $regex: ".*" + search + ".*", $options: 'i' } }, "id")
        const clientFilter = { ...(client ? { "client": { $in: client } } : {}) }
        const searchByQuery = { ...(search ? { $or: [clientFilter, { 'description': { $regex: ".*" + search ? search : "" + ".*", $options: 'i' } }] } : {}) }
        const searchBtwDate = { ...(startDate && endDate ? { $and: [{ "createdAt": { $gte: startDate } }, { "createdAt": { $lte: endDate } }] } : {}) }

        const totalSales = await Sale.countDocuments({ ...searchByQuery, ...searchBtwDate })
        // calling a method that return start index and end index, 
        // and results object that may contain next and previous page
        const { startIndex, results } = getPaginatedResult(page, limit, totalSales)
        const sales = await Sale.find({ ...searchByQuery, ...searchBtwDate }).skip(startIndex).limit(limit).populate({ path: "client", select: "username" }).populate({ path: "items.article", select: 'img weight' })
        results.total = totalSales;
        results.result = sales;
        return NextResponse.json(results, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
};

export const POST = async (req: NextRequest, res: NextResponse) => {

    try {
        const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
        const saleToBeAdded = await req.json()
        const itemsId: string[] = [];
        if (saleToBeAdded?.items?.length > 0) {
            saleToBeAdded.items.forEach((item: any) => {
                itemsId.push(item.article.id);
            });
            await Article.updateMany({ _id: { $in: itemsId } }, { $inc: { nbrOfArticles: -1 } })
        }
        const client = await Client.findById({ _id: saleToBeAdded.client })
        const sale = new Sale(saleToBeAdded)
        // @ts-ignore
        sale.createdBy = token.user._id
        await sale.save()
        console.log(sale);
        client.total += 1;
        client.purchase += sale.totalPrice;
        await client.save()
        return NextResponse.json({ "message": "Sale was created" }, { status: 201 })

    } catch (error) {
        console.log(error);

        return NextResponse.json({ "message": "Something went wrong" }, { status: 500 })
    }
};
