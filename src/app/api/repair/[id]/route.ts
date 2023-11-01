import { NextRequest, NextResponse } from "next/server"
import { Repair } from "../../../../../models/Repair";
import { Reparation } from "../../../../../models/Reparation";
import { getPaginatedResult } from "@/utils/util";
import { connectToDatabase } from "../../../../../db/connection";


connectToDatabase()
// find a repair by id
export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {

    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    try {
        const repairId = params.id;

        const repair = await Repair.findById(repairId);
        if (!repair) {
            return NextResponse.json({ message: "Repair not found" }, { status: 404 });
        }
        // count reparation made by a repair
        const repairReparationCount = await Reparation.find({ "repair": repairId }).populate("articles")
        const { startIndex, results } = getPaginatedResult(page, limit, repairReparationCount.length)
        let totalPayment = 0;
        let totalPaid = 0;
        let repairReparation;
        if (repairReparationCount.length > 0) {
            repairReparation = await Reparation.find({ "repair": repairId }).populate("articles").skip(startIndex).limit(limit)

            // calculate the total payment that client made
            totalPayment = repairReparationCount?.reduce((total, item) => {
                return total + item.totalPrice
            }, 0);

            // calculate the total amount that the client paid
            totalPaid = repairReparationCount?.reduce((total, item) => {
                return total + item.paid
            }, 0);
        }
        const nonPaid = (totalPayment - totalPaid);
        results.result = repairReparation ?? []
        results.total = repairReparationCount.length
        return NextResponse.json({ repair, ...results, totalPayment, nonPaid }, { status: 200 });
    } catch (error) {
        console.log(error);

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