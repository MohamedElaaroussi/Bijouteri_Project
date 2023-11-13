import { Reparation } from './../../../../../models/Reparation';
import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../../db/connection";
import excelJS from 'exceljs'

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
        const reparation = await Reparation.find(searchBtwDate).populate("articles").lean()

        const workBook = new excelJS.Workbook()
        const workSheet = workBook.addWorksheet("reparation")

        workSheet.columns = [
            { header: "Status", key: "status" },
            { header: "Paid By Us", key: "paidByUs" },
            { header: "Repair", key: "repair" },
            { header: "Articles", key: "articles" },
            { header: "Total Price", key: "totalPrice" },
            { header: "Transaction", key: "transaction" },
            { header: "Created At", key: "createdAt" },
        ];

        for (let i = 1; i <= reparation.length; i++) {
            const selectedReparation = reparation[i - 1]
            const formatted = { ...selectedReparation, _id: i, createdAt: selectedReparation.createdAt.toString() }
            workSheet.addRow(formatted)
        }

        const buffer = await workBook.csv.writeBuffer()
        const res = new NextResponse(buffer, {
            status: 200,
            headers: new Headers({
                "content-disposition": `attachment; filename=reparation.csv`,
                "Content-Type": "text/csv",
            }),
        });
        return res
    } catch (error) {
        return NextResponse.json({ "message": "Something went wrong" }, { status: 500 })
    }
}