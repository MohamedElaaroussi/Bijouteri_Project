import mongoose, { Document, Schema } from "mongoose";
import { ArticleModel } from "./Article";

// Define Article Schema with SelledStatus
export interface StockModel extends Document {
    article: mongoose.Types.ObjectId | ArticleModel;
    quantity: number;
}

const stockSchema = new Schema<StockModel>({
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
});

stockSchema.virtual('totalPrice').get(function (this:any) {
    return this.article.price * this.quantity;
});
stockSchema.set('toJSON', { getters: true });

export const Stock =
    mongoose.models.Stock ||
    mongoose.model<StockModel>("Stock", stockSchema);
