"use client"

import React from 'react'
import { Input, Spacer } from "@nextui-org/react";
import Image from 'next/image';
import Select from 'react-select';
import { colourOptions } from './data';





const Detils_Client = () => {
    return (
        <div className='bg-[white] rounded-[17px] h-auto w-[42rem] '>
            <div className='flex gap-8 pl-8 pt-3'>
                <div>
                    <label className="block mb-2 text-[#96B0C4] font-[12px]  ">Nom du produit</label>
                    <input type="text" id="first_name"

                        className="bg-[#FFF] border-solid border-[1px] rounded-[12px] border-[#E9EFF4]  text-gray-500 text-sm  
                             w-[18rem] p-2.5 "
                        required />
                </div>
                <div>
                    <select id="countries"
                        className="px-5 py-3 catalogue-input bg-white mt-2 mb-1 mt-8 placeholder:text-black">
                        <option value={"active"} className='text-[#787878]' selected>Active</option>
                        <option value={"déconecter"} className='text-[#787878]' >déconecter</option>
                        <option value={"Arréter"} className='text-[#787878]' >Arréter</option>
                    </select>
                </div>
            </div>
            <div className='pl-8 flex gap-8'>
                <div className="relative max-w- mt-5">
                    <input type="date" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  
                    focus:ring-blue-500 focus:border-blue-500 block w-[18rem]  p-2.5 dark:bg-gray-700 dark:border-gray-600
                     dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder='Date' />

                </div>
                <div >
                    <Select
                        defaultValue={[colourOptions[2], colourOptions[3]]}
                        isMulti
                        name="colors"
                        options={colourOptions}
                        className="basic-multi-select  w-[16.8rem] h-[2.7rem] mt-[1.3rem] rounded-[7px] "
                        classNamePrefix="select"
                    />
                    {/* <select id="countries"
                        className="px-5 py-3 catalogue-input bg-white  mb-1 mt-5  placeholder:text-black">
                        <option value={"active"} className='text-[#787878] border-solid border-[red]' selected>Active</option>
                        <option value={"déconecter"} className='text-[#787878]' >déconecter</option>
                        <option value={"Arréter"} className='text-[#787878]' >Arréter</option>
                    </select> */}
                </div>
            </div>
            <div className='flex gap-8 pb-5'>
                <div className='pl-8 w-[20rem] pb-2 mt-5'>
                    {/* <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label> */}
                    <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-white
                    rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                    dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description..."></textarea>
                </div>
                <div >
                    <select id="countries"
                        className="px-5 py-3 catalogue-input bg-white  mb-1 mt-5  placeholder:text-black">
                        <option value={"active"} className='text-[#787878] border-solid border-[red]' selected>Active</option>
                        <option value={"déconecter"} className='text-[#787878]' >déconecter</option>
                        <option value={"Arréter"} className='text-[#787878]' >Arréter</option>
                    </select>
                </div>
            </div>

        </div>
    )
}

export default Detils_Client


// siza