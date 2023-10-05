import mongoose, { Document, Schema } from 'mongoose';

// Define an enum for allowed permission values
enum Permission {
  ADD = 'add',
  REMOVE = 'remove',
  READ= 'read',
  UPDATE= 'update'
}

export interface MenuModel extends Document {
  name: string;
  permissions: Permission[];
}

const menuSchema = new Schema<MenuModel>({
  name: { type: String, required: true },
  permissions: [{ type: String, enum: Object.values(Permission) }], // Use enum with allowed values
});

export const Menu = mongoose.models.Menu || mongoose.model<MenuModel>('Menu', menuSchema);