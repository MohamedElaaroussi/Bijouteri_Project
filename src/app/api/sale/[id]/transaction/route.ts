import { NextRequest, NextResponse } from "next/server"
import { Sale } from "../../../../../../models/Sale"
import { connectToDatabase } from "../../../../../../db/connection"
import { Bill } from "../../../../../../models/Bill"


connectToDatabase()
export const POST = async (req: NextRequest, { params }: { params: { id: string } }) => {

    try {
        const idSale = params.id
        const transaction = await req.json()
        //search for the sale
        const sale = await Sale.findById(idSale)
        if (!sale) return NextResponse.json({ "message": "Sale Not Found" }, { status: 404 })
        const bill = await Bill.findOne({ sale: idSale })

        // check if the payment not above the total price
        const paidAmountNotAboveTotal = sale.paid + transaction.total <= sale.totalPrice;
        if (!paidAmountNotAboveTotal) {
            const noPaidAmount = sale.totalPrice - sale.paid
            return NextResponse.json({ "message": "You going above total price, the client amount left to pay is " + noPaidAmount }, { status: 201 })
        }
        sale.transaction.push(transaction)

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
        return NextResponse.json({ "message": "Transaction added successfully" }, { status: 201 })

    } catch (error) {
        return NextResponse.json({ "message": "Something went wrong" }, { status: 500 })
    }
}