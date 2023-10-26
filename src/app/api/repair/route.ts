import { NextRequest, NextResponse } from "next/server";
import { Repair } from "../../../../models/Repair";
import { getPaginatedResult } from "@/utils/util";
import { getToken } from 'next-auth/jwt'
import { connectToDatabase } from "../../../../db/connection";

connectToDatabase()

// get All repair
export const GET = async (req: NextRequest, res: NextResponse) => {
    // getting the page number and limit from the url
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    try {
        const totalRepairs = await Repair.estimatedDocumentCount()

        // calling a method that return start index and end index, 
        // and results object that may contain next and previous page
        const { startIndex, results } = getPaginatedResult(page, limit, totalRepairs)

        const repairs = await Repair.find().skip(startIndex).limit(limit)
        results.total = totalRepairs;
        results.result = repairs;
        return NextResponse.json(results, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })

    }
}

// post a repair
export const POST = async (req: NextRequest, res: NextResponse) => {

    try {
        const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
        const fournisseur = await req.json()
        // check if email or phone exist already 
        const phoneExistAlready = await Repair.findOne({ phone: fournisseur?.phone })
        const emailExistAlready = await Repair.findOne({ email: fournisseur?.email })

        if (phoneExistAlready) {
            return NextResponse.json({ "message": "Phone already exist" }, { status: 400 })
        }
        if (emailExistAlready) {
            return NextResponse.json({ "message": "email already exist" }, { status: 400 })
        }

        const createdRepair = new Repair(fournisseur)
        // @ts-ignore
        createdRepair.createdBy = token.user._id;
        await createdRepair.save()
        return NextResponse.json({ "message": "Repair created successfully" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ "message": "Something went wrong" }, { status: 500 })
    }
}