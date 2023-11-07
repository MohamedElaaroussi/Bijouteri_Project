import { NextRequest, NextResponse } from "next/server";
import { Sale } from "../../../../../../../models/Sale";
import { connectToDatabase } from "../../../../../../../db/connection";
import { Bill } from "../../../../../../../models/Bill";

connectToDatabase();

export const GET = async (req: NextRequest,
  { params }: { params: { id: string; transactionId: string } },) => {

  try {
    const { id: saleId, transactionId } = params;

    // check if the sale exist
    const sale = await Sale.findById(saleId);
    if (!sale) {
      return NextResponse.json({ message: "Sale not found" });
    }

    // check if the transaction exist
    let transaction = sale?.transaction.id(transactionId);
    if (!transaction) {
      return NextResponse.json(
        { message: "The transaction was not found" },
        { status: 404 },
      );
    }
    return NextResponse.json(transaction);
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}

// Update a transaction
export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string; transactionId: string } },
) => {
  try {
    const { id: saleId, transactionId } = params;
    const { note, total, date, method } = await req.json();

    // check if the sale exist
    const sale = await Sale.findById(saleId);
    if (!sale) {
      return NextResponse.json({ message: "Sale not found" });
    }
    const bill = await Bill.findOne({ sale: saleId })
    // check if the transaction exist
    let transaction = sale?.transaction.id(transactionId);
    if (!transaction) {
      return NextResponse.json(
        { message: "The transaction was not found" },
        { status: 404 },
      );
    }
    // check if the payment not above the total price
    const paidAmountNotAboveTotal = total <= sale.totalPrice;
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

    // the client paid the total price
    if (sale.paid === sale.totalPrice) {
      sale.status = "Finished";
      bill.status = "Finished";
    } else {
      sale.status = "Pending";
      bill.status = "Pending";
    }

    const updateSale = await sale.save()
    bill.paid = updateSale.paid;
    bill.total = updateSale.totalPrice;
    await bill.save()
    return NextResponse.json({ message: "UPDATE transaction" });
  } catch (error) {
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

    // check if the sale exist
    const sale = await Sale.findById(saleId);
    if (!sale) {
      return NextResponse.json({ message: "Sale not found" });
    }
    const bill = await Bill.findOne({ sale: saleId })

    // check if the transaction exist
    let transaction = sale?.transaction.id(transactionId);
    if (!transaction) {
      return NextResponse.json(
        { message: "The transaction was not found" },
        { status: 404 },
      );
    }
    sale.transaction.pull(transactionId)
    await sale.save()
    if (sale.paid === sale.totalPrice) {
      sale.status = "Finished";
      bill.status = "Finished";
    } else {
      sale.status = "Pending";
      bill.status = "Pending";
    }
    const updateSale = await sale.save()

    bill.paid = updateSale.paid;
    bill.total = updateSale.totalPrice;
    await bill.save()
    return NextResponse.json({ message: "Transaction was deleted" });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
};
