import { NextRequest, NextResponse } from "next/server";
import { Catalogue } from "../../../../../models/Catalogue";
import { connectToDatabase } from "../../../../../db/connection";
import path from "path";
import fs from "fs";

connectToDatabase()
export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {

    try {
        const catalogId = params.id
        const catalog = await Catalogue.findById(catalogId)
        if (!catalog) return NextResponse.json({ message: "Catalog not found" }, { status: 200 })

        return NextResponse.json(catalog, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })

    }
}

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {

    try {
        const catalogId = params.id
        const catalogReqData = await req.json()

        if (catalogReqData.catalogue) {
            const catalogueAlreadyExist = await Catalogue.findOne({ catalogue: catalogReqData.catalogue });
            if (catalogueAlreadyExist) return NextResponse.json(
                { error: "Catalog AlreadyExist" },
                { status: 400 },
            );
        }

        if (catalogReqData.img) {
            // replace the data:image 
            const base64Data = catalogReqData.img.replace(/^data:image\/\w+;base64,/, '');

            // Create a buffer from the base64 data
            const buffer = Buffer.from(base64Data, 'base64');
            const imgName = catalogReqData.catalogue + ".png"

            // replace the colon from the img name
            catalogReqData.img = imgName.replace(/:/g, '-')
            // Save the base64 image to the public directory
            const filePath = path.join(process.cwd(), 'public/uploads', catalogReqData.img);
            fs.writeFileSync(filePath, buffer);
        }
        const catalogue = await Catalogue.findByIdAndUpdate({ _id: catalogId }, catalogReqData)
        if (!catalogue) return NextResponse.json({ message: "Catalog not found" }, { status: 200 })
        return NextResponse.json({ message: "Catalog updated successfully" }, { status: 200 })
    } catch (error) {
        console.log(error);

        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })

    }
}

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {

    try {
        const catalogueId = params.id
        const catalogue = await Catalogue.findByIdAndDelete(catalogueId)
        if (!catalogue) return NextResponse.json({ message: "Catalog not found" }, { status: 200 })

        return NextResponse.json({ message: "Catalog deleted successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })

    }
}