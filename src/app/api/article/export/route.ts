import { NextRequest, NextResponse } from "next/server";
import { Article } from "../../../../../models/Article";
import excelJS from 'exceljs'
import { streamFile } from "../../catalogue/export/route";
import fs, { Stats } from "fs";
import { connectToDatabase } from "../../../../../db/connection";


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
        const article = await Article.find(searchBtwDate).lean()

        const workBook = new excelJS.Workbook()
        const workSheet = workBook.addWorksheet("article")

        workSheet.columns = [
            { header: "_id", key: "_id" },
            { header: "name", key: "name" },
            { header: "buy Price", key: "buyPrice" },
            { header: "Sell Price", key: "sellPrice" },
            { header: "Weight", key: "weight" },
            { header: "color", key: "color" },
            { header: "nbrOfArticles", key: "nbrOfArticles" },
            { header: "typeArticle", key: "typeArticle" },
            { header: "barCode", key: "barCode" },
            { header: "Created At", key: "createdAt" },

        ]

        for (let i = 1; i <= article.length; i++) {
            const formattedArticle = { ...article[i - 1], _id: i, createdAt: article[i - 1].createdAt.toString() }
            workSheet.addRow(formattedArticle)
        }

        await workBook.csv.writeFile("article.csv")

        const data: ReadableStream<Uint8Array> = streamFile("article.csv");
        const res = new NextResponse(data, {
            status: 200,
            headers: new Headers({
                "content-disposition": `attachment; filename=article.csv`,
                "Content-Type": "text/csv",
            }),
        });
        return res
    } catch (error) {
        return NextResponse.json({ "message": "Something went wrong" }, { status: 500 })
    }
}