import Image from 'next/image';
import React from 'react';

const Dtails_Document = () => {
    return (
        <div>
            <div className='bg-white px-10 py-8 rounded-[20px] pt-4 pb-4 h-[11.5rem] w-[20rem]'>
                <div>
                    <h3 className=' flex text-[#787878] text-[14px] font-semibold	'>
                        Documents
                    </h3>
                </div>
                <div className='pt-4'>
                    <div className='flex justify-between border-b-1 pb-2'>
                        <h4 className='text-[#96B0C4] text-[12px]'>Facture</h4>
                        <h3 className='text-[#787878] text-[12px] font-semibold	'>
                            <span className='flex flex-row gap-2'>
                                #INV-000414
                            </span>
                        </h3>
                    </div>
                </div>
                <div className='pt-4'>
                    <div className='flex justify-between border-b-1 pb-2'>
                        <h4 className='text-[#96B0C4] text-[12px]'>Expédition</h4>
                        <h3 className='text-[#787878] text-[12px] font-semibold	'>#SHP-0025410</h3>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Dtails_Document;
