import { NextRequest, NextResponse } from "next/server"
import { Client } from "../../../../../models/Client";
import { connectToDatabase } from "../../../../../db/connection";
import { Sale, SaleModel } from "../../../../../models/Sale";
import { getPaginatedResult } from "@/utils/util";


connectToDatabase()
// GET CLIENT BY ID
export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {

    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;
    try {
        const clientId = params.id
        const client = await Client.findById(clientId).exec();
        if (!client) {
            return NextResponse.json({ message: "Client not found" }, { status: 404 });
        }
        // count the sales made by the client
        const clientSalesCount = await Sale.find({ "client": clientId }).populate({ path: "items.article", select: 'img weight' })
        const { startIndex, results } = getPaginatedResult(page, limit, clientSalesCount.length)
        let totalPayment = 0;
        let totalPaid = 0;
        let clientSales;
        if (clientSalesCount.length > 0) {
            clientSales = await Sale.find({ "client": clientId }).populate({ path: "items.article", select: 'img weight' }).skip(startIndex).limit(limit)

            // calculate the total payment that client made
            totalPayment = clientSalesCount?.reduce((total, item) => {
                return total + item.totalPrice
            }, 0);

            // calculate the total amount that the client paid
            totalPaid = clientSalesCount?.reduce((total, item) => {
                return total + item.paid
            }, 0);
        }
        const nonPaid = (totalPayment - totalPaid);
        results.result = clientSales ?? []
        results.total = clientSalesCount.length
        return NextResponse.json({ client, ...results, totalPayment, nonPaid }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 },
        );
    }
}

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {

    try {
        const clientId = params.id
        const updatedField = await req.json()
        await Client.findByIdAndUpdate(clientId, updatedField, { runValidators: true })
        return NextResponse.json(
            { message: "Client was updated successfully" },
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 },
        );
    }
}

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {

    const clientId = params.id;
    try {
        const client = await Client.findByIdAndDelete(clientId);

        // check if the client was deleted
        if (!client) {
            return NextResponse.json({ message: "client not found" }, { status: 404 });
        }
        return NextResponse.json(
            { message: "client was deleted successfully" },
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 },
        );
    }
}