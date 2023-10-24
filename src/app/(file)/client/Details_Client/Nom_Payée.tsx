"use client"
import Image from 'next/image'
import React from 'react'

const Nom_Payée = () => {
    return (
        <div className="flex  bg-[red] w-[17rem]  mt-6 p-4  rounded-lg  shadow-lg">
            <div>
                <div className="w-auto h-[22px] text-[12px] ">
                    <h4 className='text-[#E9EDF7]'>Non Payée </h4>
                </div>
                <div className="flex gap-1">
                    <h3 className="text-[#FFF] text-[18px] font-bold">2540,5</h3>
                    <h5 className='text-[#FFF]'>Dhs</h5>
                </div>
                
            </div>
            <div className=' '>
                <span className='bg-white'>
                <Image src={"/Chart.svg"} width={80} height={60} alt='Chart'
                    className='ml-[6rem]'    ></Image>
                </span>
            </div>
        </div>

    )
}

export default Nom_Payée
