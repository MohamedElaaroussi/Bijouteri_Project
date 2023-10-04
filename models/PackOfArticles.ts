import mongoose, { Document, Schema } from "mongoose";
import { ArticleModel } from "./Article";
import { CategoryOfPackModel } from "./CategoryOfPack";
import { UserModel } from "./User";

export interface PackOfArticlesModel extends Document {
  name: string;
  price: number;
  weight: number;
  material: string;
  items: [
    {
      article: mongoose.Types.ObjectId | ArticleModel;
      quantity:number;
    }
  ];
  category: mongoose.Types.ObjectId | CategoryOfPackModel;
  user: mongoose.Types.ObjectId | UserModel;
  articles: mongoose.Types.ObjectId[] | ArticleModel[];
}

const packOfArticlesSchema = new Schema<PackOfArticlesModel>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  weight: { type: Number, required: true },
  material: { type: String, required: true },
  items: [
    {
      article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],
  category: {
    type: Schema.Types.ObjectId,
    ref: "CategoryOfPack",
    required: true,
  },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export const PackOfArticles =
  mongoose.models.PackOfArticles ||
  mongoose.model<PackOfArticlesModel>("PackOfArticles", packOfArticlesSchema);
