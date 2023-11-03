import Image from 'next/image'
import React from 'react'

const Cheffre_Affaiire_Conpt = () => {
    return (
        <div className=''>
            <div className="flex gap-3 bg-[#fff] w-[17rem] mt-6 p-4  rounded-lg  shadow-lg">
                <div className='relative'>
                    <Image src={"/CercleF.svg"} width={56} height={56} alt='Cercle' ></Image>
                    <Image src={"/Column_Cpt.svg"} className="absolute top-3 left-3" width={32.842} height={32.842} alt='Cercle' ></Image>
                </div>
                <div>
                    <div>
                        <span className='text-xs text-[#A3AED0] tracking-[-0.28px] '>Chiffre d affaire</span>
                        <h3 className='flex text-[#4D4D4D] gap-1'>
                            <div>152 350,40</div>
                            <span className='text-[12px]'>Dhs</span>
                        </h3>
                    </div>
                    <div></div>
                </div>
                <div>
                    <Image src={"/Update.svg"} width={20} height={20} alt='update' className='ml-[1.7rem]'></Image>
                </div>
            </div>
        </div>
    )
}

export default Cheffre_Affaiire_Conpt
