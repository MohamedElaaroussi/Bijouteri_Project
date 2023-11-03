"use client"
import React from 'react'
import Info_Client from './Client_Info/Info_Client'
import Header from '../utilisateur/USerComponent/Header/Header'
import { usePathname } from 'next/navigation';

import Section1_C from '@/components/Client/Section1_Client/Section1_C';

const Page = () => {
    const path = usePathname().slice(1);
    return (
        <div>
            <Header path={path} />
            <Section1_C />
            <Info_Client />
        </div>
    )
}

export default Page
