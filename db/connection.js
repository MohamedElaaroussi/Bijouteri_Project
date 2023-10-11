import mongoose from "mongoose";
import { Permission } from "../models/Permission";
import { Role } from "../models/Role";
import { User } from "../models/User";

let cached = { conn: null, promise: null };
export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    });
  }
  try {
    cached.conn = cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}
