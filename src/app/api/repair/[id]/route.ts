import { NextRequest, NextResponse } from "next/server"
import { Repair } from "../../../../../models/Repair";

// find a repair by id
export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {

    try {
        const repairId = params.id;

        const repair = await Repair.findById(repairId);
        if (!repair) {
            return NextResponse.json({ message: "Repair not found" }, { status: 404 });
        }
        return NextResponse.json(repair, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
}

// update a repair by id
export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {

    try {
        const repairId = params.id;
        // updated data
        const { email, phone, address, status, username } = await req.json();
        // search for the repair
        const repairToBeUpdated = await Repair.findById(repairId)
        if (!repairToBeUpdated) {
            return NextResponse.json({ message: "repair not found" }, { status: 404 });
        }

        // check if email exist
        if (email) {
            const emailExistAlready = await Repair.findOne({ email });

            if (emailExistAlready && repairToBeUpdated.email != email) {
                return NextResponse.json(
                    { message: "email already exist" },
                    { status: 400 },
                );
            } else {
                repairToBeUpdated.email = email;
            }
        }

        // check if phone exist
        if (phone) {
            const phoneExistAlready = await Repair.findOne({ phone });
            if (phoneExistAlready && repairToBeUpdated.phone != phone) {
                return NextResponse.json(
                    { message: "Phone already exist" },
                    { status: 400 },
                );
            } else {
                repairToBeUpdated.phone = phone;
            }
        }

        // check if name exist
        if (username) {
            repairToBeUpdated.username = username;
        }
        if (address) {
            repairToBeUpdated.address = address;
        }
        if (status) {
            repairToBeUpdated.status = status;
        }
        await repairToBeUpdated.save();
        return NextResponse.json(
            { message: "repair was updated successfully" },
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(
            { message: "something went wrong" },
            { status: 500 },
        );
    }
}

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {

    try {
        const repairId = params.id;
        const repair = await Repair.findByIdAndDelete(repairId);
        // check if the repair was deleted
        if (!repair) {
            return NextResponse.json({ message: "repair not found" }, { status: 404 });
        }
        return NextResponse.json(
            { message: "repair was deleted successfully" },
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 },
        );
    }
}