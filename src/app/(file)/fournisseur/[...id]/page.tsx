"use client"
import React, { useState } from 'react'
import Details_F from '../Details_Fornisseur/Details_F'
import TotalPayment_F from '../Details_Fornisseur/TotalPayment_F'
import Non_Payée_F from '../Details_Fornisseur/Non_Payée_F'
import Info_F from '../Details_Fornisseur/Info_F'
import InputHeader_F from '@/components/Fornisseur/Header_F/InputHeader_F'
import DisplayDate_F from '@/components/detail/'
import Filter_F from '@/components/Fornisseur/Filter_F/Filter_F'
import ExportBtn_F from '@/components/Fornisseur/ExportBtn_F/ExportBtn_F'
import GoldBtn_F from '@/components/Fornisseur/GoldBtn_F/GoldBtn_F'
import Header_Répa from '@/components/Reparatrion/Header_Répa/Header_Répa'

const Page = () => {
    const [openModal, setOpenModal] = useState(false);
    const path = "Détails du fournisseur"
    return (
        <div>
            <Header_Répa path={path} />
            <div className='flex  '>
                <div className='flex-col mr-6 '>
                    <Details_F />
                    <TotalPayment_F />
                    <Non_Payée_F />
                </div>
                <div>
                    <div className='flex gap-[11rem] mt-[4.5rem] mb-[-1.2rem]'>
                        <span>
                            <InputHeader_F />
                        </span>

                        <span className='flex gap-3'>
                            {/* Date  */}
                            <DisplayDate_F icon="/Date.svg" text="date"></DisplayDate_F>
                            {/* Filter */}
                            <Filter_F 
                            icon="/Filter_H.svg" text="Filter"
                            ></Filter_F>
                            
                        </span>
                        


                    </div>
                    <div className='flex gap-4'>
                        <span className='w-[5rem]'>
                            <ExportBtn_F label={'Exporter'}/>
                        </span>
                        <span>
                        <GoldBtn_F label={"Ajouter une transaction"} setOpenModal={setOpenModal} />                        </span>
                        
                    </div>
                    <div className='mt-[-3rem]'>
                        <Info_F />
                    </div>
                    
                </div>
            </div>


        </div>
    )
}

export default Page
