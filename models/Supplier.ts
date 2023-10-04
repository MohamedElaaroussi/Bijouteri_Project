import mongoose, { Document, Schema } from "mongoose";
import { UserModel } from "./User";

// Define User Schema with Admin Role
export interface SupplierModel extends Document {
  name: string;
  email: string;
  phone: number;
  deal: Date;
  user: mongoose.Types.ObjectId | UserModel;
}

const supplierSchema = new Schema<SupplierModel>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number },
  deal: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export const Supplier =
  mongoose.models.Supplier ||
  mongoose.model<SupplierModel>("Supplier", supplierSchema);
