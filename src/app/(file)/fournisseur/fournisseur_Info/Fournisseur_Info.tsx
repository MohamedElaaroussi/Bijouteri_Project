"use client"
import React from 'react'
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@nextui-org/react";
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '../Pagination_fournisseur/Pagination';

const Client = [
    { id: 1, color_status: "#05CD99", Nom: "khalid ibn walid",Téléphone:"0664-848-484", Date_Création: "20/10/2023", Article: 100, Total: 5475 },
    { id: 2, color_status: "#FFA94D", Nom: "khalid ibn walid",Téléphone:"0664-848-484", Date_Création: "20/10/2023", Article: 100, Total: 5475 },
    { id: 3, color_status: "#FFA94D", Nom: "khalid ibn walid",Téléphone:"0664-848-484", Date_Création: "20/10/2023", Article: 100, Total: 5475 },
    { id: 4, color_status: "#05CD99", Nom: "khalid ibn walid",Téléphone:"0664-848-484", Date_Création: "20/10/2023", Article: 100, Total: 5475 },
    { id: 5, color_status: "#05CD99", Nom: "khalid ibn walid",Téléphone:"0664-848-484", Date_Création: "20/10/2023", Article: 100, Total: 5475 },
    { id: 6, color_status: "#FFA94D", Nom: "khalid ibn walid",Téléphone:"0664-848-484", Date_Création: "20/10/2023", Article: 100, Total: 5475 },
    { id: 6, color_status: "#FFA94D", Nom: "khalid ibn walid",Téléphone:"0664-848-484", Date_Création: "20/10/2023", Article: 100, Total: 5475 },
    { id: 6, color_status: "#FFA94D", Nom: "khalid ibn walid",Téléphone:"0664-848-484", Date_Création: "20/10/2023", Article: 100, Total: 5475 },
    { id: 6, color_status: "#FFA94D", Nom: "khalid ibn walid",Téléphone:"0664-848-484", Date_Création: "20/10/2023", Article: 100, Total: 5475 },
    { id: 6, color_status: "#FFA94D", Nom: "khalid ibn walid",Téléphone:"0664-848-484", Date_Création: "20/10/2023", Article: 100, Total: 5475 },
    { id: 6, color_status: "#D62832", Nom: "khalid ibn walid",Téléphone:"0664-848-484", Date_Création: "20/10/2023", Article: 100, Total: 5475 },
    { id: 6, color_status: "#FFA94D", Nom: "khalid ibn walid",Téléphone:"0664-848-484", Date_Création: "20/10/2023", Article: 100, Total: 5475 },]
export const Fournisseur_Info = () => {
    return (
        <div>
            <div className="mt-[1.6rem] overflow-hidden">
                <Table
                    aria-label="Example static collection table"
                    style={{
                        height: "auto",
                        minWidth: "100%",
                    }}
                    selectionMode="single"
                >
                    <TableHeader>
                        <TableColumn>Status</TableColumn>
                        <TableColumn>
                            <div className='flex gap-3'>
                                <span>Nom</span>
                                <Image src={"Icons_table.svg"} alt='' width={10} height={10} ></Image>
                            </div>
                        </TableColumn>
                        <TableColumn>
                        <div className='flex gap-3'>
                           <span>Téléphone</span> 
                           <Image src={"Icons_table.svg"} alt='' width={10} height={10} ></Image>
                           </div>
                        </TableColumn>
                        <TableColumn>
                            <div className='flex gap-3'>
                                <span>Date de création</span>
                                <Image src={"Icons_table.svg"} alt='' width={10} height={10} ></Image>
                            </div>
                        </TableColumn>
                        <TableColumn>
                            <div className='flex gap-3'>
                                <span>Article</span>
                                <Image src={"Icons_table.svg"} alt='' width={10} height={10} ></Image>
                            </div>
                        </TableColumn>
                        <TableColumn>
                            <div className='flex gap-3'>
                                <span>Total</span>
                                <Image src={"Icons_table.svg"} alt='' width={10} height={10} ></Image>
                            </div>
                        </TableColumn>
                        <TableColumn>{""}</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {Client.slice(0, 10).map((item, i) => {
                            return (
                                <TableRow key={i}>
                                    <TableCell>
                                        <div
                                            className={`ml-4 h-3 w-3 rounded-full`}
                                            style={{ background: item.color_status,alignItems:'center' }}
                                        ></div>
                                    </TableCell>
                                    <TableCell>
                                        <Link style={{alignItems:'center'}}
                                         href={`/fournisseur/${item.id || ''}`}>
                                            {item.Nom}
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Link href={`/fournisseur/${item.id || ''}`}>
                                            {item.Téléphone}
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Link 
                                         href={`/fournisseur/${item.id || ''}`}>
                                            {item.Date_Création}
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Link href={`/fournisseur/${item.id || ''}`}>
                                           <span className='items-center'>{item.Article}</span> 
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Link href={`/fournisseur/${item.id || ''}`}>
                                            <div className='flex gap-1'>
                                                <span>{item.Total}</span>
                                                <span className="text-[10px] pb-2">Dhs</span>
                                            </div>
                                        </Link>
                                    </TableCell>
                                    <TableCell>

                                        <span className="flex gap-4">
                                            {/* {update Icons } */}
                                            <Image
                                                src={"/Update.svg"} width={17} height={17} alt={"update"}></Image>

                                            {/* {Delate Icons } */}
                                            <Image src={"/delete.svg"} width={17} height={17} alt={"update"}></Image>
                                        </span>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
            <Pagination />
        </div>
    )
}


