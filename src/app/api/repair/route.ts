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
    const search = searchParams.get("search");
    let startDate = searchParams.get("startDate");
    let endDate: string | Date | null = searchParams.get("endDate");
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    if (endDate) {
        endDate = new Date(endDate);
        endDate.setHours(23, 59, 59, 999);
    }

    try {
        const searchByQuery = {
            ...(search ? {
                $or: [
                    { username: { $regex: ".*" + search + ".*", $options: 'i' } },
                    { email: { $regex: ".*" + search + ".*", $options: 'i' } },
                    { phone: { $regex: ".*" + search + ".*" } },
                    { status: { $regex: ".*" + search + ".*", $options: 'i' } },
                    { address: { $regex: ".*" + search + ".*", $options: 'i' } },
                ]
            } : {})
        }
        const searchBtwDate = { ...(startDate && endDate ? { $and: [{ "createdAt": { $gte: startDate } }, { "createdAt": { $lte: endDate } }] } : {}) }

        const totalRepairs = await Repair.countDocuments({ ...searchByQuery, ...searchBtwDate })

        // calling a method that return start index and end index, 
        // and results object that may contain next and previous page
        const { startIndex, results } = getPaginatedResult(page, limit, totalRepairs)

        const repairs = await Repair.find({ ...searchByQuery, ...searchBtwDate }).skip(startIndex).limit(limit)
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
        const repair = await req.json()
        // check if email or phone exist already 
        const phoneExistAlready = await Repair.findOne({ phone: repair?.phone })
        const emailExistAlready = await Repair.findOne({ email: repair?.email })

        if (phoneExistAlready) {
            return NextResponse.json({ "message": "Phone already exist" }, { status: 400 })
        }
        if (emailExistAlready) {
            return NextResponse.json({ "message": "email already exist" }, { status: 400 })
        }

        const createdRepair = new Repair(repair)
        // @ts-ignore
        createdRepair.createdBy = token.user._id;
        await createdRepair.save()
        return NextResponse.json({ "message": "Repair created successfully" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ "message": "Something went wrong" }, { status: 500 })
    }
}