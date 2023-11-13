"use client"
import React, { useState } from 'react';
import { Table, Pagination, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from "@nextui-org/react";
import Image from 'next/image';
import Select from "react-select";
import { numberPerPage } from "@/utils/seed";

const Notification = () => {
    const Info = [
        { id: 1, tache1: 45890, tache2: 45890, date: "Le Oct 4, 2023 à 01:00" },
        { id: 1, tache1: 890, tache2: 45890, date: "Le Oct 4, 2023 à 01:00" },
        { id: 1, tache1: 45890, tache2: 45890, date: "Le Oct 4, 2023 à 01:00" },
        { id: 1, tache1: 890, tache2: 45890, date: "Le Oct 4, 2023 à 01:00" },
        { id: 1, tache1: 45890, tache2: 45890, date: "Le Oct 4, 2023 à 01:00" },
        { id: 1, tache1: 890, tache2: 45890, date: "Le Oct 4, 2023 à 01:00" },
        { id: 1, tache1: 890, tache2: 45890, date: "Le Oct 4, 2023 à 01:00" },
        { id: 1, tache1: 450, tache2: 45890, date: "Le Oct 4, 2023 à 01:00" },
        { id: 1, tache1: 89440, tache2: 45890, date: "Le Oct 4, 2023 à 01:00" },
        { id: 1, tache1: 490, tache2: 45890, date: "Le Oct 4, 2023 à 01:00" },
        { id: 1, tache1: 45890, tache2: 45890, date: "Le Oct 4, 2023 à 01:00" },
        { id: 1, tache1: 490, tache2: 45890, date: "Le Oct 4, 2023 à 01:00" },
        { id: 1, tache1: 4890, tache2: 45890, date: "Le Oct 4, 2023 à 01:00" },
        { id: 1, tache1: 4890, tache2: 45890, date: "Le Oct 4, 2023 à 01:00" },
        { id: 1, tache1: 490, tache2: 45890, date: "Le Oct 4, 2023 à 01:00" },
        { id: 1, tache1: 45890, tache2: 45890, date: "Le Oct 4, 2023 à 01:00" },
        { id: 1, tache1: 45890, tache2: 45890, date: "Le Oct 4, 2023 à 01:00" },
        { id: 1, tache1: 45890, tache2: 45890, date: "Le Oct 4, 2023 à 01:00" },
        { id: 1, tache1: 45890, tache2: 45890, date: "Le Oct 4, 2023 à 01:00" },
    ];

    const [page, setPage] = useState(1);
    const rowsPerPage = 6;
    const pages = Math.ceil(Info.length / rowsPerPage);

    const itemsPerPage = 7;

    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = parseInt(e.target.value, 10);
        setPage(1);
    };

    return (
        <div>
            <div className='ml-1 mt-14'>
                <p className='text-[#D9A528] text-[16px] font-bold'>Géneral</p>
                <Image src={'/Line_20.svg'} className='pt-2 pb-4' width={58} height={20} alt='Ligne' />
            </div>
            <Table
                aria-label="Example table with client-side pagination"
                bottomContent={
                    <div className="flex justify-between">
                        <div className="text-sm text-[var(--textColor)] w-[30vh] ml-[28px]">
                            Résultats: {page} - {rowsPerPage} sur {pages}
                        </div>
                        <div className="flex w-full justify-end mr-[30px]">
                            <div>
                                <Select
                                    menuPlacement="top"
                                    defaultValue={numberPerPage.find(option => option.value === itemsPerPage)}
                                    className=""
                                    options={numberPerPage}
                                ></Select>
                            </div>
                            <Pagination
                                isCompact
                                showControls
                                showShadow
                                color="warning"
                                page={page}
                                total={pages}
                                onChange={(page) => setPage(page)}
                            />
                        </div>
                    </div>
                }
                classNames={{
                    wrapper: "min-h-[222px]",
                }}
            >
                <TableHeader className="bg-white">
                    <TableColumn className="bg-white" key={"Status"}>
                        <div className=''>
                            <div className='mt-4 rounded-[15px] bg-white pt-5'>
                                <div className='pl-4'>
                                    <p className='text-[#787878] font-[600] text-[16px]'>Listes des notification</p>
                                </div>
                            </div>
                        </div>
                    </TableColumn>
                </TableHeader>
                <TableBody items={Info.slice(0, itemsPerPage)}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => (
                                <TableCell>
                                    {columnKey === "Status" ? (
                                        <div key={item.id} className='flex justify-between pl-6 mt-4 text-[14px] pb-5'>
                                            <h3>
                                                <span className='border border-[#D9A528] border-l-4 mr-2 mb-1 ml-[-10px]'></span>
                                                La tâche n°
                                                <span className='text-[#96B0C4]'>{item.tache1}</span>
                                                a été fusionnée avec la tâche n°
                                                <span className='text-[#96B0C4]'>{item.tache2}</span>
                                            </h3>
                                            <h4 className='mr-6 text-[#C1C4C7] text-[12px]'>
                                                {item.date}
                                            </h4>
                                        </div>
                                    ) : (
                                        getKeyValue(item, columnKey)
                                    )}
                                </TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default Notification;
