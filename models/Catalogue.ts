import { InferSchemaType, Schema, models, model } from "mongoose";

const catalogueSchema = new Schema({
    catalogue: { type: String, required: true, unique: true, lowercase: true, },
    img: { type: String },
    description: { type: String },
    status: { type: String },
    nbrOfArticles: { type: Number, default: 0 }
}, { timestamps: true });

export type Catalogue = InferSchemaType<typeof catalogueSchema>;

export const Catalogue =
    models.Catalogue || model<Catalogue>("Catalogue", catalogueSchema);