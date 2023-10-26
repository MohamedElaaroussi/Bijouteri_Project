"use client"
import ExportBtn_Conp from '@/components/comptabilite/All_Header/Button/ExportBtn_Conp'
import GernerateurPdf_Conp from '@/components/comptabilite/All_Header/Button/GernerateurPdf_Conp'
import { Header_Conpt } from '@/components/comptabilite/All_Header/Header_Conpt'
import DropDown from '@/components/ui/DropDown'
import ExportBtn from '@/components/ui/button/ExportBtn'
import { usePathname } from 'next/navigation'
import React from 'react'

const Page = () => {
    const pathname = usePathname()
    const Pathid = pathname.substring(pathname.lastIndexOf('/') + 1);
    return (
        <div>
            <Header_Conpt path={Pathid} />
            <div className='flex gap-2'>
                <div>
                    <ExportBtn_Conp label="Exporter" />
                    
                </div>
                <div>
                    <GernerateurPdf_Conp label="Génération PDF " />
                </div>
            </div>

        </div>
    )
}

export default Page
