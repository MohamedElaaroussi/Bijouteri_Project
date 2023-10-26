import { InferSchemaType, Schema, models, model } from "mongoose";
import validator from "validator"

const repairSchema = new Schema({
  username: { type: String, required: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address"],
  },
  phone: { type: String, unique: true, minlength: 10, maxlength: 10, },
  status: { type: String },
  address: { type: String },
  createdBy: { type: Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

type Repair = InferSchemaType<typeof repairSchema>;

export const Repair =
  models.Repair || model<Repair>("Repair", repairSchema);
