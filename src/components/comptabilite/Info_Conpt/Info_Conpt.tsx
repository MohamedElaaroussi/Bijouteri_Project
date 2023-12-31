"use client"
import React from 'react'
import Link from "next/link";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@nextui-org/react";
import Image from 'next/image';
import Pagination from '@/components/ui/pagination/Pagination';


const Info_Conpt = () => {
    const infoDonner = [
        
        {
            ID: "V25155",
            Images_Url: `/Vente.svg`,
            Code_Barre: `/Code_Barre.svg`,
            Client_Nom: "Mustapha",
            Client_Prenom: "lwalidi",
            Nbr_Article: 2,
            Etat: "Non payé",
            Date_vente: "Oct 25, 2023",
            Paiement: " Espéce ",
            Total_payer: "2 550",
        },
        {
            ID: "V25155",
            Images_Url: `/Vente.svg`,
            Code_Barre: `/Code_Barre.svg`,
            Client_Nom: "Mustapha",
            Client_Prenom: "lwalidi",
            Nbr_Article: 2,
            Etat: "Payé",
            Date_vente: "Oct 25, 2023",
            Paiement: " Espéce ",
            Total_payer: "2 550",
        },
        {
            ID: "V25155",
            Images_Url: `/Vente.svg`,
            Code_Barre: `/Code_Barre.svg`,
            Client_Nom: "Mustapha",
            Client_Prenom: "lwalidi",
            Nbr_Article: 2,
            Etat: "Non payé",
            Date_vente: "Oct 25, 2023",
            Paiement: " Espéce ",
            Total_payer: "2 550",
        },
        {
            ID: "V25155",
            Images_Url: `/Vente.svg`,
            Code_Barre: `/Code_Barre.svg`,
            Client_Nom: "Mustapha",
            Client_Prenom: "lwalidi",
            Nbr_Article: 2,
            Etat: "Payé",
            Date_vente: "Oct 25, 2023",
            Paiement: " Espéce ",
            Total_payer: "2 550",
        },
        {
            ID: "V25155",
            Images_Url: `/Vente.svg`,
            Code_Barre: `/Code_Barre.svg`,
            Client_Nom: "Mustapha",
            Client_Prenom: "lwalidi",
            Nbr_Article: 2,
            Etat: "Non payé",
            Date_vente: "Oct 25, 2023",
            Paiement: " Espéce ",
            Total_payer: "2 550",
        },
        {
            ID: "V25155",
            Images_Url: `/Vente.svg`,
            Code_Barre: `/Code_Barre.svg`,
            Client_Nom: "Mustapha",
            Client_Prenom: "lwalidi",
            Nbr_Article: 2,
            Etat: "Payé",
            Date_vente: "Oct 25, 2023",
            Paiement: " Espéce ",
            Total_payer: "2 550",
        },
        {
            ID: "V25155",
            Images_Url: `/Vente.svg`,
            Code_Barre: `/Code_Barre.svg`,
            Client_Nom: "Mustapha",
            Client_Prenom: "lwalidi",
            Nbr_Article: 2,
            Etat: "Non payé",
            Date_vente: "Oct 25, 2023",
            Paiement: " Espéce ",
            Total_payer: "2 550",
        },
        {
            ID: "V25155",
            Images_Url: `/Vente.svg`,
            Code_Barre: `/Code_Barre.svg`,
            Client_Nom: "Mustapha",
            Client_Prenom: "lwalidi",
            Nbr_Article: 2,
            Etat: "Payé",
            Date_vente: "Oct 25, 2023",
            Paiement: " Espéce ",
            Total_payer: "2 550",
        },
        {
            ID: "V25155",
            Images_Url: `/Vente.svg`,
            Code_Barre: `/Code_Barre.svg`,
            Client_Nom: "Mustapha",
            Client_Prenom: "lwalidi",
            Nbr_Article: 2,
            Etat: "Non payé",
            Date_vente: "Oct 25, 2023",
            Paiement: " Espéce ",
            Total_payer: "2 550",
        },
        {
            ID: "V25155",
            Images_Url: `/Vente.svg`,
            Code_Barre: `/Code_Barre.svg`,
            Client_Nom: "Mustapha",
            Client_Prenom: "lwalidi",
            Nbr_Article: 2,
            Etat: "Payé",
            Date_vente: "Oct 25, 2023",
            Paiement: " Espéce ",
            Total_payer: "2 550",
        },
        {
            ID: "V25155",
            Images_Url: `/Vente.svg`,
            Code_Barre: `/Code_Barre.svg`,
            Client_Nom: "Mustapha",
            Client_Prenom: "lwalidi",
            Nbr_Article: 2,
            Etat: "Non payé",
            Date_vente: "Oct 25, 2023",
            Paiement: " Espéce ",
            Total_payer: "2 550",
        },
        {
            ID: "V25155",
            Images_Url: `/Vente.svg`,
            Code_Barre: `/Code_Barre.svg`,
            Client_Nom: "Mustapha",
            Client_Prenom: "lwalidi",
            Nbr_Article: 2,
            Etat: "Payé",
            Date_vente: "Oct 25, 2023",
            Paiement: " Espéce ",
            Total_payer: "2 550",
        },
    ]

    return (
        <div >
            <div className="overflow-hidden  ">
                <Table
                    aria-label="Example static collection table"
                    style={{
                        height: "auto",
                        minWidth: "100%",
                    }}
                    selectionMode="single"
                >
                    <TableHeader>
                        <TableColumn>
                            <div className='text-center'>
                                ID
                            </div>
                            
                            </TableColumn>
                        <TableColumn>
                            <div className='text-center'>
                                Nom
                            </div></TableColumn>
                        
                        <TableColumn>
                            <div className='text-center'>Paiement</div>
                        
                        </TableColumn>
                        <TableColumn><div className='text-center'>Date de création</div></TableColumn>
                        <TableColumn><div className='text-center'>Status</div></TableColumn>
                        <TableColumn><div className='text-center'>Total</div></TableColumn>
                        <TableColumn><div className='text-center'>{""}</div></TableColumn>
                    </TableHeader>
                    <TableBody>
                        {
                            infoDonner && infoDonner.slice(0,8).map((item, i) => {
                                return (
                                    <TableRow key={i}>
                                        <TableCell>
                                            <Link href={`/comptabilite/${item.ID}`} >
                                                <div className='text-[#787878] font-14 text-center'>
                                                    #{item.ID}
                                                </div>

                                            </Link>
                                        </TableCell>
                                        <TableCell>
                                            <Link href={`/comptabilite/${item.ID}`} >
                                                <div className='text-center'>{item?.Client_Nom}</div>
                                            </Link>
                                        </TableCell>
                                        <TableCell>
                                            <Link href={`/comptabilite/${item.ID}`} >
                                                <div className='text-center'>{item?.Paiement}  </div>
                                            </Link>
                                        </TableCell>
                                        <TableCell>
                                            <Link href={`/comptabilite/${item.ID}`} >
                                                <div className='textè-[#787878] text-center'>{item?.Date_vente}</div>
                                            </Link>
                                        </TableCell>
                                        
                                        <TableCell>
                                            <Link href={`/comptabilite/${item.ID}`} >
                                                <div className='justify-center pl-[5rem]'
                                                // style={{ color: getColor(item.Etat) }}
                                                >
                                                    {item.Etat == 'Non payé' ?
                                                        <div className="text-center bg-[#D62832] text-white rounded-full w-[6rem]  ">{item.Etat}</div>
                                                        :
                                                        item.Etat == 'Payé' ?
                                                            <div className="bg-[#05CD99] text-white text-center rounded-full w-[6rem]">{item.Etat}</div>
                                                                : ('Choix invalid')
                                                    }
                                                </div>
                                            </Link>
                                        </TableCell>


                                        <TableCell>
                                            <Link href={`/comptabilite/${item.ID}`} >
                                                <div className='flex justify-center'>{item?.Total_payer} Dhs </div>
                                            </Link>
                                        </TableCell>
                                        <TableCell>
                                            <span className="flex gap-4">
                                                {/* {update Icons } */}
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_68_13833)">
                                                        <path d="M11.6814 -0.000261885C11.7081 0.0649799 11.778 0.0519422 11.8265 0.0759512C11.9807 0.151629 12.1056 0.275859 12.1822 0.429531C12.2588 0.583204 12.2827 0.757792 12.2503 0.926401C12.2179 1.09501 12.131 1.2483 12.0029 1.36265C11.8749 1.47701 11.7128 1.5461 11.5416 1.55928C11.4706 1.5645 11.3986 1.55928 11.3271 1.55928H4.00536C2.57682 1.55928 1.56584 2.5734 1.56584 4.00663V15.9949C1.56584 17.413 2.581 18.4308 3.997 18.4308H16.0051C17.4222 18.4308 18.4374 17.4141 18.4374 15.996C18.4374 13.5161 18.4374 11.0364 18.4374 8.55686C18.4374 8.20403 18.5845 7.93993 18.9108 7.7964C19.214 7.66278 19.4943 7.7228 19.7458 7.93366C19.8784 8.04483 19.9348 8.20246 20 8.35487V16.5957C19.927 16.6479 19.9478 16.7356 19.9327 16.8045C19.5814 18.6438 17.9979 19.9851 16.1268 19.9883C12.039 19.9966 7.95136 19.9966 3.86391 19.9883C1.74799 19.9825 0.0125601 18.2461 0.00734073 16.1322C-0.00309795 12.0382 -0.00309795 7.94393 0.00734073 3.84953C0.0109943 2.13602 1.18482 0.619278 2.831 0.146927C3.03299 0.0889924 3.24855 0.0858665 3.44115 -0.00390625L11.6814 -0.000261885Z" fill="#787878" />
                                                        <path d="M5.86605 15.9309C5.50884 15.9245 5.15304 15.8843 4.80339 15.8109C4.46726 15.7384 4.24909 15.5223 4.18855 15.182C3.8232 13.136 4.32426 11.3197 5.77054 9.83058C7.76067 7.78095 9.80195 5.78194 11.8213 3.76101C12.6564 2.9233 13.4915 2.07987 14.3355 1.24999C16.05 -0.433248 18.893 0.285971 19.5491 2.57413C19.856 3.64305 19.6326 4.61856 18.9228 5.47923C18.8475 5.5688 18.7677 5.6545 18.6837 5.73601C15.9098 8.51096 13.1355 11.2863 10.3609 14.0619C9.43451 14.9904 8.34367 15.5995 7.0498 15.8365C6.65912 15.9055 6.26274 15.9372 5.86605 15.9309ZM6.07482 14.3704C7.26118 14.3375 8.32227 13.8907 9.20017 13.0133C11.9974 10.2147 14.795 7.41681 17.5929 4.61959C17.6451 4.56739 17.6936 4.51833 17.7401 4.46301C17.9978 4.16114 18.1308 3.77236 18.1118 3.37588C18.0929 2.97939 17.9235 2.60505 17.6381 2.32914C17.3527 2.05323 16.9729 1.89651 16.576 1.89093C16.1791 1.88534 15.795 2.0313 15.502 2.29907C15.2452 2.53812 15.0046 2.79544 14.752 3.0397C14.6836 3.10547 14.6847 3.14408 14.752 3.20984C14.9086 3.35703 15.0594 3.50944 15.2081 3.66446C15.5213 3.9938 15.526 4.47815 15.2165 4.78401C14.907 5.08986 14.4378 5.08412 14.111 4.77514C13.9597 4.63213 13.8099 4.48702 13.6705 4.33252C13.5891 4.24223 13.5432 4.24641 13.4576 4.33252C11.2613 6.53509 9.0535 8.72669 6.86712 10.9387C6.0409 11.7737 5.64944 12.814 5.63587 13.9878C5.62857 14.4257 5.57272 14.3563 6.07169 14.3704H6.07482Z" fill="#787878" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_68_13833">
                                                            <rect width="20" height="20" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                {/* {Delate Icons } */}
                                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_68_13828)">
                                                        <path d="M10.4664 2.14734e-05C10.5432 0.068924 10.6455 0.0496175 10.7342 0.072585C11.2288 0.201167 11.6682 0.487115 11.9861 0.887288C12.304 1.28746 12.4831 1.78015 12.4965 2.29104C12.4996 2.5061 12.5058 2.72116 12.4965 2.93518C12.4881 3.08133 12.5226 3.12988 12.6818 3.12883C13.9185 3.12118 15.1551 3.1203 16.3915 3.12622C16.9417 3.12622 17.3102 3.6315 17.1474 4.14357C17.0997 4.29332 17.0079 4.42518 16.8841 4.52186C16.7602 4.61855 16.61 4.67554 16.4531 4.68539C16.3821 4.68957 16.3101 4.68539 16.2386 4.68539C11.9364 4.68539 7.63413 4.68401 3.3319 4.68123C3.16277 4.68123 3.1231 4.71776 3.1231 4.89002C3.12902 8.59405 3.13059 12.2979 3.1278 16.0016C3.1278 17.4183 4.14411 18.4341 5.56236 18.4346H11.596C13.0576 18.4346 14.0629 17.4313 14.0629 15.9755C14.0629 13.0137 14.0629 10.052 14.0629 7.0902C14.0629 6.59849 14.3897 6.24876 14.8428 6.24824C15.0399 6.24845 15.2297 6.32299 15.3743 6.45701C15.5188 6.59102 15.6075 6.77464 15.6226 6.97118C15.6258 7.0166 15.6226 7.06254 15.6226 7.10795C15.6226 10.0889 15.6226 13.0701 15.6226 16.0517C15.6226 17.9199 14.3965 19.4655 12.5821 19.8982C12.2912 19.9663 11.9934 19.9996 11.6947 19.9974C9.63126 19.9974 7.57097 20.0005 5.50494 19.9974C3.28909 19.9932 1.56758 18.2639 1.56601 16.0428C1.56358 12.3263 1.56479 8.60954 1.56966 4.89263C1.56966 4.72194 1.5326 4.66713 1.36087 4.68384C1.17245 4.69506 0.983564 4.6961 0.795033 4.68696C0.348733 4.67913 0.0083955 4.34507 0.00474158 3.9139C0.00304644 3.80982 0.0223087 3.70644 0.0613785 3.60995C0.100448 3.51346 0.158526 3.42581 0.232162 3.35222C0.305798 3.27863 0.393487 3.22061 0.490006 3.1816C0.586524 3.1426 0.689901 3.12341 0.793988 3.12517C2.03058 3.12204 3.26717 3.12048 4.50376 3.12831C4.66349 3.12831 4.69116 3.07977 4.68959 2.93465C4.68489 2.4941 4.64835 2.04726 4.80182 1.62028C5.10927 0.761083 5.71164 0.23596 6.60164 0.0391706C6.63139 0.0329068 6.66793 0.0428368 6.67785 -0.000488281L10.4664 2.14734e-05ZM8.58728 3.12465C9.31806 3.12465 10.0447 3.12465 10.7734 3.12465C10.8866 3.12465 10.9514 3.11735 10.9414 2.9738C10.9268 2.75979 10.9414 2.5442 10.9362 2.32966C10.9353 2.12532 10.8533 1.92971 10.7082 1.78576C10.5632 1.6418 10.367 1.56127 10.1626 1.56182C9.11484 1.55695 8.06738 1.55695 7.02027 1.56182C6.81593 1.56265 6.62026 1.64451 6.47621 1.78944C6.33215 1.93437 6.25149 2.13054 6.2519 2.33489C6.2472 2.54943 6.25973 2.765 6.24773 2.97901C6.24042 3.1069 6.2874 3.12517 6.40119 3.12465C7.12728 3.12204 7.85598 3.12517 8.58467 3.12517L8.58728 3.12465Z" fill="#787878" />
                                                        <path d="M6.24808 12.3419C6.24808 13.5847 6.25069 14.8276 6.24808 16.0704C6.24808 16.6305 5.73654 17.0037 5.21977 16.8325C5.06435 16.781 4.92923 16.6815 4.83378 16.5485C4.73833 16.4154 4.68743 16.2556 4.68838 16.0918C4.6842 15.61 4.68838 15.1288 4.68838 14.647C4.68838 12.6425 4.68838 10.6383 4.68838 8.63417C4.68838 8.28966 4.83349 8.03075 5.14877 7.88459C5.44213 7.74888 5.72296 7.79482 5.96986 7.99631C6.17553 8.16334 6.25278 8.38935 6.25226 8.65191C6.24652 9.88172 6.24808 11.1115 6.24808 12.3419Z" fill="#787878" />
                                                        <path d="M9.37285 12.3424C9.37285 13.5852 9.37285 14.8281 9.37285 16.0709C9.37285 16.631 8.86078 17.0037 8.34453 16.8325C8.18907 16.7807 8.05398 16.681 7.95854 16.5478C7.86311 16.4146 7.81222 16.2546 7.81315 16.0907C7.80949 15.5688 7.81315 15.0499 7.81315 14.529V8.63362C7.81315 8.28911 7.95826 8.0302 8.27406 7.88456C8.56794 7.74885 8.84825 7.79479 9.09515 7.9968C9.30029 8.16384 9.37755 8.38985 9.3765 8.65241C9.37198 9.88291 9.37076 11.1129 9.37285 12.3424Z" fill="#787878" />
                                                        <path d="M12.4974 12.3644C12.4974 13.601 12.4974 14.8375 12.4974 16.0736C12.4974 16.6332 11.9842 17.0059 11.468 16.8341C11.3127 16.7823 11.1777 16.6826 11.0824 16.5494C10.9872 16.4161 10.9365 16.2562 10.9377 16.0924C10.934 15.5328 10.9377 14.9733 10.9377 14.4137V8.63528C10.9377 8.29077 11.0833 8.03185 11.3991 7.88622C11.693 7.75102 11.9733 7.79749 12.2197 7.99898C12.4253 8.16654 12.5015 8.39255 12.501 8.65563C12.4968 9.89031 12.4956 11.1266 12.4974 12.3644Z" fill="#787878" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_68_13828">
                                                            <rect width="17.1844" height="20" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </div>
            <Pagination />
        </div>
    )

}

export default Info_Conpt
