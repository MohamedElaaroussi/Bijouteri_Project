import mongoose, { Document, Schema } from "mongoose";
import { ArticleModel } from "./Article";
import { ClientModel } from "./Client";
import { UserModel } from "./User";

export interface SaleModel extends Document {
    description: string;
    date: Date;
    status: string;
    items: [
        {
            article: mongoose.Types.ObjectId | ArticleModel;
            discount: number;
            price: number
        }
    ];
    client: mongoose.Types.ObjectId | ClientModel;
    createdBy: mongoose.Types.ObjectId | UserModel;
    category: mongoose.Types.ObjectId | UserModel;
}

const saleSchema = new Schema<SaleModel>({
    description: { type: String },
    items: [
        {
            article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article', required: true },
            discount: { type: Number, default: 0 },
            price: { type: Number, min: 1 }
        }
    ],
    client: { type: Schema.Types.ObjectId, ref: "Client" },
    date: { type: Date, default: Date.now },
    status: { type: String, enum: ["Waiting", "Finished", "Cancel"], default: "Waiting" },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
}, { toJSON: { virtuals: true }, id: false });

// Define the virtual field for totalPrice
saleSchema.virtual('totalPrice').get(function () {
    return this.items.reduce((total: number, item: any) => {
        return total + item.price;
    }, 0);
});

export const Sale = mongoose.models.Sale || mongoose.model<SaleModel>("Sale", saleSchema);
