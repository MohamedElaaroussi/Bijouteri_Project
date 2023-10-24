import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { OPTIONS } from "../../auth/[...nextauth]/route";
import { Supplier } from "../../../../../models/Supplier";
import { connectToDatabase } from "../../../../../db/connection";


connectToDatabase();
// get supplier by id
export const GET = async (req: NextRequest, { params }: { params: { id: number } }) => {

    const session = await getServerSession(OPTIONS);
    if (!session) {
        return NextResponse.json({ message: "Not authenticated" }, { status: 403 });
    }
    const supplierId = params.id;
    try {
        const supplier = await Supplier.findById(supplierId).exec();
        if (!supplier) {
            return NextResponse.json({ message: "Supplier not found" }, { status: 404 });
        }
        return NextResponse.json(supplier, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 },
        );
    }
}

// update supplier 
export const PUT = async (req: NextRequest, { params }: { params: { id: number } }) => {

    const session = await getServerSession(OPTIONS);
    if (!session) {
        return NextResponse.json({ message: "Not authenticated" }, { status: 403 });
    }

    const supplierId = params.id;
    // updated data
    const { email, phone, address, status, username } = await req.json();

    try {
        // search for the supplier
        const supplierToBeUpdated = await Supplier.findById(supplierId)
        if (!supplierToBeUpdated) {
            return NextResponse.json({ message: "Supplier not found" }, { status: 404 });
        }

        // check if email exist
        if (email) {
            const emailExistAlready = await Supplier.findOne({ email });

            if (emailExistAlready && supplierToBeUpdated.email != email) {
                return NextResponse.json(
                    { message: "email already exist" },
                    { status: 400 },
                );
            } else {
                supplierToBeUpdated.email = email;
            }
        }

        // check if phone exist
        if (phone) {
            const phoneExistAlready = await Supplier.findOne({ phone });
            if (phoneExistAlready && supplierToBeUpdated.phone != phone) {
                return NextResponse.json(
                    { message: "Phone already exist" },
                    { status: 400 },
                );
            } else {
                supplierToBeUpdated.phone = phone;
            }
        }

        // check if name exist
        if (username) {
            supplierToBeUpdated.username = username;
        }
        if (address) {
            supplierToBeUpdated.address = address;
        }
        if (status) {
            supplierToBeUpdated.status = status;
        }
        await supplierToBeUpdated.save();
        return NextResponse.json(
            { message: "Supplier was updated successfully" },
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(
            { message: "something went wrong" },
            { status: 500 },
        );
    }
}

// delete supplier by id
export const DELETE = async (req: NextRequest, { params }: { params: { id: number } }) => {

    const session = await getServerSession(OPTIONS);
    if (!session) {
        return NextResponse.json({ message: "Not authenticated" }, { status: 403 });
    }

    const supplierId = params.id;
    try {
        const supplier = await Supplier.findByIdAndDelete(supplierId);
        // check if the supplier was deleted
        if (!supplier) {
            return NextResponse.json({ message: "Supplier not found" }, { status: 404 });
        }
        return NextResponse.json(
            { message: "Supplier was deleted successfully" },
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 },
        );
    }
}