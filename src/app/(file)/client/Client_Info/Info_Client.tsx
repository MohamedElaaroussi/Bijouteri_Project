import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue } from "@nextui-org/react";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Spinner } from "@nextui-org/react";
import { format } from "date-fns"; // Importez la fonction format de date-fns
import Image from "next/image";
import Delete_Client from "@/components/ui/modal/Modal_Client/Delete_Client";




function Info_Client() {


    //  Start Api pour getter les Article
    const [Clients, setClients] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setloading] = useState(true);

    const fetchUser = async () => {
        const URL = process.env.NEXT_PUBLIC_VERCEL_URL ?? "http://localhost:3000/";
        try {
            const response = await axios.get(`api/client?page=${currentPage}&limit=10`);
            setClients(response.data.result);
            setloading(false);
            console.log("---------------");
            console.log(response.data.result.date);
            console.log("---------------");
        } catch (error) {
            console.error("Erreur lors de la récupération des données de l'utilisateur", error);
        }
    };

    useEffect(() => {
        fetchUser(); // Charger les données initiales

        const intervalId = setInterval(fetchUser, 3000); // Actualiser toutes les 3 secondes

        return () => {
            clearInterval(intervalId); // Nettoyer l'intervalle lorsque le composant est démonté
        };
    }, [currentPage, fetchUser]);


    //  End Api pour getter les Clients


    const [page, setPage] = React.useState(1);
    const rowsPerPage = 4;

    const pages = Math.ceil(Clients.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return Clients.slice(start, end);
    }, [page, Clients]);

    const getColorClass = (etat: any) => {
        // Logique pour déterminer la classe CSS en fonction de la valeur d'état (exemple)
        if (etat === "Terminée") {
            return 'bg-[#05CD99] rounded-full pl-3 text-white';
        } else if (etat === 'Annulé') {
            return 'bg-[#D62832] rounded-full pl-3 text-white';
        } else if (etat === 'En attente') {
            return 'bg-[#FFA94D] rounded-full pl-3 text-white';
        } else {
            return ''; // Valeur par défaut ou vide si aucun état correspondant
        }
    }

    if (loading) {
        return (
            <div className="text-center mt-[8rem]">
                <Spinner label="Chargement des Clients" color="warning" />
            </div>
        )
    }
    return (

        <div className="mb-[42vh] mt-7">
            <Table
                aria-label="Example table with client side pagination"
                bottomContent={
                    <div className="flex justify-between">
                        <div className="text-sm text-[var(--textColor)] w-[30vh]">
                            Résultats: {page} - {rowsPerPage} sur {pages}
                        </div>
                        <div className="flex w-full justify-end">
                            <Pagination
                                isCompact
                                showControls
                                showShadow
                                color="secondary"
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

                <TableHeader>
                    <TableColumn key={"status"}>Status</TableColumn>
                    <TableColumn key={"nom"}>
                        <div className='flex gap-3'>
                            <span>Nom</span>
                            <Image src={"Icons_table.svg"} alt='' width={10} height={10} ></Image>
                        </div>
                    </TableColumn>
                    <TableColumn key={"phone"}>
                        <div className='flex gap-3'>
                            <span>Téléphone</span>
                            <Image src={"Icons_table.svg"} alt='' width={10} height={10} ></Image>
                        </div>
                    </TableColumn>
                    <TableColumn key={"Date_creation"}>
                        <div className='flex gap-3'>
                            <span>Date de création</span>
                            <Image src={"Icons_table.svg"} alt='' width={10} height={10} ></Image>
                        </div>
                    </TableColumn>
                    <TableColumn key={"achat"}>
                        <div className='flex gap-3'>
                            <span>Achats</span>
                            <Image src={"Icons_table.svg"} alt='' width={10} height={10} ></Image>
                        </div>
                    </TableColumn>
                    <TableColumn key={"total"}>
                        <div className='flex gap-3'>
                            <span>Total</span>
                            <Image src={"Icons_table.svg"} alt='' width={10} height={10} ></Image>
                        </div>
                    </TableColumn>
                    <TableColumn key={"action"}>{""}</TableColumn>
                </TableHeader>

                <TableBody items={items}>

                    {(item) => (
                        <TableRow key={item._id} as={Link} href={`/client/${item._id}`}>
                            {(columnKey) => (
                                <TableCell className="w-[5rem] pb-8">
                                    {
                                        columnKey === "action" ? (
                                            <div className="flex  justify-end  gap-4">
                                                < Image
                                                    src="/Update.svg"
                                                    alt="Update Icon"
                                                    width={20}
                                                    height={20}
                                                    className="bg-[white] w-30"
                                                />
                                                <Delete_Client onDelete={() => { }} ClientId={item._id} />
                                            </div>
                                        ) : columnKey === "status" ? (
                                            <div
                                                className={`ml-4 h-3 w-3 rounded-full`}
                                                style={{ background: "green" }}
                                            ></div>
                                        )
                                            : columnKey === "nom" ? (
                                                <div>
                                                    {item.username}
                                                </div>
                                            )
                                                : columnKey === "achat" ? (
                                                    <div>
                                                        {/* {item.buyList} */}
                                                        {"ne trouve pas api"}
                                                    </div>
                                                )
                                                    : columnKey === "Date_creation" ? (
                                                        <div className="w-[5rem]">{format(new Date(item.createdAt), "yyyy-MM-dd")}</div>)
                                                        : columnKey === "Etat" ? (
                                                            <div>
                                                                <div className={getColorClass(item.status)}>
                                                                    <div >{item.status}</div>
                                                                </div>
                                                            </div>
                                                        )

                                                            : columnKey === "total" ? (item.total)
                                                            : columnKey === "phone" ? (item.phone)
                                                                : (
                                                                    getKeyValue(item, columnKey)
                                                                )
                                    }
                                </TableCell>
                            )}
                        </TableRow>
                    )}

                </TableBody>
            </Table>
        </div>
    );



}

export default Info_Client