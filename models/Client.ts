import mongoose, { Document, Schema } from "mongoose";

// Define User Schema with Admin Role
export interface ClientModel extends Document {
  name: string;
  email: string;
  phone: string;
}

const clientSchema = new Schema<ClientModel>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
});

export const Client =
  mongoose.models.Client || mongoose.model<ClientModel>("Client", clientSchema);
