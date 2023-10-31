import { NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "../../../../../db/connection"
import { Bill } from "../../../../../models/Bill"
import { Sale } from "../../../../../models/Sale"

connectToDatabase()
export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {

    try {
        const billId = params.id
        const bill = await Bill.findById(billId).populate("sale")
        if (!bill) return NextResponse.json({ message: "bill not found" }, { status: 200 })

        return NextResponse.json(bill, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })

    }
}

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {

    try {
        const billId = params.id
        const { items } = await req.json()
        const bill = await Bill.findById(billId).populate("sale")
        if (!bill) return NextResponse.json({ message: "bill not found" }, { status: 200 })

        if (items.length) {
            const sale = await Sale.findById(bill.sale)
            sale.items = items;
            const updateSale = await sale.save()
            bill.status = updateSale.status;
            bill.paid = updateSale.paid;
            bill.total = updateSale.totalPrice;
            await bill.save()
        }
        return NextResponse.json({ message: "Bill was updated" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })

    }
}