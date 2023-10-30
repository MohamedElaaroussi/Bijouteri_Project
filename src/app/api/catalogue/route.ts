import { NextRequest, NextResponse } from "next/server";
import { Catalogue } from "../../../../models/Catalogue";
import { connectToDatabase } from "../../../../db/connection";

connectToDatabase()
export const POST = async (req: NextRequest, res: NextResponse) => {

    try {
        const { catalogue, description, img } = await req.json();
        if (!catalogue) return NextResponse.json(
            { error: "Catalogue name is required" },
            { status: 400 },
        );
        const catalogueAlreadyExist = await Catalogue.findOne({ catalogue });
        if (catalogueAlreadyExist) return NextResponse.json(
            { error: "Catalogue AlreadyExist" },
            { status: 400 },
        );
        const createCatalogue = new Catalogue({ catalogue, description, img })
        await createCatalogue.save()
        return NextResponse.json(
            { error: "Catalogue was created successfully" },
            { status: 201 },
        );
    } catch (error) {
        NextResponse.json(
            { error: "An error occurred while fetching catalogues" },
            { status: 500 },
        );
    }

}