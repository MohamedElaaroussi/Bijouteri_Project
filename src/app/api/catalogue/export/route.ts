import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../../db/connection";
import excelJS from 'exceljs'
import { Catalogue } from "../../../../../models/Catalogue";

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
        const catalog = await Catalogue.find(searchBtwDate).lean()

        const workBook = new excelJS.Workbook()
        const workSheet = workBook.addWorksheet("catalogue")

        workSheet.columns = [
            { header: "_id", key: "_id" },
            { header: "Catalogue", key: "catalogue" },
            { header: "Status", key: "status" },
            { header: "Number of Articles", key: "nbrOfArticles" },
            { header: "Created At", key: "createdAt" },
        ]

        for (let i = 1; i <= catalog.length; i++) {
            const formattedCat = { ...catalog[i - 1], _id: i, createdAt: catalog[i - 1].createdAt.toString() }
            workSheet.addRow(formattedCat)
        }

        const catBuffer = await workBook.csv.writeBuffer()
        const res = new NextResponse(catBuffer, {
            status: 200,
            headers: new Headers({
                "content-disposition": `attachment; filename=catalogue.csv`,
                "Content-Type": "text/csv",
            }),
        });
        return res
    } catch (error) {
        return NextResponse.json({ "message": "Something went wrong" }, { status: 500 })
    }
}