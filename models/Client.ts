import mongoose, { Document, Schema } from "mongoose";
import validator from "validator"
import { UserModel } from "./User";

export interface ClientModel extends Document {
  username: string;
  email: string;
  phone: string;
  address: string;
  status: string;
  clientType: string;
  purchase: number;
  total: number;
  createdBy: mongoose.Types.ObjectId | UserModel;
}

export const clientSchema = new Schema<ClientModel>({
  username: { type: String, required: true, trim: true, },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address"],
  },
  phone: {
    type: String, unique: true, minlength: 10, maxlength: 10, trim: true,
  },
  address: { type: String, trim: true, },
  status: { type: String, trim: true, },
  clientType: { type: String, trim: true, },
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  purchase: { type: Number, min: 0, default: 0 },
  total: { type: Number, min: 0, default: 0 },
}, { timestamps: true });

export const Client =
  mongoose.models.Client || mongoose.model<ClientModel>("Client", clientSchema);
