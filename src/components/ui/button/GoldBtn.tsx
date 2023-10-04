import Image from 'next/image'
import React, { ReactNode } from 'react'

const GoldBtn = ({ label, setOpenModal }: { label: string, setOpenModal: React.Dispatch<React.SetStateAction<boolean>> }): ReactNode => {
    return (
        <div onClick={() => setOpenModal(prev => true)} className='flex justify-center items-center gap-2 w-[225px] h-[45px] bg-[color:var(--goldColor)] rounded-3xl hover:cursor-pointer'>
            <Image src={"/ajouter.svg"} alt='export logo' width={15} height={15}></Image>
            <span className='text-white '>{label}</span>
        </div>
    )
}

export default GoldBtn