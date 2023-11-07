import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue, Spinner } from "@nextui-org/react";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image"; // Importez le composant Image de Next.js
import Link from "next/link";
import { format } from "date-fns"; // Importez la fonction format de date-fns
import Update_User from "@/components/ui/modal/Modal_User/Update_User";
import Delete_user from "@/components/ui/modal/Modal_User/Delete_user";


interface Details_InfoProps {
    idClient: string; // Remplacez YourDataType par le type de données attendu
    status: string;
    DateC: any;
    total: number
}

const Details_Info: React.FC<Details_InfoProps> = ({ idClient, status, DateC, total }) => {



    //  Start Api pour getter les users
    const [users, setUser] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setloading] = useState(true);

    const fetchUser = async () => {
        const URL = process.env.NEXT_PUBLIC_VERCEL_URL ?? "http://localhost:3000/";
        try {
            const response = await axios.get(`api/user?page=${currentPage}&limit=10`);
            const userData = Array.isArray(response.data.result)
                ? response.data.result
                : [response.data.result];
            setUser(userData);
            setloading(false);
            console.log("---------------");
            console.log(userData);
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
    }, [fetchUser, currentPage]);

    //  End Api pour getter les users

    const [page, setPage] = React.useState(1);
    const rowsPerPage = 4;

    const pages = Math.ceil(users.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return users.slice(start, end);
    }, [page, users]);

    if (loading) {
        return (
            <div className="mt-[10rem] ml-[15rem]">
                <Spinner label="Details Client en cours de chargement ..." color="warning" />
            </div>
        )
    }
    return (
        <div className='w-[47.5rem]  pt-[4.5rem] pr-6 mr-2 overflow-hidden'>
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
                                // @ts-ignore
                                color="white"
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
                    <TableColumn key={"ID"}>ID</TableColumn>
                    <TableColumn key={"image"}>Image Article</TableColumn>
                    <TableColumn key={"Etat"}>Etat</TableColumn>
                    <TableColumn key={"Date"}> Date vente</TableColumn>
                    <TableColumn key={"Poid"}>Poids or total</TableColumn>
                    <TableColumn key={"Tota"}>Total à payer/Gout</TableColumn>

                </TableHeader>
                <TableBody items={items}>


                    <TableRow key={idClient} as={Link} href={`/vente/${idClient}`}>

                        <TableCell>
                            <div className="flex flex-col ">
                                <span className="flex justify-center text-[10px] text-[#D9A528] font-bold">{idClient}</span>
                                <span className="text-[12px] text-[#787878] font-somibold ml-1">1 articles</span>
                            </div></TableCell>
                        <TableCell>

                            <div className="relative">
                                <Image
                                    alt={'image'}
                                    src={"/article.png"}
                                    width={70}
                                    height={150}  // Ajustez la hauteur pour la première image
                                    className="m-2"
                                />
                                <div className=" absolute rounded-full bg-[red] w-6 h-3 mt-[-5.2rem] ml-[30%]"></div>
                                <Image
                                    alt="Code Barre"
                                    src={"/code_barre2.svg"}
                                    width={50}
                                    height={40}
                                    className="absolute top-10 m-4"
                                />
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='${getColorClass(item.etat)} flex justify-center'

                            >
                                {status == 'Terminée' ?
                                    <div className="bg-[#05CD99] text-white rounded-full pl-2 pr-2">{status}</div>
                                    :
                                    status == 'Annulé' ?
                                        <div className="bg-[#D62832] text-white rounded-full pl-2 pr-2">{status}</div>
                                        :
                                        status == 'En attente' ?
                                            <div className="bg-[#FFA94D] text-white rounded-full pl-2 pr-2">{status}</div>
                                            : ('Choix invalid')
                                }
                            </div></TableCell>
                        <TableCell>{format(new Date(DateC), "yyyy-MM-dd")}</TableCell>
                        <TableCell><div className="flex justify-center"> {total} g
                        </div> </TableCell>
                        <TableCell>
                            <div className="flex justify-center">{total} Dhs</div>
                        </TableCell>
                    </TableRow>


                </TableBody>
            </Table>
        </div>
    );
}
export default Details_Info