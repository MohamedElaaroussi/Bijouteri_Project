"use client"
import React, { useState } from "react";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Image from "next/image";

export default function Historique_Payment() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = React.useState('md')

    const sizes = ["2xl"];

    const handleOpen = (size: "md") => {
        setSize(size)
        onOpen();
    }
    return (
        <>
            <div className="bg-[white] rounded-[17px] h-auto w-[22rem] mt-5">
                <div className="text-[#96B0C4] pl-[1.2rem] pt-3 pb-3">Historique de paiement</div>
                <Table className="pl-4 pr-4 overflow-y-auto h-[9.6rem]" removeWrapper aria-label="Example static collection table">
                    <TableHeader className="">
                        <TableColumn>Méthode</TableColumn>
                        <TableColumn>Total</TableColumn>
                        <TableColumn>{' '}</TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow key="1">
                            <TableCell>
                                 
                                    <h3 className="text-[#787878]">CACHE</h3>
                                    <h6 className="text-[#C1C4C7] text-xs">Sep 15, 2023</h6>
                                
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-1">
                                    <div className="text-[#787878] text-xl font-bold">1250</div>
                                    <div className="text-[#787878] text-xs pb-2">Dhs</div></div>
                            </TableCell>
                            <TableCell>
                                {/* update Icons     */}
                                <div className="flex gap-4">
                                    <Image src={"/Update.svg"} alt="Updat Icons" width={18} height={18}></Image>
                                    <Image src={"/Delete.svg"} alt="Updat Icons" width={18} height={18}></Image>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow key="1">
                            <TableCell>
                                <h3 className="rtext-[#787878]">CACHE</h3>
                                <h6 className="text-[#C1C4C7] text-xs">Sep 15, 2023</h6>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-1">
                                    <div className="text-[#787878] text-xl font-bold">1250</div>
                                    <div className="text-[#787878] text-xs pb-2">Dhs</div></div>
                            </TableCell>
                            <TableCell>
                                {/* update Icons     */}
                                <div className="flex gap-4">
                                    <Image src={"/Update.svg"} alt="Updat Icons" width={18} height={18}></Image>
                                    <Image src={"/Delete.svg"} alt="Updat Icons" width={18} height={18}></Image>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow key="1">
                            <TableCell>
                                <h3 className="rtext-[#787878]">CACHE</h3>
                                <h6 className="text-[#C1C4C7] text-xs">Sep 15, 2023</h6>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-1">
                                    <div className="text-[#787878] text-xl font-bold">1250</div>
                                    <div className="text-[#787878] text-xs pb-2">Dhs</div></div>
                            </TableCell>
                            <TableCell>
                                {/* update Icons     */}
                                <div className="flex gap-4">
                                    <Image src={"/Update.svg"} alt="Updat Icons" width={18} height={18}></Image>
                                    <Image src={"/Delete.svg"} alt="Updat Icons" width={18} height={18}></Image>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow key="1">
                            <TableCell>
                                <h3 className="rtext-[#787878]">CACHE</h3>
                                <h6 className="text-[#C1C4C7] text-xs">Sep 15, 2023</h6>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-1">
                                    <div className="text-[#787878] text-xl font-bold">1250</div>
                                    <div className="text-[#787878] text-xs pb-2">Dhs</div></div>
                            </TableCell>
                            <TableCell>
                                {/* update Icons     */}
                                <div className="flex gap-4">
                                    <Image src={"/Update.svg"} alt="Updat Icons" width={18} height={18}></Image>
                                    <Image src={"/Delete.svg"} alt="Updat Icons" width={18} height={18}></Image>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div>
                    {/* <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="flex gap-4 ml-4 items-center rounded-full bg-[#F9FCFF] pl-4 pr-6 mt-4">
                        <span className="text-[#D9A528] text-3xl ">+</span>
                        <span className="text-[#D9A528]">Ajouter une transaction</span>
                    </button> */}
                    <div className="flex flex-wrap gap-3">
                        {sizes.map((size) => (
                            // @ts-ignore
                            <Button key={size} onPress={() => handleOpen(size)}
                                className="flex gap-4 ml-4 items-center rounded-full bg-[#F9FCFF] pl-4 pr-6 mt-4"
                            >
                                <span className="text-[#D9A528] text-3xl ">+</span>
                                <span className="text-[#D9A528]">Ajouter une transaction</span>
                            </Button>
                        ))}
                    </div>
                    <Modal
                    //  @ts-ignore 
                        size={size}
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1">Ajouter une autre traité</ModalHeader>
                                    <ModalBody>
                                        <div className='flex gap-6 bg-white px-10 py-2 rounded-[20px] w-[22rem]'>
                                            <div><select id="countries"
                                                className="bg-white px-5 py-3 catalogue-input  mb-1 placeholder:text-black">
                                                <option className='text-[#787878]' selected>Active</option>
                                                <option className='text-[#787878]' value="US">calme</option>
                                                <option className='text-[#787878]' value="CA">Arréter</option>
                                            </select></div>
                                            <div>
                                                <input type="text" placeholder='Prix'
                                                    className='px-5 py-3 catalogue-input text-[#C1C4C7]  placeholder:text-black' />
                                            </div>
                                            {/* <p className='text-sm text-[color:var(--labelText)]'>{"Définissez l'état du produit"}</p> */}
                                        </div>
                                        <div>
                                            <div className="relative max-w- mt-5">
                                                <input type="date" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  
                                                    focus:ring-blue-500 focus:border-blue-500 block w-[269px] ml-10 p-2.5 pt-2"
                                                    placeholder='Date' />

                                            </div>
                                        </div>
                                        <div>
                                            <div className='pl-9 w-[38rem] pb-2 mt-5'>
                                                {/* <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label> */}
                                                <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-white
                                                    rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 
                                                    " placeholder="Note "
                                                ></textarea>
                                            </div>
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <div className="pr-4">
                                            <Button color="primary" className="bg-[#D9A528] w-[200px] h-[45px] rounded-full ml-5 ">
                                                Ajouter
                                            </Button>
                                        </div>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>



                </div>
                <div className="pt-6">
                    <div className="flex ml-[2rem] gap-12">
                        <div>
                            <h5 className="text-xs text-[#A3AED0]">Non Payé</h5>
                            <div className="flex gap-2">
                                <h1 className="text-2xl text-[#D62832] font-bold">2 521.5 </h1>
                                <h6 className="text-[#D62832] font-bold text-sm">Dhs</h6>
                            </div>
                        </div>
                        <div className="">
                            <h5 className="text-xs text-[#A3AED0] ">Payé</h5>
                            <div className="flex gap-1">
                                <h1 className="text-2xl text-[#05CD99] font-bold">1 521.5 </h1>
                                <h6 className="text-[#05CD99] font-bold text-sm">Dhs</h6>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5 ">
                        <div className="ml-[2rem]">
                            <h5 className="text-xs text-[#A3AED0] ">Total</h5>
                            <div className="flex gap-1">
                                <h1 className="text-4xl text-[#4D4D4D] font-bold">1 521.5 </h1>
                                <h6 className="text-[#4D4D4D] font-bold text-sm">Dhs</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
