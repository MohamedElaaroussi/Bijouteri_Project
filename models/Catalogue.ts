import { InferSchemaType, Schema, models, model } from "mongoose";

const catalogueSchema = new Schema({
    catalogue: { type: String, required: true, unique: true, lowercase: true, },
    img: { type: String },
    description: { type: String }
}, { timestamps: true });

type Catalogue = InferSchemaType<typeof catalogueSchema>;

export const Catalogue =
    models.Catalogue || model<Catalogue>("Catalogue", catalogueSchema);