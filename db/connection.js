import mongoose from "mongoose";
import { Permission } from "../models/Permission";
import { Role } from "../models/Role";
import { User } from "../models/User";
import { Supplier } from "../models/Supplier";
import { Article } from "../models/Article";
import { Client } from "../models/Client";

export async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) {
    console.log("already connected");
    return await mongoose.connection.asPromise();
  }
  console.log("connected");
  return await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
