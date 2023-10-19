import mongoose, { Document, Schema } from "mongoose";
import { UserModel } from "./User";
import { CategoryModel } from "./Category";
import { SupplierModel } from "./Supplier";

// Define Article Schema with SelledStatus
export interface ArticleModel extends Document {
  name: string;
  img: string;
  buyPrice: number;
  sellPrice: number;
  color: string;
  weight: number;
  nbrOfArticles: number;
  category: mongoose.Types.ObjectId | CategoryModel;
  supplier: mongoose.Types.ObjectId | SupplierModel;
  createdBy: mongoose.Types.ObjectId | UserModel;
  description: string;
  typeArticle: string;
  barCode: string;
  idBase: string
}

const articleSchema = new Schema<ArticleModel>({
  name: { type: String },
  img: { type: String },
  buyPrice: { type: Number, min: 1 },
  sellPrice: { type: Number, min: 1 },
  weight: { type: Number, min: 1 },
  color: { type: String },
  description: { type: String },
  nbrOfArticles: { type: Number, min: 1 },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  supplier: { type: Schema.Types.ObjectId, ref: "Supplier" },
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  typeArticle: { type: String },
  idBase: { type: String },
  barCode: { type: String },
}, { timestamps: true });

// type `mongoose.models.Customer` same as `CustomerModel`
export const Article =
  mongoose.models.Article ||
  mongoose.model<ArticleModel>("Article", articleSchema);
