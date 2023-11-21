"use client"
import Image from 'next/image'
import React, { ReactNode, useState } from 'react'

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Textarea } from "@nextui-org/react";
import { number } from 'zod';
import { colorArr, colorObject } from '@/utils/seed';
import AddedBtn from '../../button/AddedBtn';


const ModalAjoute = ({ label, children }: { label: string, children: JSX.Element }): ReactNode => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = React.useState('md')

    const sizes = ["4xl"];
    const [selectedColor, SetSelectedColor] = useState("yellow");

    const handleOpen = (size: string) => {
        setSize(size)
        onOpen();
    }

    return (
        <>
            <div className="flex flex-wrap gap-3">
                {
                    sizes.map((size) => (
                        <Button key={size} className='h-[45px] mt-[12px] p-3 bg-[color:var(--goldColor)] 
                        rounded-3xl hover:cursor-pointer outline-none'
                            onPress={() => handleOpen(size)}>
                            <div className='flex justify-center 
                        items-center gap-2 '>
                                <Image src={"/ajouter.svg"} alt='export logo' width={15} height={15}></Image>
                                <span className='text-white text-sm font-normal'>{label}</span>
                            </div>
                        </Button>
                    ))
                }
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
                                {children}
                            </ModalBody>
                            <ModalFooter
                            >
                            <AddedBtn onPress={onClose} />
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal >
        </>
    )
}

export default ModalAjoute



