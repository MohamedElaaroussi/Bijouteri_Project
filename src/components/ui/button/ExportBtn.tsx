import Image from 'next/image'
import React, { ReactNode } from 'react'

const ExportBtn = ({ label }: { label: string }): ReactNode => {
    return (
        <div className='flex justify-center items-center gap-2 w-[124px] h-[45px] bg-[color:var(--green)] rounded-3xl hover:cursor-pointer'>
            <Image src={"/export-logo.svg"} alt='export logo' width={15} height={15}></Image>
            <span className='text-white '>{label}</span>
        </div>
    )
}

export default ExportBtn