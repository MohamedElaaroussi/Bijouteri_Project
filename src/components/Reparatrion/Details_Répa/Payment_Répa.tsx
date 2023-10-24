import React from 'react'

const Payment_Répa = () => {
    return (
        <div className='bg-white px-10 py-8 rounded-[20px] w-[22rem] mt-5'>
            <div>
                <span>
                    <div className="flex flex-row gap-4  mr-1">
                        <span className='flex w-[18rem]'>
                            <input id="inline-radio" type="radio" value="" name="inline-radio-group"
                                className="w-4 h-4 text-gray-300 text-sm border-gray-300 " />
                            <label className=" ml-2 mr-6 text-sm font-medium text-sm text-[#787878] dark:text-gray-300 w-[100px]">Payé par nous</label>
                        </span>
                        <span className='flex w-[18rem]'>
                            <input id="inline-radio" type="radio" value="" name="inline-radio-group"
                                className="w-4 h-4 text-gray-300  border-gray-300 " />
                            <label className=" ml-2 mr-6 text-sm font-medium text-[#787878] dark:text-gray-300 w-[100px]">Payé par nous</label>
                        </span>
                    </div>
                </span>
                <span></span>
            </div>
            <div className=' flex mt-5'>
                <div>
                    <span className='text-[#A3AED0] text-[14px]'>
                        Total de réparation
                    </span>
                    <div className='flex gap-2'>
                        <span className='text-[#4D4D4D] text-[35px] font-bold'>
                          421.5  
                        </span>
                        
                        <span>
                            Dhs
                        </span>
                    </div>
                </div>
                <div>
                <button className="rounded-full text-white bg-[#D9A528] w-[8rem] h-10 mt-7 ml-8">Ajouté</button>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Payment_Répa
