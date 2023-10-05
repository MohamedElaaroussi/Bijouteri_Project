import DetailBio from '@/components/detail/DetailBio'
import DetailCategories from '@/components/detail/DetailCategories'
import DetailImage from '@/components/detail/DetailImage'
import DetailStatus from '@/components/detail/DetailStatus'
import CustomSelect from '@/components/ui/select/CustomSelect'
import Image from 'next/image'
import React from 'react'

const route = () => {

    return (
        <div className='flex gap-10 p-10'>
            <div className='flex-col flex gap-5'>
                <DetailImage src="/article.png"></DetailImage>
                <DetailStatus></DetailStatus>
                <DetailCategories></DetailCategories>
            </div>
            <div className=''>
                <div className='flex flex-col gap-5'>
                    <DetailBio />
                    <div className='bg-white px-10 py-8 rounded-[20px] flex gap-5'>
                        <div className=''>
                            <p className='text-sm text-[color:var(--labelText)]'>Code bar</p>
                            <input type="text" placeholder='564635443' className='px-5 py-3 catalogue-input mt-2 mb-1 placeholder:text-black' />
                            <p className='text-sm text-[color:var(--labelText)]'>{"Poids d'or"}</p>
                            <input type="text" placeholder='25 g' className='px-5 py-3 catalogue-input mt-2 mb-1 placeholder:text-black' />
                            <p className='text-sm text-[color:var(--labelText)]'>Cout</p>
                            <input type="text" placeholder='150 DH' className='px-5 py-3 catalogue-input mt-2 mb-1 placeholder:text-black' />
                        </div>
                        <div className='w-[200px]'>
                            <p className="text-sm text-[color:var(--labelText)]">{"Couleur d'or"}</p>
                            <div className="flex gap-1">
                                <div className="bg-[color:#AB5884] h-[20px] w-[35px] rounded-full mt-[2px] relative">
                                    <div className="bg-green-500 absolute -right-1 -top-1 rounded-full w-[11px] h-[11px] flex justify-center items-center">
                                        <Image
                                            src={"/checked.svg"}
                                            alt="check mark"
                                            width={8}
                                            height={4}></Image>
                                    </div>
                                </div>
                                <div className="bg-[color:#D69670] h-[20px] w-[35px] rounded-full mt-[2px]"></div>
                                <div className="bg-[color:#D62832] h-[20px] w-[35px] rounded-full mt-[2px]"></div>
                                <div className="bg-[color:#ff38a2] h-[20px] w-[35px] rounded-full mt-[2px]"></div>
                                <div className="bg-[color:#5640a3] h-[20px] w-[35px] rounded-full mt-[2px]"></div>
                                <div className="bg-[color:#70d361] h-[20px] w-[35px] rounded-full mt-[2px]"></div>
                            </div>
                            <div className='mt-8'>
                                <p className="text-sm text-[color:var(--labelText)]">{"Type"}</p>
                                <CustomSelect placeholder='Diament' width={"100px"}></CustomSelect>
                            </div>
                        </div>

                    </div>
                    <div className='self-end px-3 py-2 bg-[color:var(--goldColor)] rounded-3xl hover:cursor-pointer'>
                        <p className='text-sm text-white'>Sauvegarder les modifications</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default route