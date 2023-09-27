import mongoose, { Document, Schema } from "mongoose";
import { PackOfArticlesModel } from "./PackOfArticles";
import { ClientModel } from "./Client";
// Define Article Schema with SelledStatus
export interface SelledPackModel extends Document {
  description: string;
  packs: mongoose.Types.ObjectId[] | PackOfArticlesModel[];
  client: mongoose.Types.ObjectId | ClientModel;
  date: Date;
  Status: boolean;
}

const selledPackSchema = new Schema<SelledPackModel>({
  description: { type: String, required: true },
  packs: [{ type: Schema.Types.ObjectId, ref: "Packs", required: true }],
  client: { type: Schema.Types.ObjectId, ref: "Client", required: true },
  date: { type: Date, default: Date.now },
  Status: { type: Boolean, default: false },
});

export const SelledPack =
  mongoose.models.SelledPack ||
  mongoose.model<SelledPackModel>("SelledPack", selledPackSchema);
