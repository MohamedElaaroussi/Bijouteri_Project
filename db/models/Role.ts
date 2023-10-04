import mongoose, { Document, Schema } from "mongoose";
import { MenuModel } from "./Menu";

// Define User Schema with Admin Role
export interface RoleModel extends Document {
  name: string;
  menus: mongoose.Types.ObjectId[] | MenuModel[];
}

const roleSchema = new Schema<RoleModel>({
  name: { type: String, required: true },
  menus: [{ type: Schema.Types.ObjectId, ref: "Menu"}],
});

export const Role =
  mongoose.models.Role || mongoose.model<RoleModel>("Role", roleSchema);
