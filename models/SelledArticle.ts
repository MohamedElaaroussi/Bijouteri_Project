import mongoose, { Document, Schema } from "mongoose";
import { ArticleModel } from "./Article";
import { ClientModel } from "./Client";
// Define Article Schema with SelledStatus
export interface SelledArticleModel extends Document {
  description: string;
  articles: mongoose.Types.ObjectId[] | ArticleModel[];
  client: mongoose.Types.ObjectId | ClientModel;
  date: Date;
  Status: boolean;
}

const selledArticleSchema = new Schema<SelledArticleModel>({
  description: { type: String, required: true },
  articles: [{ type: Schema.Types.ObjectId, ref: "Articles", required: true }],
  client: { type: Schema.Types.ObjectId, ref: "Client", required: true },
  date: { type: Date, default: Date.now },
  Status: { type: Boolean, default: false },
});

export const SelledArticle =
  mongoose.models.SelledArticle ||
  mongoose.model<SelledArticleModel>("SelledArticle", selledArticleSchema);
