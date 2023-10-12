import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../../db/connection";
import { getServerSession } from "next-auth/next";
import { OPTIONS } from "../../auth/[...nextauth]/route";
import { compare } from "bcryptjs";
import { User } from "../../../../../models/User";
import { Role } from "../../../../../models/Role";

connectToDatabase();
// get user by id
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: number } },
) => {
  const session = await getServerSession(OPTIONS);
  if (!session) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 403 });
  }
  const userId = params.id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
};

// update a user
export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: number } },
) => {
  const session = await getServerSession(OPTIONS);
  if (!session) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 403 });
  }

  const userId = params.id;
  // updated data
  const { email, phone, password, username, role } = await req.json();

  try {
    const userToBeUpdated = await User.findById(userId).select("+password");
    if (!userToBeUpdated) {
      return NextResponse.json({ message: "user not found" }, { status: 404 });
    }

    // check if email exist
    if (email) {
      const emailExistAlready = await User.findOne({ email });

      if (emailExistAlready && userToBeUpdated.email != email) {
        return NextResponse.json(
          { message: "email already exist" },
          { status: 400 },
        );
      } else {
        userToBeUpdated.email = email;
      }
    }
    // check if phone exist
    if (phone) {
      const phoneExistAlready = await User.findOne({ phone });
      if (phoneExistAlready && userToBeUpdated.phone != phone) {
        return NextResponse.json(
          { message: "Phone already exist" },
          { status: 400 },
        );
      } else {
        userToBeUpdated.phone = phone;
      }
    }

    // check if role exist
    if (role) {
      const roleExistAlready = await Role.findById(role);
      if (!roleExistAlready) {
        return NextResponse.json(
          { message: "role doesn't exist" },
          { status: 404 },
        );
      } else {
        userToBeUpdated.role = role;
      }
    }
    if (username) {
      userToBeUpdated.username = username;
    }
    if (!(await compare(password, userToBeUpdated.password))) {
      userToBeUpdated.password = password;
    }
    await userToBeUpdated.save();
    return NextResponse.json(
      { message: "user was updated successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 },
    );
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: number } },
) => {
  const session = await getServerSession(OPTIONS);
  if (!session) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 403 });
  }

  const userId = params.id;
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "User was deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
};
