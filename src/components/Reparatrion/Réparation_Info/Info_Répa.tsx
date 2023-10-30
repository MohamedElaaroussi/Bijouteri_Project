import React from 'react';
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
import Pagination from '../Pagination_Reaparateur/Pagination';

const Info_Répa = () => {
    const Reparateur=[
        {id:1,color_status:"#FFA94D",Nom_Réparateur:"khalid ibn-walid",Téléphone:"0664-848-484",Date_création:"Oct 24, 2023",Article:4,Prix:240},
        {id:2,color_status:"#05CD99",Nom_Réparateur:"khalid ibn-walid",Téléphone:"0664-848-484",Date_création:"Oct 24, 2023",Article:4,Prix:240},
        {id:3,color_status:"#FFA94D",Nom_Réparateur:"khalid ibn-walid",Téléphone:"0664-848-484",Date_création:"Oct 24, 2023",Article:4,Prix:240},
        {id:4,color_status:"#FFA94D",Nom_Réparateur:"khalid ibn-walid",Téléphone:"0664-848-484",Date_création:"Oct 24, 2023",Article:4,Prix:240},
        {id:5,color_status:"#05CD99",Nom_Réparateur:"khalid ibn-walid",Téléphone:"0664-848-484",Date_création:"Oct 24, 2023",Article:4,Prix:240},
        {id:6,color_status:"#05CD99",Nom_Réparateur:"khalid ibn-walid",Téléphone:"0664-848-484",Date_création:"Oct 24, 2023",Article:4,Prix:240},
        {id:7,color_status:"#FFA94D",Nom_Réparateur:"khalid ibn-walid",Téléphone:"0664-848-484",Date_création:"Oct 24, 2023",Article:4,Prix:240},
        {id:8,color_status:"#FFA94D",Nom_Réparateur:"khalid ibn-walid",Téléphone:"0664-848-484",Date_création:"Oct 24, 2023",Article:4,Prix:240},
        {id:9,color_status:"#FFA94D",Nom_Réparateur:"khalid ibn-walid",Téléphone:"0664-848-484",Date_création:"Oct 24, 2023",Article:4,Prix:240},
    ]
    return (
        <div>
            <div className="mt-6 overflow-hidden">
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
                                <span>Réparateur</span>
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
                                <span>Prix</span>
                                <Image src={"Icons_table.svg"} alt='' width={10} height={10} ></Image>
                            </div>
                        </TableColumn>
                        <TableColumn>{""}</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {Reparateur.slice(0,8).map((item, ) => {
                            return (
                                <TableRow key={item.id}>
                                    <TableCell>
                                        <div
                                            className={`ml-4 h-3 w-3 rounded-full`}
                                            style={{ background: item.color_status,alignItems:'center' }}
                                        ></div>
                                    </TableCell>
                                    <TableCell>
                                        <Link style={{alignItems:'center'}}
                                         href={`/reparation/${item.id || ''}`}>
                                            {item.Nom_Réparateur}
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Link href={`/reparation/${item.id || ''}`}>
                                            {item.Téléphone}
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Link 
                                         href={`/reparation/${item.id || ''}`}>
                                            {item.Date_création}
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Link href={`/reparation/${item.id || ''}`}>
                                           <span className='items-center'>{item.Article}</span> 
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Link href={`/reparation/${item.id || ''}`}>
                                            <div className='flex gap-1'>
                                                <span>{item.Prix}</span>
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

export default Info_Répa
