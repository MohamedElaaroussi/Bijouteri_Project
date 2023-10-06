import Image from 'next/image'
import React, { useState } from 'react'
import CustomSelect from '../select/CustomSelect'

import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import catalogueSchema, { Catalogue } from '@/schema/catalogueSchema';
import Select from 'react-select';
import { colorArr, colorObject } from '@/utils/seed';

const options = [
    { value: '1', label: 'Chocolate' },
    { value: '2', label: 'Strawberry' },
    { value: '3', label: 'Vanilla' }
]

const CatalogueModalContent = () => {

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
        <div className="mt-5">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="flex gap-10 ">
                    <div>
                        <div className='flex gap-5'>
                            <div className="flex flex-col gap-5">
                                <input
                                    className="px-5 py-3 catalogue-input"
                                    // type="text"
                                    placeholder="Nom du catalogue"
                                    {...register("catalogue")}
                                />
                                <div>
                                    <p className="text-sm mb-1">Couleur</p>
                                    <div className="flex gap-1">
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
                                </div>
                                <input
                                    className="px-5 py-3 catalogue-input"
                                    type="text"
                                    placeholder="identification de base"
                                    {...register("identification")}

                                />
                                {/* <Controller
                                    name="createur"
                                    control={control}
                                    render={({ field }) => <Select
                                        className='h-[45px] text-sm w-[270px]' {...field} options={options} placeholder="Créateur d'article"></Select>}
                                /> */}
                                <Controller
                                    name="categorie"
                                    control={control}
                                    render={({ field }) => <Select className='border[var(--borderColor)] ' {...field} options={options} placeholder={"Catégorie"} />
                                    } />
                            </div>
                            <div className="flex flex-col gap-5">
                                <Controller
                                    name="typeArticle"
                                    control={control}
                                    render={({ field }) => <Select className='border[var(--borderColor)] ' {...field} options={options} placeholder={"Type d’article"} />
                                    } />
                                <input
                                    className="px-5 py-3 catalogue-input"
                                    type="text"
                                    placeholder={"Code à barres"}
                                    {...register("codeBar")}

                                />
                                <Controller
                                    name="fornisseur"
                                    control={control}
                                    render={({ field }) => <Select className='border[var(--borderColor)] ' {...field} options={options} placeholder={"Fournisseur"} />
                                    } />
                                {/* <div className='flex border-[1px] rounded-[10px] catalogue-input px-5 py-3'>
                                <input
                                    className="outline-none"
                                    type="number"
                                    placeholder={"Poids (g)"}
                                />
                                <Image src={"/down-up-arrow.svg"} alt='down up arrow' width={16} height={17}></Image>
                            </div> */}
                                <input
                                    className="px-5 py-3 catalogue-input"
                                    type="number"
                                    placeholder={"Poids (g)"}
                                    {...register("poids")}

                                />
                                <input
                                    className="px-5 py-3 catalogue-input"
                                    type="number"
                                    placeholder={"Prix d'achat"}
                                    {...register("prix")}

                                />

                            </div>
                        </div>
                        <div className="mt-5">
                            <textarea className="border-[1px] w-full px-5 py-3 resize-none h-[112px]" {...register("description")} id="" cols={10} rows={5} placeholder='Description'></textarea>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="">
                            <div className="hover:cursor-pointer border-dashed border-2 rounded-[20px] w-[90%] h-[170px] p-8 flex flex-col justify-center items-center gap-2">
                                <Image
                                    src={"/ajouter.svg"}
                                    alt="ajouter"
                                    width={35}
                                    height={35}
                                    className='contrast-50'
                                />
                                <p className="text-[color:var(--softTextColor)] text-sm">
                                    Ajouter image
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <input
                                className="px-5 py-3 catalogue-input"
                                placeholder="Date de création"
                                type='date'
                                {...register("date")}

                            />
                            <input
                                className="px-5 py-3 catalogue-input"
                                type="text"
                                placeholder="Référence externe d’article"
                                {...register("reference")}

                            />
                            <input
                                className="px-5 py-3 catalogue-input"
                                type="number"
                                min={1}
                                placeholder={"Nombre d'article"}
                                {...register("nbrArticle")}

                            />
                            <button type='submit' className='self-end text-white bg-[color:var(--goldColor)] rounded-[60px] px-16 py-2 w-max hover:bg-[color:var(--softGoldColor)] '>Ajouter</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CatalogueModalContent