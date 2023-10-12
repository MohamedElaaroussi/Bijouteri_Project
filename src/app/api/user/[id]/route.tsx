import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../../db/connection";
import { getServerSession } from "next-auth/next";
import { OPTIONS } from "../../auth/[...nextauth]/route";
import userSchema from "@/schema/userSchema";
import { hashSync } from "bcryptjs";
import { getPaginatedResult } from "@/utils/util";
import { User } from "../../../../../models/User";

connectToDatabase();

// get user by id
export const GET = async (
  req: NextRequest,
  { params }: { params: Record<string, string> },
) => {
  const session = await getServerSession(OPTIONS);
  if (!session) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 403 });
  }

  try {
    console.log(params);
    return NextResponse.json({ message: "user id" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: Record<string, string> },
) => {
  const session = await getServerSession(OPTIONS);
  if (!session) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 403 });
  }

  try {
    console.log(params);
    return NextResponse.json({ message: "update user id" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
};
