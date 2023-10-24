"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import Header from '../utilisateur/USerComponent/Header/Header'
import Section1 from '../utilisateur/USerComponent/section1/Section1'
import Info_Répa from '@/components/Reparatrion/Réparation_Info/Info_Répa'

const Page = () => {
    const Path=usePathname().slice(1)
    return (
        <div>
            <Header path={Path} />
            <Section1/>
            <Info_Répa/>
        </div>
    )
}

export default Page
