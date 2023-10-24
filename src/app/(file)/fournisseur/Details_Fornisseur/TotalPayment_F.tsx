"use client"
import Image from 'next/image'
import React from 'react'

const TotalPayment_F = () => {
    return (
        <div>
            <div className=" w-[17rem] mt-6 rounded-lg bg-white shadow-lg">
      <div className="pt-6 p-6">
        <div className="w-auto h-[22px] text-[12px] text-[#A3AED0]">
          <h4>Total de paiement</h4>
        </div>
        <div className="flex gap-1">
          <h3 className="text-[#4D4D4D] text-[29px] font-bold">62 821.5</h3>
          <h5>Dhs</h5>
        </div>
      </div>
      <div className="pl-[8rem]  pb-4">
        <Image src="/Column.svg" width={130} height={75} alt="Column" />
      </div>
    </div>
        </div>
    )
}

export default TotalPayment_F
