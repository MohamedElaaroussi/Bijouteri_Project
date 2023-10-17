import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { Supplier } from "../../../../models/Supplier";
import { getPaginatedResult } from "@/utils/util";
import { OPTIONS } from "../auth/[...nextauth]/route";
import { connectToDatabase } from "../../../../db/connection";


// get supplier + pagination
connectToDatabase()
export const GET = async (req: NextRequest, res: NextResponse) => {
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
  const totalSuppliers = await Supplier.estimatedDocumentCount()

  // calling a method that return start index and end index, 
  // and results object that may contain next and previous page
  const { startIndex, endIndex, results } = getPaginatedResult(page, limit, totalSuppliers)

  try {
    const suppliers = await Supplier.find().skip(startIndex).limit(endIndex).populate({ path: "createdBy", select: "username" }).exec();
    results.total = totalSuppliers;
    results.result = suppliers;
    return NextResponse.json(results, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })

  }
};

export const POST = async (req: NextRequest, res: NextResponse) => {

  const session = await getServerSession(OPTIONS);
  if (!session) {
    return NextResponse.json(
      { message: "Not authenticated" },
      { status: 403 },
    );
  }

  const fournisseur = await req.json()
  // check if email or phone exist already 
  const phoneExistAlready = await Supplier.findOne({ phone: fournisseur?.phone })
  const emailExistAlready = await Supplier.findOne({ email: fournisseur?.email })

  if (phoneExistAlready) {
    return NextResponse.json({ "message": "Phone already exist" }, { status: 400 })
  }
  if (emailExistAlready) {
    return NextResponse.json({ "message": "email already exist" }, { status: 400 })
  }


  try {
    const createdSupplier = new Supplier(fournisseur)
    // @ts-ignore
    createdSupplier.createdBy = session?.user?._id;
    await createdSupplier.save()
    return NextResponse.json({ "message": "Supplier created successfully" }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ "message": "Something went wrong" }, { status: 500 })
  }
};
