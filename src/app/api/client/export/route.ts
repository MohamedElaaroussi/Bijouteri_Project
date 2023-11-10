import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../../db/connection";
import excelJS from 'exceljs'
import { Client } from "../../../../../models/Client";

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
        const client = await Client.find(searchBtwDate).lean()

        const workBook = new excelJS.Workbook()
        const workSheet = workBook.addWorksheet("client")

        workSheet.columns = [
            { header: "id", key: "_id" },
            { header: "Username", key: "username" },
            { header: "Email", key: "email" },
            { header: "Phone", key: "phone" },
            { header: "Address", key: "address" },
            { header: "Status", key: "status" },
            { header: "Client Type", key: "clientType" },
            { header: "Purchase", key: "purchase" },
            { header: "Total", key: "total" },
            { header: "Created By", key: "createdBy" },
        ];

        for (let i = 1; i <= client.length; i++) {
            const selectedClient = client[i - 1]
            const formattedCat = { ...selectedClient, _id: i, createdAt: selectedClient.createdAt.toString() }
            workSheet.addRow(formattedCat)
        }

        const catBuffer = await workBook.csv.writeBuffer()
        const res = new NextResponse(catBuffer, {
            status: 200,
            headers: new Headers({
                "content-disposition": `attachment; filename=client.csv`,
                "Content-Type": "text/csv",
            }),
        });
        return res
    } catch (error) {
        return NextResponse.json({ "message": "Something went wrong" }, { status: 500 })
    }
}