import { NextRequest, NextResponse } from "next/server";
import { Supplier } from "../../../../models/Supplier";
import { getPaginatedResult } from "@/utils/util";
import { connectToDatabase } from "../../../../db/connection";
import { getToken } from "next-auth/jwt"



// get supplier + pagination
connectToDatabase()
export const GET = async (req: NextRequest, res: NextResponse) => {

  // getting the page number and limit from the url
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const search = searchParams.get("search");
  let startDate = searchParams.get("startDate");
  let endDate: string | Date | null = searchParams.get("endDate");
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;

  if (endDate) {
    endDate = new Date(endDate);
    endDate.setHours(23, 59, 59, 999);
  }

  try {
    const searchByQuery = { ...(search ? { $or: [{ 'username': { $regex: ".*" + search + ".*", $options: 'i' } }, { 'phone': { $regex: ".*" + search + ".*", $options: 'i' } }] } : {}) }
    const searchBtwDate = { ...(startDate && endDate ? { $and: [{ "createdAt": { $gte: startDate } }, { "createdAt": { $lte: endDate } }] } : {}) }
    const totalSuppliers = await Supplier
      .countDocuments({ ...searchByQuery, ...searchBtwDate })

    // calling a method that return start index and end index, 
    // and results object that may contain next and previous page
    const { startIndex, results } = getPaginatedResult(page, limit, totalSuppliers)
    const suppliers = await Supplier.find({ ...searchByQuery, ...searchBtwDate }).skip(startIndex).limit(limit).exec();

    results.total = totalSuppliers;
    results.result = suppliers;

    return NextResponse.json(results, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })

  }
};

export const POST = async (req: NextRequest, res: NextResponse) => {

  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
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
    const createdSupplier = new Supplier(fournisseur)
    // @ts-ignore
    createdSupplier.createdBy = token.user._id;
    await createdSupplier.save()
    return NextResponse.json({ "message": "Supplier created successfully" }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ "message": "Something went wrong" }, { status: 500 })
  }
};
