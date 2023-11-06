import Image from 'next/image'
import React from 'react'

const Section1_dashboard = () => {
    return (
        <div className='flex flex-row gap-4'>
            <div className="flex bg-white w-[259px] h-[90px] mt-[4rem] p-4  rounded-[10px]  ">
                <div>
                    <div className='ml-2 mt-2'>
                        <div className="w-auto h-[29px] text-[12px] ">
                            <h4 className='text-[#A3AED0] font-normal text-[14px]'>Total de mois </h4>
                            <div className="flex gap-1">
                                <h3 className="text-[#4D4D4D] text-[20px] font-bold">6821.5</h3>
                                <h5 className='text-[#4D4D4D] text-[16px] font-dm-sans font-bold'>Dhs</h5>
                            </div>
                        </div>

                    </div>
                </div>
                <div className=' '>
                    <span className='flex gap-2 ml-6 bg-white font-bold'>
                        <Image src={"/Column/bar1.svg"} width={9} height={40} alt='Chart'
                            className=''    ></Image>
                        <Image src={"/Column/bar2.svg"} width={8} height={40} alt='Chart'
                            className=''    ></Image>
                        <Image src={"/Column/bar3.svg"} width={9} height={40} alt='Chart'
                            className=''    ></Image>
                        <Image src={"/Column/bar4.svg"} width={8} height={40} alt='Chart'
                            className=''    ></Image>
                        <Image src={"/Column/bar5.svg"} width={9} height={40} alt='Chart'
                            className=''    ></Image>
                    </span>
                </div>
            </div>
            <div className="flex bg-white w-[259px] h-[90px] mt-[4rem] p-4  rounded-[10px]">
                <div className=' flex flex-row'>
                    <div>
                        <Image src={"/shadow.svg"} className='absolute ' width={56} height={56} alt='shadowIcons'></Image>
                        <Image src={"/IconsUser.svg"} className='relative mt-1 pt-3 ml-[14px]' alt='user' width={28} height={28} ></Image>
                    </div>
                    <div className='ml-9 mt-2'>
                        <div className="w-auto h-[29px] text-[12px] ">
                            <h4 className='text-[#A3AED0] font-bold'>Nouveaux clients </h4>
                            <span className='text-[18px] tracking-tighter font-bold text-[#4D4D4D] h-[25px]'>20.</span>
                        </div>

                    </div>
                </div>
                <div className=' '>

                </div>
            </div>
            <div className="flex bg-white w-[259px] h-[90px] mt-[4rem] p-4  rounded-[10px]">
                <div className=' flex flex-row'>
                    <div>
                        <Image src={"/Shadow (1).svg"} className='absolute mt-1' width={56} height={56} alt='shadowIcons'></Image>
                        <Image src={"/barchart.svg"} className='relative mt-1 pt-3 ml-[14px]' alt='user' width={28} height={28} ></Image>
                    </div>
                    <div className='ml-9 mt-2'>
                        <div className="w-auto h-[29px] text-[12px] ">
                            <h4 className='text-[#A3AED0] font-normal text-[14px]'>Gains aujourd'hui </h4>
                            <div className="flex gap-1">
                                <h3 className="text-[#4D4D4D] text-[20px] font-bold">6821.5</h3>
                                <h5 className='text-[#4D4D4D] text-[16px] font-dm-sans font-bold'>Dhs</h5>
                            </div>
                        </div>

                    </div>
                </div>
                <div className=' '>

                </div>
            </div>
            <div className="flex bg-gradient-to-tr from-red-600 to-pink-500 w-[259px] h-[90px] mt-[4rem] p-4  rounded-[10px] ">
                <div>
                    <div className="w-auto h-[29px] text-[12px] ">
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
        </div>
    )
}

export default Section1_dashboard
