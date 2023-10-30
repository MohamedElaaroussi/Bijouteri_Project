import Image from 'next/image';
import React from 'react';

const Dtails_Client = () => {
    return (
        <div>
            <div className='bg-white px-10 py-8 rounded-[20px] pt-4 pb-4 w-[20rem]'>
                <div>
                    <h3 className=' flex text-[#787878] text-[14px] font-semibold	'>
                        Détails du client
                    </h3>
                </div>
                <div className='pt-4'>
                    <div className='flex justify-between border-b-1 pb-2'>
                        <h4 className='text-[#96B0C4] text-[12px]'>Client</h4>
                        <h3 className='text-[#787878] text-[12px] font-semibold	'>
                            <span className='flex flex-row gap-2'>
                                <span className='pt-1'>
                                    <Image src={"/Icon_User.svg"} width={10} height={8} alt='User_Icon' ></Image>
                                </span>
                                <span className='text-[14px] text-[#D9A528]'> Mustapha Lwalidi</span>
                            </span>
                        </h3>
                    </div>
                </div>
                <div className='pt-4'>
                    <div className='flex justify-between border-b-1 pb-2'>
                        <h4 className='text-[#96B0C4] text-[12px]'>E-mail</h4>
                        <h3 className='text-[#787878] text-[12px] font-semibold	'>mustapha@gmail.com</h3>
                    </div>

                </div>
                <div className='pt-4'>
                    <div className='flex justify-between border-b-1 pb-2'>
                        <h4 className='text-[#96B0C4] text-[12px]'>Téléphone </h4>
                        <h3 className='text-[#787878] text-[12px] font-semibold	'>0666 848 552</h3>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Dtails_Client;
