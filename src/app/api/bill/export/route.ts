import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../../db/connection";
import excelJS from 'exceljs'
import { Bill } from "../../../../../models/Bill";

connectToDatabase()
export const GET = async (req: NextRequest) => {

    try {
        // getting the page number and limit from the url
        const url = new URL(req.url);
        const searchParams = new URLSearchParams(url.search);
        let startDate = searchParams.get("startDate");
        let endDate: string | Date | null = searchParams.get("endDate");


        if (endDate) {
            endDate = new Date(endDate);
            endDate.setHours(23, 59, 59, 999);
        }

        const searchBtwDate = { ...(startDate && endDate ? { $and: [{ "createdAt": { $gte: startDate } }, { "createdAt": { $lte: endDate } }] } : {}) }
        const bill = await Bill.find(searchBtwDate).lean()

        const workBook = new excelJS.Workbook()
        const workSheet = workBook.addWorksheet("bill")

        workSheet.columns = [
            { header: "id", key: "_id" },
            { header: "Delivery Method", key: "deliveryMethod" },
            { header: "Payment Method", key: "paymentMethod" },
            { header: "Client", key: "client" },
            { header: "Sale", key: "sale" },
            { header: "Paid", key: "paid" },
            { header: "Total", key: "total" },
            { header: "Status", key: "status" },
            { header: "Created At", key: "createdAt" },
        ];

        for (let i = 1; i <= bill.length; i++) {
            const selectedBill = bill[i - 1]
            const formatted = { ...selectedBill, _id: i, createdAt: selectedBill.createdAt.toString(), client: selectedBill.client.username }
            workSheet.addRow(formatted)
        }

        const buffer = await workBook.csv.writeBuffer()
        const res = new NextResponse(buffer, {
            status: 200,
            headers: new Headers({
                "content-disposition": `attachment; filename=bill.csv`,
                "Content-Type": "text/csv",
            }),
        });
        return res
    } catch (error) {
        console.log(error);

        return NextResponse.json({ "message": "Something went wrong" }, { status: 500 })
    }
}