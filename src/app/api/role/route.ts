import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../db/connection";
import { Role } from "../../../../models/Role";
import { getServerSession } from "next-auth/next";
import { OPTIONS } from "../auth/[...nextauth]/route";

connectToDatabase();

// get all roles
export const GET = async (req: NextRequest, res: NextResponse) => {
  const session = await getServerSession(OPTIONS);

  if (!session) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 403 });
  }
  try {
    const role = await Role.find().sort({ createdAt: -1 });

    return NextResponse.json({ role }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: 'An error occurred while fetching roles' }, { status: 500 });
  }
}

// create a role
export const POST = async (req: NextRequest, res: NextResponse) => {
  const session = await getServerSession(OPTIONS);

  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 403 });
  }
  try {
    const { name } = await req.json();

    if (!name) {
      return NextResponse.json({ error: "Role name is required" });
    }

    // check if role exist
    const roleAlreadyExist = await Role.findOne({ name })
    if (roleAlreadyExist) {
      return NextResponse.json(
        { message: "Role already exist" },
        { status: 400 },
      );
    }

    const role = new Role({ name, permission: [] });
    await role.save();

    return NextResponse.json(
      { message: "Role created successfully", role },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while creating the role" },
      { status: 500 },
    );
  }
}


