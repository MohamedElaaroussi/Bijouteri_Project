import mongoose, { Document, Schema } from "mongoose";
import { ArticleModel } from "./Article";
import { ClientModel } from "./Client";
import { UserModel } from "./User";
// Define Article Schema with SelledStatus
export interface SelledArticleModel extends Document {
  description: string;
  items: [
    {
      article: mongoose.Types.ObjectId | ArticleModel;
      quantity: number;
    }
  ];
  client: mongoose.Types.ObjectId | ClientModel;
  date: Date;
  status: boolean;
  user: mongoose.Types.ObjectId | UserModel;
}

const selledArticleSchema = new Schema<SelledArticleModel>({
  description: { type: String, required: true },
  items: [
    {
      article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article',
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
  status: { type: Boolean, default: false },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});


// Define the virtual field for totalPrice
selledArticleSchema.virtual('totalPrice').get(function (this: any) {
  return this.items.reduce((total: number, item: any) => {
    return total + item.article.price * item.quantity;
  }, 0);
});

// Ensure the virtuals get applied when converting to JSON
selledArticleSchema.set('toJSON', { getters: true });

export const SelledArticle = mongoose.models.SelledArticle || mongoose.model<SelledArticleModel>("SelledArticle", selledArticleSchema);
