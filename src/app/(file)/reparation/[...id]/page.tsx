'use client'
import React from 'react'

import Header_Répa from '@/components/Reparatrion/Header_Répa/Header_Répa'
import Status_Répa from '@/components/Reparatrion/Details_Répa/Status_Répa'
import Categorie_Répa from '@/components/Reparatrion/Details_Répa/Categorie_Répa'
import Réparateur_Répa from '@/components/Reparatrion/Details_Répa/Réparateur_Répa'
import Payment_Répa from '@/components/Reparatrion/Details_Répa/Payment_Répa'
import Nom_Desc_Répa from '@/components/Reparatrion/Details_Répa/Nom_Desc_Répa'
import Détails_Info_Répa from '@/components/Reparatrion/Details_Répa/Info_Répa'

const page = () => {
    const Path = "Détails de la réparation "
    return (
        <div>
            <Header_Répa path={Path} />
            <div className='flex'>
                <div>
                    <div className='flex flex-col mt-[5rem] ml-2'>
                        <Status_Répa />
                        <Categorie_Répa />
                        <Réparateur_Répa />
                        <Payment_Répa />
                    </div>

                </div>
                <div>
                    <div>
                        <Nom_Desc_Répa />
                        <Détails_Info_Répa />
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default page
