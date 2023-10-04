import mongoose, { Document, Schema } from "mongoose";
import { RoleModel } from "./Role";

export interface PermissionModel extends Document {
  name: string;
}
const PermissionSchema = new Schema<PermissionModel>({
  name: { type: String, enum: ["VIEW", "ADD", "REMOVE", "UPDATE"] },
});

// Define User Schema with Admin Role
export interface MenuModel extends Document {
  name: string;
  permissions: string[];
  garantAll: boolean;
  roles: mongoose.Types.ObjectId[] | RoleModel[];
}

const MenuSchema = new Schema<MenuModel>({
  name: { type: String, required: true },
  permissions: [PermissionSchema],
  garantAll: { type: Boolean, default: false },
  roles: [{ type: Schema.Types.ObjectId, ref: "Role", required: true }],
});

export const Menu =
  mongoose.models.Menu || mongoose.model<MenuModel>("Menu", MenuSchema);
