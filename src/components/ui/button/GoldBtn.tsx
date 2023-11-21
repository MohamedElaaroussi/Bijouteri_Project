"use client"
import Image from 'next/image'
import React, { ReactNode, useState } from 'react'

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Textarea } from "@nextui-org/react";
import { number } from 'zod';
import { colorArr, colorObject } from '@/utils/seed';
import { TableData, TableHeaders } from '@/components/Vente/Modal/tableTh';


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
                                    {label}
                                </div>
                            </ModalHeader>
                            <ModalBody>
                                <div>
                                    <div className="flex pt-2 relative mx-auto text-gray-600">
                                        <input className="relative border-1 border-gray-400 bg-white h-12 w-[30rem] px-5 pr-16 rounded-lg text-sm"
                                            type="search" name="search" placeholder="Rechercher l’article" />
                                        <svg className="absolute text-gray-600 h-6 w-6 fill-current ml-[27.4rem] mt-3" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px"
                                            viewBox="0 0 56.966 56.966" width="512px" height="500px">
                                            <path
                                                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                        </svg>
                                        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <section className="flex flex-col justify-center antialiased  text-gray-600  p-4">
                                        <div className="h-full">
                                            <div className="overflow-x-auto">
                                                <table className="table-auto w-full">
                                                    <thead className="text-xs font-semibold uppercase text-gray-400 rounded-xl bg-gray-100">
                                                        <tr>
                                                            {TableHeaders.map((header) => (
                                                                <th key={header.key} className={`p-2 whitespace-nowrap text-${header.align}`}>
                                                                    <div className="font-semibold text-center">{header.label}</div>
                                                                </th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-sm divide-y divide-gray-100">
                                                        {TableData.map((row, index) => (
                                                            <tr key={index}>
                                                                <td className='w-16'>
                                                                    <div className="flex justify-center">
                                                                        <Image src={row.icons} alt='icons' width={18} height={18}></Image>
                                                                    </div>
                                                                </td>
                                                                <td className="p-2 whitespace-nowrap">
                                                                    <div className="flex justify-center">
                                                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                                                            <Image className="rounded-full" src={row.img} width={40} height={40} alt={row.code} />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="p-2 whitespace-nowrap">
                                                                    <div className="text-left">{row.code}</div>
                                                                </td>
                                                                <td className="p-2 whitespace-nowrap">
                                                                    <div className="text-left font-medium text-green-500">{row.poid}</div>
                                                                </td>
                                                                <td className="p-2 whitespace-nowrap">
                                                                    <div className="text-lg text-center">{row.Cout}</div>
                                                                </td>
                                                                <td className="p-2 whitespace-nowrap">
                                                                    <div className="text-lg text-center">{row.Remise}</div>
                                                                </td>
                                                                <td className="p-2 whitespace-nowrap">
                                                                    <div className="text-lg text-center">{row.Total}</div>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div></div>
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



