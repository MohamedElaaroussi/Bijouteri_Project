import mongoose, { Document, Schema } from "mongoose";
import { RoleModel } from "./Role";
import validator from "validator"
import { hashSync } from "bcryptjs";

export interface UserModel extends Document {
  username: string;
  email: string;
  phone: string;
  password: string;
  role: mongoose.Types.ObjectId | RoleModel;
}

const userSchema = new Schema<UserModel>({
  username: { type: String, required: true },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address"],
  },
  phone: { type: String, unique: true },
  password: { type: String, required: true, select: false },
  role: { type: Schema.Types.ObjectId, ref: "Role", required: true },
}, { timestamps: true });

userSchema.pre('save', async function () {
  const user = this;
  if (user.isModified("password")) {
    const hashedPassword = hashSync(user.password)
    user.password = hashedPassword;
  }
});

export const User =
  mongoose.models.User || mongoose.model<UserModel>("User", userSchema);
