import mongoose, { Document, Schema } from "mongoose";
import { ArticleModel } from "./Article";
import { CategoryOfPackModel } from "./CategoryOfPack";

export interface PackOfArticlesModel extends Document {
  name: string;
  price: number;
  articles: mongoose.Types.ObjectId[] | ArticleModel[];
  category: mongoose.Types.ObjectId | CategoryOfPackModel;
}

const packOfArticlesSchema = new Schema<PackOfArticlesModel>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  articles: [{ type: Schema.Types.ObjectId, ref: "Article" }],
  category: {
    type: Schema.Types.ObjectId,
    ref: "CategoryOfPack",
    required: true,
  },
});

export const PackOfArticles =
  mongoose.models.PackOfArticles ||
  mongoose.model<PackOfArticlesModel>("PackOfArticles", packOfArticlesSchema);
