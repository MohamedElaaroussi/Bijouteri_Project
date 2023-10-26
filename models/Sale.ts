import mongoose, { Document, Schema } from "mongoose";
import { Article, ArticleModel } from "./Article";
import { ClientModel } from "./Client";
import { UserModel } from "./User";

interface Transaction {
    _id: mongoose.Types.ObjectId;
    method: string,
    total: number,
    date: Date,
    note: string,
}

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
    totalPrice: number;
    totalWeight: number;
    transaction: Transaction[];
    client: mongoose.Types.ObjectId | ClientModel;
    createdBy: mongoose.Types.ObjectId | UserModel;
    category: mongoose.Types.ObjectId | UserModel;
}

const transactionSchema = new Schema<Transaction>({
    method: { type: String },
    total: { type: Number, min: 0 },
    date: { type: Date, default: Date.now },
    note: { type: String },
})

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
    status: { type: String, enum: ["Pending", "Finished", "Cancel"], default: "Pending" },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    totalPrice: { type: Number, default: 0 },
    totalWeight: { type: Number, default: 0 },
    transaction: [{ type: transactionSchema }]
}, { toJSON: { virtuals: true }, toObject: { virtuals: true } });

saleSchema.pre('save', async function () {
    if (this.isModified("items")) {

        const totalPrice = this.items.reduce((total: number, item: any) => {
            // calc the discount number to be subtracted from the total price
            const discountNbr = item.price - (item.price * (item.discount / 100))
            return total + discountNbr;
        }, 0);
        this.totalPrice = totalPrice;

        const weightItem: any = [];
        this.items.forEach(item => weightItem.push(item.article))
        const foundItem = await Article.find({ _id: { $in: weightItem } }).select('weight')
        const totalWeight = foundItem.reduce((total: number, item: any) => {
            // calc the discount number to be subtracted from the total price
            return total + item.weight;
        }, 0);
        this.totalWeight = totalWeight;
    }
})

saleSchema.virtual('paid',).get(function (this: any) {

    return this.transaction.reduce((total: number, item: any) => {
        return total + item.total;
    }, 0);
})

export const Sale = mongoose.models.Sale || mongoose.model<SaleModel>("Sale", saleSchema);
