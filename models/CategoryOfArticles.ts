// Import Mongoose
import mongoose, { Document, Schema } from "mongoose";

// Define CategoryOfArticles Schema
export interface CategoryOfArticlesModel extends Document {
  name: string;
  description: string;
  weight: number;
  material: string;
}

const categoryOfArticlesSchema = new Schema<CategoryOfArticlesModel>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  weight: { type: Number, required: true },
  material: { type: String, required: true },
});

export const CategoryOfArticles =
  mongoose.models.CategoryOfArticles ||
  mongoose.model<CategoryOfArticlesModel>(
    "CategoryOfArticles",
    categoryOfArticlesSchema
  );
