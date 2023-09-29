import { NextRequest, NextResponse } from "next/server";
import { User } from "../../../../models/User";
import { connectToDatabase } from "../../../../db/connection";
import { hash, hashSync } from "bcryptjs";

connectToDatabase();

// export const GET = async (req: NextRequest) => {};

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const { username, email, phone, password, roleId } = body;

    const hashedPassword = await hashSync(password, 8);
    // Create a new user
    const user = new User({
      username,
      email,
      phone,
      password: hashedPassword,
      role: roleId,
    });
    await user.save();

    return new NextResponse(
      JSON.stringify({ message: "user created successfully.", user }),
      { status: 201 }
    );
  } catch (error) {
    console.log(error);

    return new NextResponse(
      JSON.stringify({ error: "An error occurred while creating the user." }),
      { status: 500 }
    );
  }
};
