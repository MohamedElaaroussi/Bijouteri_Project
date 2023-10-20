"use client"
import React, { useEffect, useState } from 'react'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react";
import Image from 'next/image';


const Details_Articles = () => {
    return (
        <div>
            <div className='bg-[white] rounded-[17px] h-auto w-[42rem] mt-5'>
                <div>
                    <form className='pt-6 pl-9 pr-9'>
                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 pr-10 text-sm 
                        text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 
                        focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Rechercher l’article" required />
                        </div>
                    </form>
                </div>
                <div>
                    <div>
                        <Table className="pl-9 pr-9 overflow-y-auto max-h-[19rem] mt-4" removeWrapper aria-label="Example static collection table">
                            <TableHeader className="">
                                <TableColumn>
                                    {""}
                                </TableColumn>
                                <TableColumn>Images d’articles</TableColumn>
                                <TableColumn >
                                    <div className='flex items-center gap-2'>
                                        <span>Poids</span>
                                        <Image src={"/Icons_table.svg"} width={10} height={10} alt='icons'
                                        ></Image>
                                    </div>
                                </TableColumn>
                                <TableColumn>
                                    <div className='flex items-center gap-2'>
                                        <span>Coût</span>
                                        <Image src={"/Icons_table.svg"} width={10} height={10} alt='icons'
                                        ></Image>
                                    </div>
                                </TableColumn>
                                <TableColumn>
                                    <div className='flex items-center gap-2'>
                                        <span>Remise</span>
                                        <Image src={"/Icons_table.svg"} width={10} height={10} alt='icons'
                                        ></Image>
                                    </div>
                                </TableColumn>
                                <TableColumn>
                                    <div className='flex items-center gap-2'>
                                        <span>Total</span>
                                        <Image src={"/Icons_table.svg"} width={10} height={10} alt='icons'
                                        ></Image>
                                    </div>
                                </TableColumn>

                            </TableHeader>
                            <TableBody>
                                <TableRow key="1">
                                    <TableCell>
                                        <Image src={"/Retour_Icons.svg"} alt="Ferme" width={20} height={20}></Image>
                                    </TableCell>
                                    <TableCell>
                                        <div className=''>
                                            <div className='text-[#787878]'>
                                                #454654654
                                            </div>
                                            <div className='ml-[5%] pt-2'>
                                                <Image src={"/Vente.svg"} alt="Ferme" width={80} height={90}></Image>
                                            </div>
                                            <div className='ml-[29%] bt-3 w-[25px] h-[14px] rounded-[60px] bg-[#D9A528]'></div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <span className='text-[#787878]'>20 g</span></TableCell>
                                    <TableCell>
                                        <span className='text-[#787878]'>512 Dhs</span></TableCell>
                                    <TableCell>
                                        <p>
                                            <h4 className='text-[#D9A528] font-[12px] font-bold'>
                                                0%
                                            </h4>
                                        </p>
                                        <div className='flex items-center'>
                                            <Image src="/Cercle.svg" width={16} height={10} alt='' />
                                            <Image src="/Line 36.svg" width={90} height={2} className='bg-[#E9EFF4]' />
                                        </div>
                                    </TableCell>
                                    <TableCell> 1 512 Dhs </TableCell>
                                </TableRow>
                                <TableRow key="1">
                                    <TableCell>
                                        <Image src={"/Retour_Icons.svg"} alt="Ferme" width={20} height={20}></Image>
                                    </TableCell>
                                    <TableCell>
                                        <div className=''>
                                            <div>
                                                #454654654
                                            </div>
                                            <div className='ml-[5%] pt-2'>
                                                <Image src={"/Vente.svg"} alt="Ferme" width={80} height={90}></Image>
                                            </div>
                                            <div className='ml-[25%] bt-3 w-[25px] h-[14px] rounded-[60px] bg-[#D9A528]'></div>
                                        </div>
                                    </TableCell>
                                    <TableCell>20 g</TableCell>
                                    <TableCell>512 Dhs</TableCell>
                                    <TableCell> {"size"}</TableCell>
                                    <TableCell> 1 512 Dhs </TableCell>
                                </TableRow>
                                <TableRow key="1">
                                    <TableCell>
                                        <Image src={"/Retour_Icons.svg"} alt="Ferme" width={20} height={20}></Image>
                                    </TableCell>
                                    <TableCell>
                                        <div className=''>
                                            <div>
                                                #454654654
                                            </div>
                                            <div className='ml-[5%] pt-2'>
                                                <Image src={"/Vente.svg"} alt="Ferme" width={80} height={90}></Image>
                                            </div>
                                            <div className='ml-[25%] bt-3 w-[25px] h-[14px] rounded-[60px] bg-[#D9A528]'></div>
                                        </div>
                                    </TableCell>
                                    <TableCell>20 g</TableCell>
                                    <TableCell>512 Dhs</TableCell>
                                    <TableCell>

                                    </TableCell>
                                    <TableCell> 1 512 Dhs </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>

            </div>
            <div className='pt-4 flex justify-end gap-4 pr-4'>
                <button className="bg-[#05CD99] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Générateur de facture
                </button>
                <button className="bg-[#D9A528] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Sauvegarder
                </button>
            </div>
        </div>
    )
}

export default Details_Articles
