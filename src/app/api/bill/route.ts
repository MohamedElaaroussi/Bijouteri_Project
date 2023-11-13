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
        const searchBtwDate = { ...(startDate && endDate ? { $and: [{ "createdAt": { $gte: startDate } }, { "createdAt": { $lte: endDate } }] } : {}) }
        const searchByQuery = {
            ...(search ? {
                $or: [
                    { deliveryMethod: { $regex: `.*${search}.*`, $options: 'i' } },
                    { paymentMethod: { $regex: `.*${search}.*`, $options: 'i' } },
                    { 'client.username': { $regex: `.*${search}.*`, $options: 'i' } },
                    { 'client.email': { $regex: `.*${search}.*`, $options: 'i' } },
                    { paid: parseFloat(search) },
                    { total: parseFloat(search) },
                    { status: { $regex: `.*${search}.*`, $options: 'i' } },
                ]
            } : {})
        }
        const totalBills = await Bill.countDocuments({ ...searchByQuery, ...searchBtwDate })

        // calling a method that return start index and end index, 
        // and results object that may contain next and previous page
        const { startIndex, results } = getPaginatedResult(page, limit, totalBills)

        const bill = await Bill.find({ ...searchByQuery, ...searchBtwDate }).skip(startIndex).limit(limit)
        console.log(bill);

        const calRevenueAndPaidAmount = await Bill.aggregate([{
            $group: { _id: "_id", revenue: { $sum: "$total" }, paid: { $sum: "$paid" } },
        }])
        const { revenue, paid } = calRevenueAndPaidAmount[0]
        const nonPaid = revenue - paid;
        results.total = totalBills;
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