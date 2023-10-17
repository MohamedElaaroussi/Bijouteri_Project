"use client"
import React from "react";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react";
export default function Historique_Payment() {
    return (
        <>
            <div className="bg-[white] rounded-[17px] h-auto w-[22rem] mt-5">
                <div className="text-[#96B0C4] pl-[1.2rem] pt-3 pb-3">Historique de paiement</div>
                <Table className="pl-4 pr-4 overflow-auto h-[14rem]" removeWrapper aria-label="Example static collection table">
                    <TableHeader >
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
                            <TableCell>{' '}</TableCell>  
                        </TableRow>
                        <TableRow key="4">
                            <TableCell>William Howard</TableCell>
                            <TableCell>Community Manager</TableCell>
                            <TableCell>{" "}azertyu</TableCell>
                        </TableRow>
                        <TableRow key="4">
                            <TableCell>William Howard</TableCell>
                            <TableCell>Community Manager</TableCell>
                            <TableCell>{" "}azertyu</TableCell>
                        </TableRow>
                        <TableRow key="4">
                            <TableCell>William Howard</TableCell>
                            <TableCell>Community Manager</TableCell>
                            <TableCell>{" "}azertyu</TableCell>
                        </TableRow>
                        <TableRow key="4">
                            <TableCell>William Howard</TableCell>
                            <TableCell>Community Manager</TableCell>
                            <TableCell>{" "}azertyu</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                
            </div>
        </>
    );
}
