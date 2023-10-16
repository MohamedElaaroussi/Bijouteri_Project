import { connectToDatabase } from "../../../../../db/connection";
import { getServerSession } from "next-auth/next";
import { OPTIONS } from "../../auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";
import { Category } from "../../../../../models/Category";

connectToDatabase();

// GET a category By ID
export const GET = async (
  req: NextRequest,
  { params }: { params: Record<string, string> },
) => {
  const categoryId = params.id;
  const session = await getServerSession(OPTIONS);

  if (!session) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 403 });
  }
  try {
    const category = await Category.findById(categoryId);
    if (!category) {
      return NextResponse.json(
        { message: "category Not Found" },
        { status: 404 },
      );
    }
    return NextResponse.json({ category });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while searching the Category." },
      { status: 500 },
    );
  }
};

// Update a category by ID
export const PUT = async (
  req: NextRequest,
  { params }: { params: Record<string, string> },
) => {
  const categoryId = params.id;
  const session = await getServerSession(OPTIONS);

  if (!session) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 403 });
  }

  try {
    const existingCategory = await Category.findById(categoryId);
    if (!existingCategory) {
      return NextResponse.json(
        { message: "Category Not Found" },
        { status: 404 },
      );
    }

    // extract the name from the body
    const { name, description } = await req.json();

    if (name) {
      existingCategory.name = name;
    }
    if (description != undefined) {
      existingCategory.description = description;
    }
    await existingCategory.save();

    return NextResponse.json(
      {
        message: "Category updated successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "An error occurred while updating the category",
      },
      { status: 500 },
    );
  }
};

// Delete a category by ID
export const DELETE = async (
  req: NextRequest,
  { params }: { params: Record<string, string> },
) => {
  const categoryId = params.id;
  const session = await getServerSession(OPTIONS);

  if (!session) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 403 });
  }
  try {
    const deletedCategory = await Category.findByIdAndDelete(categoryId);
    if (!deletedCategory) {
      return NextResponse.json(
        {
          message: "Category not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        message: "Category deleted successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "An error occurred while updating the category",
      },
      { status: 500 },
    );
  }
};
