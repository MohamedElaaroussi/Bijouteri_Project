import validator from "validator"
import mongoose, { Document, Schema } from "mongoose";
import { UserModel } from "./User";


export interface SupplierModel extends Document {
  username: string;
  email: string;
  phone: string;
  address: string;
  status: string;
  total: number;
  createdBy: mongoose.Types.ObjectId | UserModel;
  // articles: mongoose.Types.ObjectId[] | ArticleModel[];
}

const supplierSchema = new Schema<SupplierModel>({
  username: { type: String, required: true },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address"],
  },
  phone: {
    type: String, unique: true, minlength: 10, maxlength: 10
  },
  address: { type: String },
  status: { type: String },
  total: { type: Number, default: 0 },
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  // articles: [{ type: Schema.Types.ObjectId, ref: "Article" }]
}, { timestamps: true });

export const Supplier =
  mongoose.models.Supplier ||
  mongoose.model<SupplierModel>("Supplier", supplierSchema);
