import { InferSchemaType, Schema, model, models } from "mongoose";


const reparationSchema = new Schema({
    status: { type: String, enum: ["Pending", "Finished"], default: "Pending" },
    paidByUs: { type: Boolean, default: true },
    categories: { type: Schema.Types.ObjectId, ref: "Category" },
    repair: { type: Schema.Types.ObjectId, ref: "Repair" },
    articles: [{
        article: { type: Schema.Types.ObjectId, ref: "Article", required: true },
        repairPrice: { type: Number, min: 1, required: true },
    }],
    totalPrice: { type: Number, default: 0 },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" }
}, { toJSON: { virtuals: true } })

type Reparation = InferSchemaType<typeof reparationSchema>;

reparationSchema.pre('save', async function () {
    if (this.isModified("articles")) {
        const totalPrice = this.articles.reduce((total: number, item: any) => {
            return total + item.repairPrice;
        }, 0);
        this.totalPrice = totalPrice;
    }
})

export const Reparation =
    models.Reparation || model<Reparation>("Reparation", reparationSchema);
