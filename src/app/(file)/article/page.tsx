"use client"
import React from 'react'
import Header from '../utilisateur/USerComponent/Header/Header'
import Articles_Info from './Info_articles/Index'
import Articles_Section from './Section_1/Articles_Section'
import { usePathname } from 'next/navigation'

const Page = () => {
    const path=usePathname().slice(1)
    return (
        <div>
            <Header path={path}/>
            <Articles_Section/>
            <Articles_Info/>
        </div>
    )
}

export default Page
