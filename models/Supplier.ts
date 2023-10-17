import validator from "validator"
import mongoose, { Document, Schema } from "mongoose";
import { UserModel } from "./User";


// Define User Schema with Admin Role
export interface SupplierModel extends Document {
  name: string;
  email: string;
  phone: string;
  address: string;
  status: string;
  createdBy: mongoose.Types.ObjectId | UserModel
}

const supplierSchema = new Schema<SupplierModel>({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address"],
  },
  phone: { type: String, unique: true, min: 10, max: 10 },
  address: { type: String },
  status: { type: String },
  createdBy: { type: Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

export const Supplier =
  mongoose.models.Supplier ||
  mongoose.model<SupplierModel>("Supplier", supplierSchema);
