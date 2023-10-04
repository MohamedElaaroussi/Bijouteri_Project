import mongoose, { Document, Schema } from "mongoose";
import { PackOfArticlesModel } from "./PackOfArticles";
import { ClientModel } from "./Client";
import { UserModel } from "./User";
// Define Pack Schema with SelledStatus
export interface SelledPackModel extends Document {
  description: string;
  items: [
    {
      pack: mongoose.Types.ObjectId | PackOfArticlesModel;
      quantity: number;
    }
  ];
  client: mongoose.Types.ObjectId | ClientModel;
  date: Date;
  Status: boolean;
  user: mongoose.Types.ObjectId | UserModel;
}

const selledPackSchema = new Schema<SelledPackModel>({
  description: { type: String, required: true },
  items: [
    {
      pack: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pack',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],
  client: { type: Schema.Types.ObjectId, ref: "Client", required: true },
  date: { type: Date, default: Date.now },
  Status: { type: Boolean, default: false },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

// Define the virtual field for totalPrice
selledPackSchema.virtual('totalPrice').get(function (this: any) {
  return this.items.reduce((total: number, item: any) => {
    return total + item.Pack.price * item.quantity;
  }, 0);
});

// Ensure the virtuals get applied when converting to JSON
selledPackSchema.set('toJSON', { getters: true });

export const SelledPack = mongoose.models.SelledPack || mongoose.model<SelledPackModel>("SelledPack", selledPackSchema);
