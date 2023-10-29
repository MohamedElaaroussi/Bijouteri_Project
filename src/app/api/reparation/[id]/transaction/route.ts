import { NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "../../../../../../db/connection"
import { Reparation } from "../../../../../../models/Reparation"

connectToDatabase()
export const POST = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
        const repairId = params.id
        const transaction = await req.json()
        //search for the sale
        const repair = await Reparation.findById(repairId)
        if (!repair) return NextResponse.json({ "message": "Repair Not Found" }, { status: 404 })

        // check if the payment not above the total price
        const paidAmountNotAboveTotal = repair.paid + transaction.total <= repair.totalPrice;
        if (!paidAmountNotAboveTotal) {
            const noPaidAmount = repair.totalPrice - repair.paid
            return NextResponse.json({ "message": "You going above total price, the repair amount left to pay is " + noPaidAmount }, { status: 400 })
        }

        repair.transaction.push(transaction)
        await repair.save()
        return NextResponse.json({ "message": "Transaction added successfully" }, { status: 201 })

    } catch (error) {
        return NextResponse.json({ "message": "Something went wrong" }, { status: 500 })
    }
}