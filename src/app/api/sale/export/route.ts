import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../../db/connection";
import excelJS from 'exceljs'
import { Sale } from "../../../../../models/Sale";

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
        const sale = await Sale.find(searchBtwDate).populate('items.article client')

        const workBook = new excelJS.Workbook()
        const workSheet = workBook.addWorksheet("sale")

        workSheet.columns = [
            { header: "_id", key: "_id" },
            { header: "client", key: "client" },
            { header: "articles", key: "articles" },
            { header: "status", key: "status" },
            { header: "totalPrice", key: "totalPrice" },
            { header: "totalWeight", key: "totalWeight" },
            { header: "paid", key: "paid" },
            { header: "Created At", key: "createdAt" },
        ]



        for (let i = 1; i <= sale.length; i++) {
            const selectedSale = sale[i - 1];
            console.log(selectedSale);

            const articles = selectedSale.items.map((s: any) => (s.article.name))

            const formatted = {
                _id: i,
                totalPrice: selectedSale.totalPrice,
                status: selectedSale.status,
                paid: selectedSale.paid,
                totalWeight: selectedSale.totalWeight,
                createdAt: selectedSale.createdAt.toString(),
                client: selectedSale.client.username,
                articles
            }
            workSheet.addRow(formatted)
        }

        const saleBuffer = await workBook.csv.writeBuffer()

        const res = new NextResponse(saleBuffer, {
            status: 200,
            headers: new Headers({
                "content-disposition": `attachment; filename=sale.csv`,
                "Content-Type": "text/csv",
            }),
        });
        return res
    } catch (error) {
        return NextResponse.json({ "message": "Something went wrong" }, { status: 500 })
    }
}