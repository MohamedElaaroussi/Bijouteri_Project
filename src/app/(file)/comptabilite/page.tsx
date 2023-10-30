"use client"
import React from 'react'
import Header from '../utilisateur/USerComponent/Header/Header'
import { usePathname } from 'next/navigation'
import Nom_Payer_Conpt from '@/components/comptabilite/All_Header/Details_Compt/Nom_Payer_Conpt'
import Cheffre_Affaiire_Conpt from '@/components/comptabilite/All_Header/Details_Compt/Cheffre_Affaiire_Conpt'
import Sectipon_Conpt from '@/components/comptabilite/All_Header/Section1_conp/Sectipon_Conpt'
import Info_Conpt from '@/components/comptabilite/Info_Conpt/Info_Conpt'

const Page = () => {
    const Path=usePathname().slice(1)
    return (
        <div>
            <Header path={Path}/>
            <div className='flex justify-between pt-10'>
                <Cheffre_Affaiire_Conpt/>
                <Nom_Payer_Conpt/>                
            </div>
            <div>
            <Sectipon_Conpt />
            </div>
            <div>
                <Info_Conpt/>
            </div>
        </div>
    )
}

export default Page
