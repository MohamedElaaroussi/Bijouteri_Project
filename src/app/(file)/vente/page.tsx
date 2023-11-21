"use client"
import React from 'react'
import Info_Vente from './Info_Vente/Info_Vente'
import Section_1 from './Section_1'
import { usePathname } from 'next/navigation'
import Header from '../utilisateur/USerComponent/Header/Header'

const Page = () => {
    const path = usePathname().slice(1)
    return (
        <>
            <Header path={path} />
            <Section_1 />
            <Info_Vente />


        </>
    )
}

export default Page
