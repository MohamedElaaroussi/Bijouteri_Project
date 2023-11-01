import { NextRequest, NextResponse } from "next/server"
import { Bill } from "../../../../models/Bill"
import { connectToDatabase } from "../../../../db/connection"
import { getPaginatedResult } from "@/utils/util"

connectToDatabase()
// get all bills with pagination
export const GET = async (req: NextRequest) => {

    // getting the page number and limit from the url
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    try {
        const totalCatalog = await Bill.estimatedDocumentCount()

        // calling a method that return start index and end index, 
        // and results object that may contain next and previous page
        const { startIndex, results } = getPaginatedResult(page, limit, totalCatalog)

        const bill = await Bill.find().skip(startIndex).limit(limit)
        const calRevenueAndPaidAmount = await Bill.aggregate([{
            $group: { _id: "_id", revenue: { $sum: "$total" }, paid: { $sum: "$paid" } },
        }])
        const { revenue, paid } = calRevenueAndPaidAmount[0]
        const nonPaid = revenue - paid;
        results.total = totalCatalog;
        results.result = bill;
        return NextResponse.json({ ...results, revenue, nonPaid }, { status: 200 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
}

export const POST = async (req: NextRequest, res: NextResponse) => {
    try {
        const billToBeAdded = await req.json()
        const bill = new Bill(billToBeAdded)
        await bill.save()
        return NextResponse.json({ message: "Bill Created successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
}