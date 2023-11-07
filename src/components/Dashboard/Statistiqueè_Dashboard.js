
import Image from 'next/image'
import React from 'react'
import { ChartBar } from './ChartBar'




const Statistiqueè_Dashboard = () => {
  return (
    <div className='bg-white w-[720px] h-[345px] mt-[4rem] p-4  rounded-[20px]'>
      <div className='flex justify-between'>
        <span className='text-[#A3AED0]  text-sm font-medium text-sm tracking-tight pl-3'>
          Statisiques de l’année 2023
        </span>
        <span className='pr-3 '>
          <Image src={'/bar_chart.svg'} width={28} height={28} alt='shadow'></Image>
        </span>
      </div>
      <div>
        <div className='text-[30px] font-bold pl-3'>
          <div className="flex gap-1">
            <h3 className="text-[#4D4D4D] text-[30px] font-bold">85 821,5</h3>
            <h5 className='text-[#4D4D4D] text-[20px] font-dm-sans font-bold pt-1'>Dhs</h5>
          </div>
        </div>
      </div>
      <div>
        {/* // <ChartBar/>    */     }
        
      </div>
    </div>
  )
}

export default Statistiqueè_Dashboard
