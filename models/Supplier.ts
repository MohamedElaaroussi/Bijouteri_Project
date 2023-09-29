import mongoose, { Document, Schema } from "mongoose";

// Define User Schema with Admin Role
export interface SupplierModel extends Document {
  name: string;
  email: string;
  phone: number;
  deal: Date;
}

const supplierSchema = new Schema<SupplierModel>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number },
  deal: { type: Date, default: Date.now },
});

export const Supplier =
  mongoose.models.Supplier ||
  mongoose.model<SupplierModel>("Supplier", supplierSchema);
