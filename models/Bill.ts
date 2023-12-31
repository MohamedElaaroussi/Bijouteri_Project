import { model, models, InferSchemaType, Schema, Types } from "mongoose";

const clientSchema = new Schema({
    username: { type: String, trim: true, },
    email: { type: String, trim: true, },
    phone: { type: String, trim: true, }
})

const billSchema = new Schema({
    _id: { type: Number },
    deliveryMethod: { type: String, trim: true, },
    paymentMethod: { type: String, trim: true, },
    client: { type: clientSchema },
    sale: { type: Types.ObjectId, ref: "Sale" },
    paid: { type: Number },
    total: { type: Number },
    status: { type: String, enum: ["Pending", "Finished"], default: "Pending" },
}, { timestamps: true })

export type Bill = InferSchemaType<typeof billSchema>;

// Increment Id
billSchema.pre('save', function (next) {
    // Only increment when the document is new
    if (this.isNew) {
        Bill.count().then((res) => {
            this._id = ++res; // Increment count
            next()
        });
    } else {
        next()
    }
});

export const Bill =
    models.Bill || model<Bill>("Bill", billSchema);