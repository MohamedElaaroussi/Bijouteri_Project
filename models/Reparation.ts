import { InferSchemaType, Schema, model, models } from "mongoose";


const reparationSchema = new Schema({
    codeBar: { type: String },
    status: { type: Boolean, default: false },
    paidByUs: { type: Boolean, default: true },
    categories: { type: Schema.Types.ObjectId, ref: "Category" },
    repair: { type: Schema.Types.ObjectId, ref: "Repair" },
    articles: [{
        article: { type: Schema.Types.ObjectId, ref: "Article" },
        repairPrice: { type: Number, min: 1 }
    }],
})

type Reparation = InferSchemaType<typeof reparationSchema>;

reparationSchema.virtual("reparationTotalPrice").get(function () {
    return this.articles.reduce((total: number, item: any) => {
        return total + item.repairPrice;
    }, 0);
})

export const Reparation =
    models.Reparation || model<Reparation>("Reparation", reparationSchema);
