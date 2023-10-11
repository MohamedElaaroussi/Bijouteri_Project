import mongoose, { Document, Schema } from "mongoose";
import { Permission, PermissionModel } from "./Permission";

// Define User Schema with Admin Role
export interface RoleModel extends Document {
  name: string;
  permission: mongoose.Types.ObjectId[] | PermissionModel[];
}

const roleSchema = new Schema<RoleModel>({
  name: { type: String, required: true, unique: true },
  permission: [{ type: Schema.Types.ObjectId, ref: "Permission" }],
});

// roleSchema.pre('findOneAndUpdate', function () { 
//   console.log(this.getUpdate()) 
// });
// roleSchema.path("permission").validate(async (value) => {
//   // return await Permission.findById(value);
//   console.log(value);

// }, 'User does not exist')

export const Role =
  mongoose.models.Role || mongoose.model<RoleModel>("Role", roleSchema);

