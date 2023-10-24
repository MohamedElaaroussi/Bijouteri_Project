import { NextRequest, NextResponse } from "next/server"
import { Client } from "../../../../../models/Client";
import { connectToDatabase } from "../../../../../db/connection";


connectToDatabase()
// GET CLIENT BY ID
export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
        const client = await Client.findById(params.id).exec();
        if (!client) {
            return NextResponse.json({ message: "Client not found" }, { status: 404 });
        }
        return NextResponse.json(client, { status: 200 });
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