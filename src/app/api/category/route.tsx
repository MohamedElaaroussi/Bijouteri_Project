import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../db/connection";
import { getServerSession } from "next-auth/next";
import { OPTIONS } from "../auth/[...nextauth]/route";
import { Category } from "../../../../models/Category";

connectToDatabase();

// get all categories
export const GET = async (req: NextRequest, res: NextResponse) => {
  const session = await getServerSession(OPTIONS);

  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 403 });
  }
  try {
    const category = await Category.find().sort({ createdAt: -1 });
    return NextResponse.json({ category }, { status: 200 });
  } catch (error) {
    NextResponse.json(
      { error: "An error occurred while fetching categories" },
      { status: 500 },
    );
  }
};

// create a category
export const POST = async (req: NextRequest, res: NextResponse) => {
  const session = await getServerSession(OPTIONS);

  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 403 });
  }
  try {
    const { name, description } = await req.json();

    // check if the category exist
    const categoryAlreadyExist = await Category.findOne({ name });
    if (categoryAlreadyExist) {
      return NextResponse.json(
        { message: "Category already exist" },
        { status: 401 },
      );
    }

    const category = new Category({ name, description });
    await category.save();

    return NextResponse.json(
      { message: "Category created successfully", category },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while creating the category" },
      { status: 500 },
    );
  }
};
