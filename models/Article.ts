import mongoose, { Document, Schema } from "mongoose";
import { UserModel } from "./User";
import { SupplierModel } from "./Supplier";
import { Catalogue } from "./Catalogue";

export interface ArticleModel extends Document {
  name: string;
  img: string;
  buyPrice: number;
  sellPrice: number;
  color: string;
  weight: number;
  nbrOfArticles: number;
  catalogue: mongoose.Types.ObjectId[] | Catalogue[];
  supplier: mongoose.Types.ObjectId | SupplierModel;
  createdBy: mongoose.Types.ObjectId | UserModel;
  description: string;
  typeArticle: string;
  barCode: string;
  idBase: string
}

const articleSchema = new Schema<ArticleModel>({
  name: { type: String, trim: true, },
  img: { type: String },
  buyPrice: { type: Number, min: 1 },
  sellPrice: { type: Number, min: 1 },
  weight: { type: Number, min: 1 },
  color: { type: String, trim: true, },
  description: { type: String, trim: true, },
  nbrOfArticles: { type: Number, min: 0 },
  catalogue: [{ type: Schema.Types.ObjectId, ref: "Catalog" }],
  supplier: { type: Schema.Types.ObjectId, ref: "Supplier" },
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  typeArticle: { type: String, trim: true, },
  idBase: { type: String, trim: true, },
  barCode: { type: String, trim: true, },
}, { timestamps: true });

// type `mongoose.models.Customer` same as `CustomerModel`
export const Article =
  mongoose.models.Article ||
  mongoose.model<ArticleModel>("Article", articleSchema);
