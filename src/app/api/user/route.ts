import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../db/connection";
import { User } from "../../../../models/User";
import { getServerSession } from "next-auth/next";
import { OPTIONS } from "../auth/[...nextauth]/route";
import userSchema from "@/schema/userSchema";
import { getPaginatedResult } from "@/utils/util";

connectToDatabase()

// get all users with pagination
export const GET = async (req: NextRequest) => {

    const session = await getServerSession(OPTIONS);
    if (!session) {
        return NextResponse.json(
            { message: "Not authenticated" },
            { status: 403 },
        );
    }

    // getting the page number and limit from the url
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;
    const totalUsers = await User.estimatedDocumentCount()

    // calling a method that return start index and end index, 
    // and results object that may contain next and previous page
    const { startIndex, endIndex, results } = getPaginatedResult(page, limit, totalUsers)

    try {
        const users = await User.find().skip(startIndex).limit(endIndex).populate("role").exec();
        results.total = totalUsers;
        results.result = users;
        return NextResponse.json(results, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })

    }
}

// create a user
export const POST = async (req: NextRequest, res: NextResponse) => {

    const user = await req.json()
    const response = userSchema.safeParse(user);

    // validate the user detail
    if (!response.success) {
        const { errors } = response.error;
        return NextResponse.json(errors, { status: 400 })
    }

    // check if email or password exist already 
    const phoneExistAlready = await User.findOne({ phone: user?.phone })
    const emailExistAlready = await User.findOne({ email: user?.email })

    if (phoneExistAlready) {
        return NextResponse.json({ "message": "Phone already exist" }, { status: 400 })
    }
    if (emailExistAlready) {
        return NextResponse.json({ "message": "email already exist" }, { status: 400 })
    }


    try {
        const createdUser = new User(user)
        await createdUser.save()
        return NextResponse.json({ "message": "User created successfully" }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ "message": "Something went wrong" }, { status: 500 })
    }
}