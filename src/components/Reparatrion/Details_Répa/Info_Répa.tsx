"use client"

import DetailBio from '@/components/detail/DetailBio'
import DetailCategories from '@/components/detail/DetailCategories'
import DetailImage from '@/components/detail/DetailImage'
import DetailStatus from '@/components/detail/DetailStatus'
import Select from 'react-select'
import { colorArr, colorObject } from '@/utils/seed'
import Image from 'next/image'
import React, { useState } from 'react'
import catalogueSchema, { Catalogue } from '@/schema/catalogueSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import HeaderSection from '@/components/ui/header/HeaderSection'
import Ajouter_Article_Répa from '../Ajouter_Article_Répa'
import Info_articles_Répa from './Info_articles_Répa'


// Edit or show a catalogue
const Détails_Info_Répa = () => {
    const [selectedColor, SetSelectedColor] = useState("yellow")
    const changeColorHandler = (color: string) => {
        SetSelectedColor(color)
    }

    // VALIDATE THE catalogue
    const form = useForm<Catalogue>({
        resolver: zodResolver(catalogueSchema),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        clearErrors,

    } = form


    // SEND the catalogue data TO BACKEND
    const handleFormSubmit: SubmitHandler<Catalogue> = async (data) => {
        console.log(data);
    };

    return (
        <div className='bg-white rounded-[20px] ml-6 mr-[6]'>
            <div className=' px-10 py-8 flex gap-5  w-[38rem]  ml-[1.5rem]  pt-[2rem] mt-6'>
                <div className=''>
                    <p className='text-sm text-[color:var(--labelText)] '>Code bar</p>
                    <input type="text" placeholder='564635443' className='px-5 py-3 border-solid border-1 rounded-lg mb-2 placeholder:text-black' />
                    <p className='text-sm text-[color:var(--labelText)] mt-4'>{"Poids d'or"}</p>
                    <input type="text" placeholder='25 g' className='w-[5rem] px-5 py-3 border-solid border-1 
                    rounded-lg mb-2 placeholder:text-black' />

                </div>
                <div className='w-[200px]'>
                    <p className="text-sm text-[color:var(--labelText)]">{"Couleur d'or"}</p>
                    <div className="flex gap-1 mb-4">
                        {colorArr.map((color) => {
                            return <div onClick={() => changeColorHandler(color)
                            } key={color} className={`${colorObject[color]} h-[20px] w-[35px] rounded-full mt-[2px] relative`}>
                                {color === selectedColor && <div className="bg-green-500 absolute -right-1 -top-1 rounded-full w-[11px] h-[11px] flex justify-center items-center">
                                    <Image
                                        src={"/checked.svg"}
                                        alt="check mark"
                                        width={8}
                                        height={4} />
                                </div>}
                            </div>
                        })}
                    </div>

                    <div className='flex mr-[6rem]'>
                        <div className='ml-[-11.2rem] pt-[36px]'>
                            <p className='text-sm text-[color:var(--labelText)]'>Cout</p>
                            <input type="text" placeholder='150 DH' className='px-5 py-3 border-solid w-[7rem] border-1 rounded-lg placeholder:text-black' />
                        </div>
                        <div className='pt-[2rem] pl-4 '>
                            <p>type</p>
                            <select id="countries" className="bg-white  border border-gray-300 text-gray-900 text-sm 
                            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[10rem] p-2.5 h-[3.2rem]">
                                <option selected>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div>
                            <button className="bg-[#D9A528] text-white font-Inter 
                                w-[8rem] mt-[3.2rem] h-[3rem] ml-[1rem] py-2 px-4 rounded-full">
                                Valider
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <Ajouter_Article_Répa/>
                <Info_articles_Répa/>
            </div>
        </div>
    )
}

export default Détails_Info_Répa
