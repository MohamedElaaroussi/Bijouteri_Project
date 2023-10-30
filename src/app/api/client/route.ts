import { NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "../../../../db/connection"
import { Client } from "../../../../models/Client"
import { getToken } from "next-auth/jwt"
import { getPaginatedResult } from "@/utils/util"

connectToDatabase()
export const GET = async (req: NextRequest) => {
    // getting the page number and limit from the url
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;
    const totalClient = await Client.estimatedDocumentCount()

    // calling a method that return start index and end index, 
    // and results object that may contain next and previous page
    const { startIndex, results } = getPaginatedResult(page, limit, totalClient)

    try {
        const clients = await Client.find().skip(startIndex).limit(limit).exec();
        results.total = totalClient;
        results.result = clients;
        return NextResponse.json(results, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })

    }
}

export const POST = async (req: NextRequest) => {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    try {
        const client = await req.json()
        // check if email or phone exist already 
        const phoneExistAlready = await Client.findOne({ phone: client?.phone })
        const emailExistAlready = await Client.findOne({ email: client?.email })

        if (phoneExistAlready) {
            return NextResponse.json({ "message": "Phone already exist" }, { status: 400 })
        }
        if (emailExistAlready) {
            return NextResponse.json({ "message": "email already exist" }, { status: 400 })
        }
        // @ts-ignore
        client.createdBy = token.user._id;
        const createClient = new Client(client)
        await createClient.save()
        return NextResponse.json({ message: "Client was created successfully" }, { status: 201 })
    } catch {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
}