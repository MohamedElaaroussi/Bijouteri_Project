import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../../db/connection";
import excelJS from 'exceljs'
import { Repair } from "../../../../../models/Repair";

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
        const repair = await Repair.find(searchBtwDate).lean()

        const workBook = new excelJS.Workbook()
        const workSheet = workBook.addWorksheet("repair")

        workSheet.columns = [
            { header: "id", key: "_id" },
            { header: "Username", key: "username" },
            { header: "Email", key: "email" },
            { header: "Phone", key: "phone" },
            { header: "Address", key: "address" },
            { header: "Status", key: "status" },
            { header: "Created At", key: "createdAt" },
        ];

        for (let i = 1; i <= repair.length; i++) {
            const selectedRepair = repair[i - 1]
            const formatted = { ...selectedRepair, _id: i, createdAt: selectedRepair.createdAt.toString() }
            workSheet.addRow(formatted)
        }

        const buffer = await workBook.csv.writeBuffer()
        const res = new NextResponse(buffer, {
            status: 200,
            headers: new Headers({
                "content-disposition": `attachment; filename=repair.csv`,
                "Content-Type": "text/csv",
            }),
        });
        return res
    } catch (error) {
        return NextResponse.json({ "message": "Something went wrong" }, { status: 500 })
    }
}