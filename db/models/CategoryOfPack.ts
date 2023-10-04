import mongoose, { Document, Schema } from "mongoose";
// Define CategoryOfPack Schema
export interface CategoryOfPackModel extends Document {
  name: string;
  description: string;
  weight: number;
  material: string;
}

const categoryOfPackSchema = new Schema<CategoryOfPackModel>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  weight: { type: Number, required: true },
  material: { type: String, required: true },
});

export const CategoryOfPack =
  mongoose.models.CategoryOfPack ||
  mongoose.model<CategoryOfPackModel>("CategoryOfPack", categoryOfPackSchema);
