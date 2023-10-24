import { NextRequest, NextResponse } from "next/server";
import { Sale } from "../../../../../models/Sale";
import { connectToDatabase } from "../../../../../db/connection";


connectToDatabase();
// get sale by id
export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {

    const saleId = params.id;
    try {
        const sale = await Sale.findById(saleId).populate({ path: "client", select: "username" }).populate({ path: "items.article", select: 'img weight' }).populate("createdBy", "username -_id");
        if (!sale) {
            return NextResponse.json({ message: "Sale not found" }, { status: 404 });
        }
        return NextResponse.json(sale, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 },
        );
    }
}

// update sale by id 
export const PUT = async (req: NextRequest, { params }: { params: { id: number } }) => {

    const saleId = params.id;
    // updated data
    const { description, items, client, date, category } = await req.json();
    try {
        // search for the Sale
        const saleToBeUpdated = await Sale.findById(saleId)
        if (!saleToBeUpdated) {
            return NextResponse.json({ message: "Sale not found" }, { status: 404 });
        }

        if (description) {
            saleToBeUpdated.description = description
        }

        if (items) {
            saleToBeUpdated.items = items
        }

        if (client) {
            saleToBeUpdated.client = client
        }

        if (category) {
            saleToBeUpdated.category = category
        }

        if (date) {
            saleToBeUpdated.date = date
        }

        await saleToBeUpdated.save()
        return NextResponse.json(
            { message: "Sale was updated successfully" },
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(
            { message: "something went wrong" },
            { status: 500 },
        );
    }
}

// delete sale by id
export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {

    const saleId = params.id;
    try {
        const sale = await Sale.findByIdAndDelete(saleId);
        // check if the sale was deleted
        if (!sale) {
            return NextResponse.json({ message: "Sale not found" }, { status: 404 });
        }
        return NextResponse.json(
            { message: "Sale was deleted successfully" },
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 },
        );
    }
}