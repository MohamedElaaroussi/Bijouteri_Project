"use client"
import React from 'react'
import Info_Client from './Client_Info/Info_Client'
import Header from '../utilisateur/USerComponent/Header/Header'
import { usePathname } from 'next/navigation';
import Section1 from '../utilisateur/USerComponent/section1/Section1';

const Page = () => {
    const path = usePathname().slice(1);
    return (
        <div>
            <Header path={path} />
            <Section1 />
            <Info_Client />
            
        </div>
    )
}

export default Page
