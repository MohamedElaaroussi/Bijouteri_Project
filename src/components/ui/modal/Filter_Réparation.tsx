
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



const Filter_Réparation = ({ text, icon }: { text: string; icon: string }) => {
    
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
                <ModalContent >

                    <ModalBody>
                        <div className="mr-6">
                            <div className="flex gap-10 pt-8 ">
                                <div>
                                    <input
                                        type="text"
                                        id="first_name"
                                        className="bg-white border border-gray-300 text-[#C1C4C7] text-[14px] font-somibold rounded-lg 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[13rem] p-2.5"
                                        placeholder="Réparateur"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        id="first_name"
                                        className="bg-white border border-gray-300 text-[#C1C4C7] text-[14px] font-somibold rounded-lg 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[13rem] p-2.5"
                                        placeholder="Téléphone"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="date"
                                        id="first_name"
                                        className="bg-white border border-gray-300 text-[#C1C4C7] text-[14px] font-somibold rounded-lg 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[13rem] p-2.5"

                                        required
                                    />
                                </div>
                                {/* <div>
                                    <input
                                        type="text"
                                        id="first_name"
                                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5"
                                        placeholder="Clients"
                                        required
                                    />
                                </div> */}

                            </div>
                            <div className="flex gap-10 pt-8 pb-8">
                                <div>
                                    <input
                                        type="Number"
                                        id="first_name"
                                        className="bg-white border border-gray-300 text-[#C1C4C7] text-[14px] font-somibold rounded-lg 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[13rem] p-2.5"
                                        placeholder="Numero d’article"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        id="first_name"
                                        className="bg-white border border-gray-300 text-[#C1C4C7] text-[14px] font-somibold rounded-lg 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[9rem] p-2.5"
                                        placeholder="Prix"
                                        required
                                    />
                                </div>
                                <div>
                                    <select className="border border-gray-300 text-[#C1C4C7]  rounded-lg text-Input font-inter  text-base 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[9rem] p-2.5">
                                        <option selected>Status </option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>
                                </div>
                                <div className="flex flex-col mr-2">

                                    <button
                                        type="button"
                                        className="text-white bg-[#D9A528] from-purple-600 to-blue-500 rounded-full  ml-10
                                         text-[#EBF1FF] border-1 border-[#EBF1FF] px-5 py-2.5 text-center
                                          w-[172px] h-[45px]"
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

export default Filter_Réparation;