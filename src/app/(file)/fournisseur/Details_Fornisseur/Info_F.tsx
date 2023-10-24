"use Client"

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

const Info_F = () => {
    const Info = [
        { ID: 123456 , Nbr_Article: 2 , Etat: "Terminée", Date_Vente: "2023-10-13", Poid_Or_Total: 54, Total: 2550 },
        { ID: 6543 , Nbr_Article: 2 , Etat: "Annulé", Date_Vente: "2023-10-13", Poid_Or_Total: 54, Total: 2550 },
        { ID: 54321 , Nbr_Article: 2 , Etat: "En attente", Date_Vente: "2023-10-13", Poid_Or_Total: 54, Total: 2550 },
        { ID: 12345 , Nbr_Article: 2 , Etat: "En attente", Date_Vente: "Oct 25,2023", Poid_Or_Total: 54, Total: 2550 },
        { ID: 12345 , Nbr_Article: 2 , Etat: "En attente", Date_Vente: "2023-10-13", Poid_Or_Total: 54, Total: 2550 },
        { ID: 12345 , Nbr_Article: 2 , Etat: "En attente", Date_Vente: "2023-10-13", Poid_Or_Total: 54, Total: 2550 },
        { ID: 12345 , Nbr_Article: 2 , Etat: "En attente", Date_Vente: "2023-10-13", Poid_Or_Total: 54, Total: 2550 },
        { ID: 12345 , Nbr_Article: 2 , Etat: "En attente", Date_Vente: "2023-10-13", Poid_Or_Total: 54, Total: 2550 },
        { ID: 12345 , Nbr_Article: 2 , Etat: "En attente", Date_Vente: "2023-10-13", Poid_Or_Total: 54, Total: 2550 },
        { ID: 12345 , Nbr_Article: 2 , Etat: "En attente", Date_Vente: "2023-10-13", Poid_Or_Total: 54, Total: 2550 },
        { ID: 12345 , Nbr_Article: 2 , Etat: "En attente", Date_Vente: "2023-10-13", Poid_Or_Total: 54, Total: 2550 },
        { ID: 12345 , Nbr_Article: 2 , Etat: "En attente", Date_Vente: "2023-10-13", Poid_Or_Total: 54, Total: 2550 },
    ]
    return (
        <div>
            <div className='w-[47.5rem]  pt-[4.5rem] pr-6 mr-2 overflow-hidden'>
            <Table
                aria-label="Example static collection table"
                style={{
                    height: "10rem",
                    maxHeight:"20rem",
                    minWidth: "90%",
                    // width:"40rem"
                }}
                selectionMode="single"
            >
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    
                    <TableColumn>Etat</TableColumn>
                    <TableColumn>
                        Date vente
                    </TableColumn>
                    <TableColumn>Poids or total</TableColumn>
                    <TableColumn>Total </TableColumn>
                    <TableColumn>{" "}</TableColumn>
                </TableHeader>
                <TableBody>
                    {
                        Info && Info.slice(0,5).map((item, i) => {
                            return (
                                <TableRow key={i}>
                                    <TableCell>
                                        <Link href={`/vente/${item.ID}`} >

                                            <div className='text-[#D9A528]'>
                                                {item.ID}
                                            </div>
                                            <div className='flex gap-1'>
                                                <span>{item?.Nbr_Article} {' '}</span>
                                                   <span> articles</span> 
                                            </div>

                                        </Link>
                                    </TableCell>
                                    
                                    <TableCell>
                                        <Link href={`/vente/${item.ID}`} >
                                            <div className='${getColorClass(item.etat)} w-[5.8rem]'

                                            >
                                                {item.Etat == 'Terminée' ?
                                                    <div className="bg-[#05CD99] text-white rounded-full pl-4">{item.Etat}</div>
                                                    :
                                                    item.Etat == 'Annulé' ?
                                                        <div className="bg-[#D62832] text-white rounded-full pl-[1.5rem]">{item.Etat}</div>
                                                        :
                                                        item.Etat == 'En attente' ?
                                                            <div className="bg-[#FFA94D] text-white rounded-full pl-3">{item.Etat}</div>
                                                            : ('Choix invalid')
                                                }
                                            </div>
                                        </Link>
                                    </TableCell>

                                    <TableCell>
                                        <Link href={`/vente/${item.ID}`} >
                                            <div className='flex items-center textè-[#787878] text-4'>
                                                <span>{item?.Date_Vente}</span>
                                                <span></span>
                                                
                                            </div>
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Link href={`/vente/${item.ID}`} >
                                            <div className='flex justify-center'>{item?.Poid_Or_Total} g </div>
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Link href={`/vente/${item.ID}`} >
                                            <div className='flex justify-center'>{item?.Total} Dhs </div>
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <span className="flex gap-4">
                                            {/* {update Icons } */}
                                            <Image src={"/Update.svg"} width={20} height={20} alt='update' ></Image>
                                            {/* {Delate Icons } */}
                                            <Image src={"/delete.svg"} width={20} height={20} alt='update' ></Image>
                                        </span>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
            <Pagination/>
        </div>
        </div>
    )
}

export default Info_F
