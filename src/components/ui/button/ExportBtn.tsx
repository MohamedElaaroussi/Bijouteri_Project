import Image from 'next/image'
import React, { ReactNode } from 'react'

const ExportBtn = ({ label }: { label: string }): ReactNode => {
    return (
        <div className='flex justify-center items-center gap-2 p-3 bg-[color:var(--green)] rounded-3xl hover:cursor-pointer outline-none'>
            <Image src={"/export-logo.svg"} alt='export logo' width={15} height={15}></Image>
            <span className='text-white text-sm'>{label}</span>
        </div>
    )
}

export default ExportBtn