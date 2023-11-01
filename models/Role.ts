import mongoose, { Document, Schema } from "mongoose";
import { PermissionModel } from "./Permission";

export interface RoleModel extends Document {
  name: string;
  permission: mongoose.Types.ObjectId[] | PermissionModel[];
}

const roleSchema = new Schema<RoleModel>({
  name: { type: String, required: true, unique: true },
  permission: [{ type: Schema.Types.ObjectId, ref: "Permission" }],
});

export const Role =
  mongoose.models.Role || mongoose.model<RoleModel>("Role", roleSchema);

