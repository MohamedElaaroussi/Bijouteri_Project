import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../db/connection";
import { getServerSession } from "next-auth/next";
import { OPTIONS } from "../auth/[...nextauth]/route";
import { Permission } from "../../../../models/Permission";

connectToDatabase();

// get all permissions
export const GET = async (req: NextRequest, res: NextResponse) => {
  const session = await getServerSession(OPTIONS);

  if (!session) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 403 });
  }
  try {
    const permission = await Permission.find().sort({ createdAt: -1 });

    return NextResponse.json({ permission }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: 'An error occurred while fetching roles' }, { status: 500 });
  }
}

// create a permission
export const POST = async (req: NextRequest, res: NextResponse) => {
  const session = await getServerSession(OPTIONS);

  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 403 });
  }
  try {
    const { name } = await req.json();

    if (!name) {
      return NextResponse.json({ error: "Missing or invalid input data" });
    }

    // check if permission exist
    const permissionAlreadyExist = await Permission.findOne({ name })
    if (permissionAlreadyExist) {
      return NextResponse.json(
        { message: "Permission already exist" },
        { status: 401 },
      );
    }

    const permission = new Permission({ name });
    await permission.save();

    return NextResponse.json(
      { message: "Permission created successfully", permission },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "An error occurred while creating the permission" },
      { status: 500 },
    );
  }
}


