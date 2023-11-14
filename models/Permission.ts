import mongoose, { Document, Schema } from "mongoose";


export interface PermissionModel extends Document {
    name: string,
}

const PermissionSchema = new Schema<PermissionModel>({
    name: { type: String, required: true, unique: true, trim: true, },
});

export const Permission =
    mongoose.models.Permission || mongoose.model<PermissionModel>("Permission", PermissionSchema);