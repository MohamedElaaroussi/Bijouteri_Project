// Import Mongoose
import mongoose, { Document, Schema } from "mongoose";

// Define CategoryOfArticles Schema
export interface CategoryModel extends Document {
  name: string;
  description: string;
}

const categorySchema = new Schema<CategoryModel>({
  name: { type: String, required: true },
  description: { type: String, required: false },
});

export const Category =
  mongoose.models.Category ||
  mongoose.model<CategoryModel>(
    "Category",
    categorySchema
  );


