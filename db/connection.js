import mongoose from "mongoose";

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
