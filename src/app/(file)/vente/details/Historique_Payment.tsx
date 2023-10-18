"use client"
import React from "react";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react";
import Image from "next/image";
export default function Historique_Payment() {
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
                                <h3 className="rtext-[#787878]">CACHE</h3>
                                <h6 className="text-[#C1C4C7] text-xs">Sep 15, 2023</h6>
                            </TableCell>
                            <TableCell>CEO</TableCell>
                            <TableCell>
                                {/* update Icons     */}
                                <div className="flex gap-4">
                                    <Image src={"/Update.svg"} alt="Updat Icons" width={18} height={18}></Image>
                                    <Image src={"/Delete.svg"} alt="Updat Icons" width={18} height={18}></Image>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow key="4">
                            <TableCell>William Howard</TableCell>
                            <TableCell>Community Manager</TableCell>
                            <TableCell>
                                <div className="flex gap-4">
                                    <Image src={"/Update.svg"} alt="Updat Icons" width={18} height={18}></Image>
                                    <Image src={"/Delete.svg"} alt="Updat Icons" width={18} height={18}></Image>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow key="4">
                            <TableCell>William Howard</TableCell>
                            <TableCell>Community Manager</TableCell>
                            <TableCell>
                                <div className="flex gap-4">
                                    <Image src={"/Update.svg"} alt="Updat Icons" width={18} height={18}></Image>
                                    <Image src={"/Delete.svg"} alt="Updat Icons" width={18} height={18}></Image>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow key="4">
                            <TableCell>William Howard</TableCell>
                            <TableCell>Community Manager</TableCell>
                            <TableCell>
                                <div className="flex gap-4">
                                    <Image src={"/Update.svg"} alt="Updat Icons" width={18} height={18}></Image>
                                    <Image src={"/Delete.svg"} alt="Updat Icons" width={18} height={18}></Image>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow key="4">
                            <TableCell>William Howard</TableCell>
                            <TableCell>Community Manager</TableCell>
                            <TableCell>
                                <div className="flex gap-4">
                                    <Image src={"/Update.svg"} alt="Updat Icons" width={18} height={18}></Image>
                                    <Image src={"/Delete.svg"} alt="Updat Icons" width={18} height={18}></Image>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div>
                    <button className="flex gap-4 ml-4 items-center rounded-full bg-[#F9FCFF] pl-4 pr-6 mt-4">
                        <span className="text-[#D9A528] text-3xl ">+</span>
                        <span className="text-[#D9A528]">Ajouter une transaction</span>
                    </button>
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
