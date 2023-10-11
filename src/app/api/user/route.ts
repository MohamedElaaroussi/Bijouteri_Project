import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../db/connection";
import { User } from "../../../../models/User";
import { getServerSession } from "next-auth/next";
import { OPTIONS } from "../auth/[...nextauth]/route";
import userSchema from "@/schema/userSchema";
import { hashSync } from "bcryptjs";

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

    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const skip = searchParams.get("skip") || 0;
    const limit = searchParams.get("limit") || 10;
    const totalUsers = await User.count()


    try {
        const users = await User.find().skip(Number(skip)).limit(Number(limit));
        return NextResponse.json({ users, total: totalUsers }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })

    }
}

// create a user
export const POST = async (req: NextRequest, res: NextResponse) => {

    const user = await req.json()
    const response = userSchema.safeParse(user);

    if (!response.success) {
        const { errors } = response.error;
        return NextResponse.json(errors, { status: 400 })
    }

    const phoneExistAlready = await User.findOne({ phone: user?.phone })
    const emailExistAlready = await User.findOne({ email: user?.email })

    if (phoneExistAlready) {
        return NextResponse.json({ "message": "Phone already exist" }, { status: 400 })
    }
    if (emailExistAlready) {
        return NextResponse.json({ "message": "email already exist" }, { status: 400 })
    }


    try {
        const hashedPassword = hashSync(user.password)
        user.password = hashedPassword;
        const createdUser = new User(user)
        await createdUser.save()
        return NextResponse.json({ "message": "User created successfully" }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ "message": "Something went wrong" }, { status: 500 })
    }
}