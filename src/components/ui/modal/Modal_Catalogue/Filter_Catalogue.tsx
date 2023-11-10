
"use client"
import React, { useState } from "react";
import Image from "next/image";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";
import { colorArr, colorObject } from '@/utils/seed'



const Filter_Catalogue = ({ text, icon }: { text: string; icon: string }) => {
    const [selectedColor, SetSelectedColor] = useState("yellow")
    const changeColorHandler = (color: string) => {
        SetSelectedColor(color)
    }
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = React.useState("md");

    const sizes = ["4xl"];

    const handleOpen = (size: string) => {
        setSize(size);
        onOpen();
    };

    return (
        <div >
            {sizes.map((size) => (
                <Button
                    key={size}
                    onPress={() => handleOpen(size)}
                    className="hover:cursor-pointer flex items-center bg-white rounded-[60px] h-[45px] mt-[8px]
                         border-[1px] p-3 border-[var(--borderColor)] gap-2"
                >
                    <div className="hover:cursor-pointer flex items-center bg-white
                          p-3 border-[var(--borderColor)] gap-2">
                        <div className="hover:cursor-pointer flex items-center bg-white rounded-[60px]  gap-2">
                            <Image src={icon} alt="date" width={"13"} height={"13"}></Image>
                            <p className="text-xs text-[var(--textColor)] font-medium">{text}</p>
                        </div>
                    </div>
                </Button>
            ))}

            <Modal
                // @ts-ignore
                size={size} isOpen={isOpen} onClose={onClose}
            >
                <ModalContent>

                    <ModalBody>
                        <div>
                            <div className="flex gap-10 pt-8 mb-3 mt-[-1rem]">
                                <div>
                                    <input
                                        type="text"
                                        id="first_name"
                                        className="bg-white border border-gray-300 text-[#C1C4C7] text-[14px] font-somibold rounded-lg 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5"
                                        placeholder="Nom"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        id="first_name"
                                        className="bg-white border border-gray-300 text-[#C1C4C7] text-[14px] font-somibold rounded-lg 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5"
                                        placeholder="Nombre d'articles ..."
                                        required
                                    />
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="text-white bg-[#D9A528] from-purple-600 to-blue-500 rounded-full  ml-[1.3rem]
                                         text-[#EBF1FF] border-1 border-[#EBF1FF] px-5 py-2.5 text-center mr-2  w-[172px] h-[45px]"
                                    >
                                        Recherche
                                    </button>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
}

export default Filter_Catalogue;