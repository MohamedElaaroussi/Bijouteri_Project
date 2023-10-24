"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import Header from '../utilisateur/USerComponent/Header/Header';
import { Fournisseur_Info } from './fournisseur_Info/Fournisseur_Info';
import Section_1 from '../vente/Section_1';

const Page = () => {
    const  Path=usePathname().slice(1) ;
    return (
        <div>
            <Header path={Path} />
            <Section_1 />
           <Fournisseur_Info />
        </div>
    )
}

export default Page
