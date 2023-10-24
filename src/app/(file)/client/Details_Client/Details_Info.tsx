'use client'
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
import Pagination from '../Pagination_Client/Pagination';

const Details_Info = () => {
    const Info = [
        { ID: 123456 , Nbr_Article: 2 , Images_Articles: "/Vente.svg", Etat: "Terminée", CodeBarre_Image: "/Code_Barre.svg", Date_Vente: "2023-10-13", Poid_Or_Total: 54, Total_à_Payer: 2550 },
        { ID: 2 , Nbr_Article: 2 , Images_Articles: "/Vente.svg", Etat: "Annulé", CodeBarre_Image: "/Code_Barre.svg", Date_Vente: "2023-10-13", Poid_Or_Total: 54, Total_à_Payer: 2550 },
        { ID: 3 , Nbr_Article: 2 , Images_Articles: "/Vente.svg", Etat: "Terminée", CodeBarre_Image: "/Code_Barre.svg", Date_Vente: "2023-10-13", Poid_Or_Total: 54, Total_à_Payer: 2550 },
        { ID: 4 , Nbr_Article: 2 , Images_Articles: "/Vente.svg", Etat: "En attente", CodeBarre_Image: "/Code_Barre.svg", Date_Vente: "Oct 25,2023", Poid_Or_Total: 54, Total_à_Payer: 2550 },
        { ID: 4 , Nbr_Article: 2 , Images_Articles: "/Vente.svg", Etat: "En attente", CodeBarre_Image: "/Code_Barre.svg", Date_Vente: "2023-10-13", Poid_Or_Total: 54, Total_à_Payer: 2550 },
        { ID: 4 , Nbr_Article: 2 , Images_Articles: "/Vente.svg", Etat: "En attente", CodeBarre_Image: "/Code_Barre.svg", Date_Vente: "2023-10-13", Poid_Or_Total: 54, Total_à_Payer: 2550 },
        { ID: 4 , Nbr_Article: 2 , Images_Articles: "/Vente.svg", Etat: "En attente", CodeBarre_Image: "/Code_Barre.svg", Date_Vente: "2023-10-13", Poid_Or_Total: 54, Total_à_Payer: 2550 },
        { ID: 4 , Nbr_Article: 2 , Images_Articles: "/Vente.svg", Etat: "En attente", CodeBarre_Image: "/Code_Barre.svg", Date_Vente: "2023-10-13", Poid_Or_Total: 54, Total_à_Payer: 2550 },
        { ID: 4 , Nbr_Article: 2 , Images_Articles: "/Vente.svg", Etat: "En attente", CodeBarre_Image: "/Code_Barre.svg", Date_Vente: "2023-10-13", Poid_Or_Total: 54, Total_à_Payer: 2550 },
        { ID: 4 , Nbr_Article: 2 , Images_Articles: "/Vente.svg", Etat: "En attente", CodeBarre_Image: "/Code_Barre.svg", Date_Vente: "2023-10-13", Poid_Or_Total: 54, Total_à_Payer: 2550 },
        { ID: 4 , Nbr_Article: 2 , Images_Articles: "/Vente.svg", Etat: "En attente", CodeBarre_Image: "/Code_Barre.svg", Date_Vente: "2023-10-13", Poid_Or_Total: 54, Total_à_Payer: 2550 },
        { ID: 4 , Nbr_Article: 2 , Images_Articles: "/Vente.svg", Etat: "En attente", CodeBarre_Image: "/Code_Barre.svg", Date_Vente: "2023-10-13", Poid_Or_Total: 54, Total_à_Payer: 2550 },
    ]

    return (
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
                    <TableColumn>Image Article</TableColumn>
                    <TableColumn>Etat</TableColumn>
                    <TableColumn>
                        Date vente
                    </TableColumn>
                    <TableColumn>Poids or total</TableColumn>
                    <TableColumn>Total à payer/Gout</TableColumn>
                    <TableColumn>{" "}</TableColumn>
                </TableHeader>
                <TableBody>
                    {
                        Info && Info.slice(0,3).map((item, i) => {
                            return (
                                <TableRow key={i}>
                                    <TableCell>
                                        <Link href={`/vente/${item.ID}`} >

                                            <div className='text-[#D9A528]'>
                                                {item.ID}
                                            </div>
                                            <div className='flex '>
                                                <span>{item?.Nbr_Article} {' '}</span><span>{" "}</span>
                                                   <span> articles</span> 
                                            </div>

                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Link href={`/vente/${item.ID}`} >
                                            <div>
                                                {/* {console.log(item.Images_Url.length)} */}
                                                {item.Images_Articles.length == 1 ?
                                                    <Image alt={'image'} src={item.Images_Articles} width={70} height={110} />
                                                    :
                                                    <div className='flex justify-center'>
                                                        <span className='pt-14'>
                                                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g clip-path="url(#clip0_58_11280)">
                                                                    <path d="M6.88037 0.0202637H8.0809C8.08794 0.0535248 8.11455 0.0476552 8.13764 0.0496118C8.50671 0.0797155 8.87297 0.137666 9.2333 0.222963C13.1464 1.12297 15.6848 5.12957 14.8368 9.06652C14.1665 12.1782 11.7154 14.4889 8.58804 14.9627C8.41938 14.9882 8.24447 14.9796 8.07934 15.041H6.8788C6.86706 15.0019 6.83302 15.0132 6.80641 15.0109C6.48126 14.9796 6.15825 14.929 5.8391 14.8594C2.86986 14.22 0.51731 11.6769 0.0790455 8.64156C0.0551757 8.47643 0.0645692 8.30503 -0.00195312 8.14655V6.88537C0.0371777 6.8748 0.0258272 6.84037 0.0297403 6.81415C0.0571319 6.62084 0.0790485 6.42676 0.111527 6.23462C0.647227 3.06816 3.21186 0.564575 6.38693 0.101267C6.55284 0.077006 6.72345 0.0875686 6.88037 0.0202637ZM7.50216 13.8675C10.9907 13.8612 13.83 11.0086 13.8198 7.52007C13.8096 4.03156 10.9774 1.19458 7.49589 1.1938C4.01443 1.19302 1.16845 4.04213 1.17119 7.53299C1.17393 11.0238 4.01952 13.8737 7.50216 13.8675Z" fill="#96B0C4" />
                                                                    <path d="M3.73535 7.66357C3.73535 7.06526 3.91692 6.6403 4.27144 6.294C4.91579 5.66164 5.5625 5.03137 6.21155 4.4032C6.46159 4.16137 6.81729 4.16372 7.04973 4.40085C7.28216 4.63798 7.27551 4.99798 7.02899 5.24099C6.40289 5.85769 5.77211 6.46891 5.14288 7.08248C4.8194 7.39814 4.81849 7.71509 5.14015 8.03336C5.76898 8.65397 6.40094 9.27146 7.02703 9.8952C7.3616 10.2282 7.23168 10.7643 6.79029 10.8891C6.69424 10.9205 6.59137 10.9245 6.49317 10.9007C6.39497 10.8769 6.30532 10.8263 6.23424 10.7545C5.55454 10.0893 4.87288 9.42406 4.20375 8.74671C3.91376 8.45959 3.74595 8.07152 3.73535 7.66357Z" fill="#96B0C4" />
                                                                    <path d="M8.73932 8.09262C8.03222 8.09262 7.32513 8.09458 6.61803 8.09262C6.37503 8.09262 6.19816 7.96779 6.09994 7.74984C6.05982 7.66057 6.04265 7.56269 6.05 7.4651C6.05735 7.36751 6.08898 7.2733 6.14203 7.19106C6.19507 7.10881 6.26784 7.04113 6.35371 6.99418C6.43957 6.94723 6.53582 6.92249 6.63369 6.92222C8.03848 6.92013 9.44302 6.92013 10.8473 6.92222C10.9247 6.92111 11.0015 6.93554 11.0732 6.96465C11.1449 6.99375 11.2101 7.03695 11.2648 7.09167C11.3195 7.1464 11.3627 7.21155 11.3918 7.28326C11.4209 7.35498 11.4354 7.43179 11.4343 7.50918C11.4343 7.84101 11.1815 8.09106 10.8332 8.09262C10.1359 8.09614 9.43858 8.09262 8.74127 8.09262H8.73932Z" fill="#96B0C4" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_58_11280">
                                                                        <rect width="15" height="15.0203" fill="white" transform="translate(0 0.0202637)" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </span>
                                                        <div>
                                                            <Image src={item.Images_Articles}
                                                                width={60} height={110}
                                                                alt="Image article" className=" m-2 "
                                                            />
                                                            <Image src={item.CodeBarre_Image}
                                                                width={60} height={50}
                                                                alt="Code Barre" className="w-16 h-auto m-2 pt-[-4] "
                                                            />
                                                        </div>

                                                        <span className='pt-14'>
                                                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g clip-path="url(#clip0_58_11284)">
                                                                    <path d="M8.11963 15.0203L6.9191 15.0203C6.91206 14.987 6.88545 14.9929 6.86236 14.9909C6.49329 14.9608 6.12703 14.9029 5.7667 14.8176C1.85362 13.9176 -0.684791 9.91096 0.163174 5.97401C0.833484 2.86233 3.28463 0.551655 6.41197 0.0777819C6.58062 0.0523464 6.75553 0.0609553 6.92067 -0.000479451L8.1212 -0.000479346C8.13294 0.0386509 8.16698 0.0273041 8.19359 0.029652C8.51874 0.0609221 8.84175 0.11149 9.1609 0.181088C12.1301 0.820485 14.4827 3.36359 14.921 6.39897C14.9448 6.5641 14.9354 6.73549 15.002 6.89397L15.002 8.15516C14.9628 8.16572 14.9742 8.20016 14.9703 8.22638C14.9429 8.41968 14.921 8.61377 14.8885 8.8059C14.3528 11.9724 11.7881 14.476 8.61307 14.9393C8.44716 14.9635 8.27655 14.953 8.11963 15.0203ZM7.49784 1.17306C4.00934 1.17932 1.17001 4.03195 1.18018 7.52046C1.19036 11.009 4.02264 13.8459 7.50411 13.8467C10.9856 13.8475 13.8316 10.9984 13.8288 7.50754C13.8261 4.01669 10.9805 1.1668 7.49784 1.17306Z" fill="#96B0C4" />
                                                                    <path d="M11.2646 7.37695C11.2646 7.97526 11.0831 8.40022 10.7286 8.74653C10.0842 9.37888 9.4375 10.0092 8.78845 10.6373C8.53841 10.8792 8.18271 10.8768 7.95027 10.6397C7.71784 10.4025 7.72449 10.0425 7.97101 9.79954C8.59711 9.18284 9.22789 8.57162 9.85712 7.95804C10.1806 7.64239 10.1815 7.32543 9.85985 7.00717C9.23102 6.38656 8.59906 5.76907 7.97297 5.14532C7.6384 4.81232 7.76832 4.27623 8.20971 4.15141C8.30576 4.12007 8.40864 4.11606 8.50683 4.13983C8.60503 4.1636 8.69468 4.21422 8.76576 4.28601C9.44546 4.95124 10.1271 5.61646 10.7963 6.29382C11.0862 6.58094 11.2541 6.96901 11.2646 7.37695Z" fill="#96B0C4" />
                                                                    <path d="M6.26068 6.9479C6.96778 6.9479 7.67487 6.94595 8.38197 6.9479C8.62497 6.9479 8.80184 7.07273 8.90006 7.29069C8.94018 7.37995 8.95735 7.47783 8.95 7.57543C8.94265 7.67302 8.91102 7.76722 8.85797 7.84947C8.80493 7.93172 8.73216 7.99939 8.64629 8.04635C8.56043 8.0933 8.46418 8.11804 8.36631 8.11831C6.96152 8.12039 5.55698 8.12039 4.15271 8.11831C4.07532 8.11941 3.9985 8.10499 3.92678 8.07588C3.85507 8.04677 3.78993 8.00358 3.7352 7.94885C3.68047 7.89413 3.63728 7.82898 3.60817 7.75726C3.57907 7.68555 3.56464 7.60873 3.56575 7.53135C3.56575 7.19952 3.81853 6.94947 4.1668 6.9479C4.86411 6.94438 5.56142 6.9479 6.25873 6.9479L6.26068 6.9479Z" fill="#96B0C4" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_58_11284">
                                                                        <rect width="15" height="15.0203" fill="white" transform="translate(15 15.0203) rotate(-180)" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                }
                                            </div>
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Link href={`/vente/${item.ID}`} >
                                            <div className='${getColorClass(item.etat)}'

                                            >
                                                {item.Etat == 'Terminée' ?
                                                    <div className="bg-[#05CD99] rounded-full pl-2 pr-2">{item.Etat}</div>
                                                    :
                                                    item.Etat == 'Annulé' ?
                                                        <div className="bg-[#D62832]  rounded-full pl-4">{item.Etat}</div>
                                                        :
                                                        item.Etat == 'En attente' ?
                                                            <div className="bg-[#FFA94D]  rounded-full pl-3">{item.Etat}</div>
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
                                            <div className='flex justify-center'>{item?.Total_à_Payer} Dhs </div>
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
    )
}

export default Details_Info
