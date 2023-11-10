import { NextRequest, NextResponse } from "next/server";
import { Catalogue } from "../../../../models/Catalogue";
import { connectToDatabase } from "../../../../db/connection";
import { getPaginatedResult } from "@/utils/util";

connectToDatabase()
// get all catalog with pagination
export const GET = async (req: NextRequest) => {

    try {
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

        const searchByQuery = { ...(search ? { $or: [{ 'catalogue': { $regex: ".*" + search + ".*", $options: 'i' } }, { 'description': { $regex: ".*" + search + ".*", $options: 'i' } }] } : {}) }
        const searchBtwDate = { ...(startDate && endDate ? { $and: [{ "createdAt": { $gte: startDate } }, { "createdAt": { $lte: endDate } }] } : {}) }
        const totalCatalog = await Catalogue.countDocuments({ ...searchByQuery, ...searchBtwDate })

        // calling a method that return start index and end index, 
        // and results object that may contain next and previous page
        const { startIndex, results } = getPaginatedResult(page, limit, totalCatalog)
        const catalogue = await Catalogue.find({ ...searchByQuery, ...searchBtwDate }).skip(startIndex).limit(limit)

        results.total = totalCatalog;
        results.result = catalogue;
        return NextResponse.json(results, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
}

// create a catalog
export const POST = async (req: NextRequest, res: NextResponse) => {

    try {
        const { catalogue, description, img, status } = await req.json();
        if (!catalogue) return NextResponse.json(
            { error: "Catalog name is required" },
            { status: 400 },
        );
        const catalogueAlreadyExist = await Catalogue.findOne({ catalogue });
        if (catalogueAlreadyExist) return NextResponse.json(
            { error: "Catalog AlreadyExist" },
            { status: 400 },
        );
        const createCatalogue = new Catalogue({ catalogue, description, img, status })
        await createCatalogue.save()
        return NextResponse.json(
            { message: "Catalog was created successfully" },
            { status: 201 },
        );
    } catch (error) {
        NextResponse.json(
            { error: "An error occurred while fetching catalogues" },
            { status: 500 },
        );
    }

}