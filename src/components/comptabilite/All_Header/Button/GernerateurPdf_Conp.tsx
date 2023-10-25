import Image from 'next/image';
import React, { ReactNode } from 'react';

const GernerateurPdf_Conp = ({ label }: { label: string }): ReactNode => {
    return (
        <div>
            <div className='flex justify-center items-center gap-2 p-3 bg-[#D9A528]
        w-[207px] mt-[4rem] ml-[8px]
        rounded-3xl hover:cursor-pointer outline-none h-[45px]'>
                <Image src={"/Pdf_Icons.svg"} alt='export logo' width={15} height={15}></Image>
                <span className='text-white text-sm '>{label}</span>
            </div>
        </div>
    );
}

export default GernerateurPdf_Conp;
