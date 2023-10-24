import { NextRequest, NextResponse } from "next/server";
import { Sale } from "../../../../../../../models/Sale";
import { connectToDatabase } from "../../../../../../../db/connection";

connectToDatabase();

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string; transactionId: string } },
) => {
  try {
    const { id: saleId, transactionId } = params;
    const { note, total, date, method } = await req.json();

    // check if the sale or transaction exist
    const sale = await Sale.findById(saleId);
    let transaction = sale?.transaction.id(transactionId);
    if (!transaction) {
      return NextResponse.json(
        { message: "the sale or the transaction was not found" },
        { status: 404 },
      );
    }
    // check if the payment not above the total price
    const paidAmountNotAboveTotal = sale.paid + total <= sale.totalPrice;
    if (!paidAmountNotAboveTotal) {
      const noPaidAmount = sale.totalPrice - sale.paid;
      return NextResponse.json(
        {
          message:
            "You going above total price, the client amount left to pay is " +
            noPaidAmount,
        },
        { status: 201 },
      );
    }

    if (note) transaction.note = note;
    if (total) transaction.total = total;
    if (method) transaction.method = method;
    if (date) transaction.date = date;

    await sale.save();
    return NextResponse.json({ message: "UPDATE transaction" });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string; transactionId: string } },
) => {
  try {
    const { id: saleId, transactionId } = params;
    await Sale.findByIdAndUpdate(saleId, {
      $pull: {
        transaction: { _id: transactionId },
      },
    });
    return NextResponse.json({ message: "Transaction was deleted" });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
};
