import { NextRequest, NextResponse } from "next/server";
import { Reparation } from "../../../../models/Reparation";
import { getPaginatedResult } from "@/utils/util";
import { getToken } from "next-auth/jwt";
import { connectToDatabase } from "../../../../db/connection";

connectToDatabase()
// get All Reparation
export const GET = async (req: NextRequest, res: NextResponse) => {
    // getting the page number and limit from the url
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    try {
        const totalReparation = await Reparation.estimatedDocumentCount()
        // calling a method that return start index and end index, 
        // and results object that may contain next and previous page
        const { startIndex, results } = getPaginatedResult(page, limit, totalReparation)

        const repairs = await Reparation.find().populate('repair', "username phone").skip(startIndex).limit(limit)
        results.total = totalReparation;
        results.result = repairs;
        return NextResponse.json(results, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
}

export const POST = async (req: NextRequest, res: NextResponse) => {

    try {
        const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
        const reparation = await req.json()
        const createdReparation = new Reparation(reparation)
        // @ts-ignore
        createdReparation.createdBy = token.user._id;
        await createdReparation.save()
        return NextResponse.json({ "message": "Reparation created successfully" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ "message": "Something went wrong" }, { status: 500 })
    }
}