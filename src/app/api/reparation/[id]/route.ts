import { NextRequest, NextResponse } from "next/server"
import { Reparation } from "../../../../../models/Reparation";

// find a reparation by id
export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {

    try {
        const reparationId = params.id;

        const reparation = await Reparation.findById(reparationId).populate('repair', "username phone");
        if (!reparation) {
            return NextResponse.json({ message: "Reparation not found" }, { status: 404 });
        }
        return NextResponse.json(reparation, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
}

// update a reparation by id
export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {

    try {
        const reparationId = params.id;
        // updated data
        const { status, paidByUs, articles, categories, repair } = await req.json();
        // search for the reparation
        const reparationToBeUpdated = await Reparation.findById(reparationId)
        if (!reparationToBeUpdated) {
            return NextResponse.json({ message: "Reparation not found" }, { status: 404 });
        }

        if (status) reparationToBeUpdated.status = status
        if (paidByUs) reparationToBeUpdated.paidByUs = paidByUs
        if (articles) reparationToBeUpdated.articles = articles
        if (categories) reparationToBeUpdated.categories = categories
        if (repair) reparationToBeUpdated.repair = repair

        await reparationToBeUpdated.save()
        return NextResponse.json(
            { message: "Reparation was updated successfully" },
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(
            { message: "something went wrong" },
            { status: 500 },
        );
    }
}

// delete a reparation 
export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {

    try {
        const reparationId = params.id;
        const reparation = await Reparation.findByIdAndDelete(reparationId);
        // check if the reparation was deleted
        if (!reparation) {
            return NextResponse.json({ message: "Reparation not found" }, { status: 404 });
        }
        return NextResponse.json(
            { message: "Reparation was deleted successfully" },
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 },
        );
    }
}