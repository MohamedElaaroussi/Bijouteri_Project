import { NextRequest, NextResponse } from "next/server";
import { Catalogue } from "../../../../../models/Catalogue";
import { connectToDatabase } from "../../../../../db/connection";

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
        const catalogue = await Catalogue.findByIdAndUpdate({ _id: catalogId }, catalogReqData)
        if (!catalogue) return NextResponse.json({ message: "Catalog not found" }, { status: 200 })
        return NextResponse.json({ message: "Catalog updated successfully" }, { status: 200 })
    } catch (error) {
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