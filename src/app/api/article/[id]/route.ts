import { NextRequest, NextResponse } from "next/server"
import { Article } from "../../../../../models/Article";
import { connectToDatabase } from "../../../../../db/connection";
import path from "path";
import fs from "fs";

connectToDatabase()
// get article by id
export const GET = async (req: NextRequest, { params }: { params: { id: string } }
) => {
    const articleId = params.id
    try {
        const article = await Article.findById(articleId);
        if (!article) {
            return NextResponse.json({ message: "Article not found" }, { status: 404 });
        }
        return NextResponse.json(article, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 },
        );
    }
}

// update article by id
export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
        const articleId = params.id
        const updatedField = await req.json()

        if (updatedField.img) {
            // replace the data:image 
            const base64Data = updatedField.img.replace(/^data:image\/\w+;base64,/, '');

            // Create a buffer from the base64 data
            const buffer = Buffer.from(base64Data, 'base64');

            const imgName = updatedField.name + ".png"
            // replace the colon from the img name
            updatedField.img = imgName.replace(/:/g, '-')

            // Save the base64 image to the public directory
            const filePath = path.join(process.cwd(), 'public/uploads', updatedField.img);
            fs.writeFileSync(filePath, buffer);
        }

        const article = await Article.findByIdAndUpdate(articleId, updatedField, { runValidators: true })

        if (!article) return NextResponse.json(
            { message: "Article not found" },
            { status: 404 },
        );

        return NextResponse.json(
            { message: "Article was updated successfully" },
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 },
        );
    }
}

// delete article by id
export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {

    const articleId = params.id
    try {
        const article = await Article.findByIdAndDelete(articleId);

        // check if the article was deleted
        if (!article) {
            return NextResponse.json({ message: "Article not found" }, { status: 404 });
        }
        return NextResponse.json(
            { message: "Article was deleted successfully" },
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 },
        );
    }
}