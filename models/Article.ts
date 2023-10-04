import mongoose, { Document, Schema } from "mongoose";
import { CategoryOfArticlesModel } from "./CategoryOfArticles";
import { UserModel } from "./User";
// Define Article Schema with SelledStatus
export interface ArticleModel extends Document {
  name: string;
  price: number;
  weight: number;
  material: string;
  date: Date;
  selled: boolean;
  inPack: boolean;
  category: mongoose.Types.ObjectId | CategoryOfArticlesModel;
  user: mongoose.Types.ObjectId | UserModel;
}

const articleSchema = new Schema<ArticleModel>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  weight: { type: Number, required: true },
  material: { type: String, required: true },
  date: { type: Date, default: Date.now },
  selled: { type: Boolean, default: false },
  inPack: { type: Boolean, default: false },
  category: {
    type: Schema.Types.ObjectId,
    ref: "CategoryOfArticles",
    required: true,
  },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

// type `mongoose.models.Customer` same as `CustomerModel`
export const Article =
  mongoose.models.Article ||
  mongoose.model<ArticleModel>("Article", articleSchema);
