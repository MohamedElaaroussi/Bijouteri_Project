import mongoose, { Document, Schema } from "mongoose";
import { RoleModel } from "./Role";
import validator from "validator"

// Define User Schema with Admin Role
export interface UserModel extends Document {
  username: string;
  email: string;
  phone: number;
  password: string;
  role: mongoose.Types.ObjectId | RoleModel;
}

const userSchema = new Schema<UserModel>({
  username: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address"],
  },
  phone: { type: Number, unique: true },
  password: { type: String, required: true },
  role: { type: Schema.Types.ObjectId, ref: "Role", required: true },
});

export const User =
  mongoose.models.User || mongoose.model<UserModel>("User", userSchema);
