"use client"
import Image from 'next/image'
import React, { ReactNode, useState } from 'react'

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { number } from 'zod';
import { colorArr, colorObject } from '@/utils/seed';


const GoldBtn = ({ label }: { label: string }): ReactNode => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = React.useState('md')

    const sizes = ["4xl"];
    const [selectedColor, SetSelectedColor] = useState("yellow");
    const changeColorHandler = (color: string) => {
        SetSelectedColor(color);
    };


    const handleOpen = (size: string) => {
        setSize(size)
        onOpen();
    }

    return (
        <>
            <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                    <Button key={size} className='h-[45px] mt-[12px] p-3 bg-[color:var(--goldColor)] 
                        rounded-3xl hover:cursor-pointer outline-none'
                        onPress={() => handleOpen(size)}>
                        <div className='flex justify-center 
                        items-center gap-2 '>
                            <Image src={"/ajouter.svg"} alt='export logo' width={15} height={15}></Image>
                            <span className='text-white text-sm font-normal'>{label}</span>
                        </div>
                    </Button>
                ))}
            </div>
            <Modal
                // @ts-ignore
                size={size}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <div className='text-[22px] text-[#4D4D4D] font-semibold'>
                                    Ajouter un article
                                </div>
                            </ModalHeader>
                            <ModalBody>
                                <div className="flex gap-10 pt-2 ">
                                    <div>
                                        <input
                                            type="text"
                                            id="first_name"
                                            className="bg-white border border-gray-300 text-[#C1C4C7] text-[14px] font-somibold rounded-lg 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5"
                                            placeholder="Nom de l’article"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <select className="border border-gray-300 text-[#C1C4C7]  rounded-lg text-Input font-inter  text-base 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5">
                                            <option selected>Type d’article </option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="FR">France</option>
                                            <option value="DE">Germany</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='flex '>
                                    <span >
                                        <span className='text-[14px] font-semibold font-normal text-[#787878]'>Couleur</span>
                                        <div className="flex gap-1 pt-2">
                                            {colorArr.map((color) => {
                                                return (
                                                    <div
                                                        onClick={() => changeColorHandler(color)}
                                                        key={color}
                                                        className={`${colorObject[color]} relative mt-[2px] h-[20px] w-[35px] rounded-full`}
                                                    >
                                                        {color === selectedColor && (
                                                            <div className="absolute -right-1 -top-1 flex h-[11px] w-[11px] items-center justify-center rounded-full bg-green-500">
                                                                <Image
                                                                    src={"/checked.svg"}
                                                                    alt="check mark"
                                                                    width={8}
                                                                    height={4}
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </span>
                                    <div>
                                        <input
                                            type="text"
                                            id="first_name"
                                            className="bg-white border border-gray-300 text-[#C1C4C7] 
                                            text-[14px] font-somibold rounded-lg focus:ring-blue-500 
                                            focus:border-blue-500 block w-[15rem] p-2.5 mt-6 ml-[3rem]"
                                            placeholder="Code à barres"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-10 pt-2 ">
                                    <div>
                                        <input
                                            type="text"
                                            id="first_name"
                                            className="bg-white border border-gray-300 text-[#C1C4C7] text-[14px] font-somibold rounded-lg 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5"
                                            placeholder="Identification de base"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <select className="border border-gray-300 text-[#C1C4C7]  rounded-lg text-Input font-inter  text-base 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5">
                                            <option selected>Fournisseur  </option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="FR">France</option>
                                            <option value="DE">Germany</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex gap-10 pt-2 ">
                                    <div>
                                        <select className="border border-gray-300 text-[#C1C4C7]  rounded-lg text-Input font-inter  text-base 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5">
                                            <option selected>Créateur d’article </option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="FR">France</option>
                                            <option value="DE">Germany</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input
                                            type="number"
                                            id="first_name"
                                            className="bg-white border border-gray-300 text-[#C1C4C7] text-[14px] font-somibold rounded-lg 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5"
                                            placeholder="Code à barres"
                                            required
                                        />
                                    </div>

                                </div>
                                <div className="flex gap-10 pt-2 ">
                                    <div>
                                        <input
                                            type="text"
                                            id="first_name"
                                            className="bg-white border border-gray-300 text-[#C1C4C7] text-[14px] font-somibold rounded-lg 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5"
                                            placeholder="Code à barres"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <select className="border border-gray-300 text-[#C1C4C7]  rounded-lg text-Input font-inter  text-base 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5">
                                            <option selected>Etat </option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="FR">France</option>
                                            <option value="DE">Germany</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex gap-10 pt-2 ">
                                    <div>
                                        <input
                                            type="text"
                                            id="first_name"
                                            className="bg-white border border-gray-300 text-[#C1C4C7] text-[14px] font-somibold rounded-lg 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5"
                                            placeholder="Code à barres"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <select className="border border-gray-300 text-[#C1C4C7]  rounded-lg text-Input font-inter  text-base 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5">
                                            <option selected>Etat </option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="FR">France</option>
                                            <option value="DE">Germany</option>
                                        </select>
                                    </div>
                                </div>



                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal >
        </>
    )
}

export default GoldBtn



