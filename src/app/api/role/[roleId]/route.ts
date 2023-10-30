import { connectToDatabase } from '../../../../../db/connection';
import { Role } from '../../../../../models/Role';
import { getServerSession } from 'next-auth/next';
import { OPTIONS } from '../../auth/[...nextauth]/route';
import { NextRequest, NextResponse } from 'next/server';

connectToDatabase();

// GET a role By ID
export const GET = async (req: NextRequest, { params }: { params: Record<string, string> }) => {
  const roleId = params.roleId;
  const session = await getServerSession(OPTIONS);

  if (!session) {
    return NextResponse.json(
      { message: "Not authenticated" },
      { status: 403 },
    );
  }
  try {
    const role = await Role.findById(roleId).populate("permission").exec()
    if (!role) {
      return NextResponse.json({ message: "Role Not Found" }, { status: 404 })
    }
    return NextResponse.json({ role })
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while searching the role." },
      { status: 500 },
    );
  }
}

// Update a role by ID
export const PUT = async (req: NextRequest, { params }: { params: Record<string, string> }) => {

  const roleId = params.roleId;
  const session = await getServerSession(OPTIONS);

  if (!session) {
    return NextResponse.json(
      { message: "Not authenticated" },
      { status: 403 },
    );
  }

  try {
    const existingrole = await Role.findById(roleId);
    if (!existingrole) {
      return NextResponse.json({ message: "Role Not Found" }, { status: 404 })
    }

    // extract the name from the body
    const { name } = await req.json();

    if (name) {
      existingrole.name = name
    }
    await existingrole.save()

    return NextResponse.json({
      message: "role updated successfully",
    }, { status: 201 })
  } catch (error) {
    return NextResponse.json({
      message: "An error occurred while updating the role",
    }, { status: 500 })
  }
}

// Delete a role by ID
export const DELETE = async (req: NextRequest, { params }: { params: Record<string, string> }) => {

  const roleId = params.roleId;
  const session = await getServerSession(OPTIONS);

  if (!session) {
    return NextResponse.json(
      { message: "Not authenticated" },
      { status: 403 },
    );
  }
  try {
    const deletedRole = await Role.findByIdAndDelete(roleId);
    if (!deletedRole) {
      return NextResponse.json({
        message: "Role not found",
      }, { status: 404 })
    }

    return NextResponse.json({
      message: "Role deleted successfully",
    }, { status: 200 })
  } catch (error) {
    return NextResponse.json({
      message: "An error occurred while updating the role",
    }, { status: 500 })
  }
}

