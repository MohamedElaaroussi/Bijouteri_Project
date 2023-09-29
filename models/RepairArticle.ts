import mongoose, { Document, Schema } from "mongoose";
import { ArticleModel } from "./Article";
import { UserModel } from "./User";
import { ClientModel } from "./Client";
// Define RepairsArticles Schema
export interface RepairArticleModel extends Document {
  title: string;
  description: string;
  user: mongoose.Types.ObjectId | UserModel;
  client: mongoose.Types.ObjectId | ClientModel;
  repairedStatus: boolean;
  repairedDate: Date;
  deposite: Date;
}

const repairArticleSchema = new Schema<RepairArticleModel>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  client: { type: Schema.Types.ObjectId, ref: "Client", required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  repairedStatus: { type: Boolean, required: false },
  deposite: { type: Date, default: Date.now },
  repairedDate: { type: Date },
});

export const RepairArticle =
  mongoose.models.RepairsArticle ||
  mongoose.model<RepairArticleModel>("RepairsArticle", repairArticleSchema);
