"use client"

import React from 'react'
import Header from '../../utilisateur/USerComponent/Header/Header';
import Info_Client from '../Details_Client/Info_Client';
import Total_Payment from '../Details_Client/Total_Payment';
import Nom_Payée from '../Details_Client/Nom_Payée';
import Details_Info from '../Details_Client/Details_Info';


const Page = () => {
    const path = "Détails du client"
    return (
        <div>
            <Header path={path} />
            <div className='flex  '>
                <div className='flex-col mr-6 '>
                    <Info_Client />
                    <Total_Payment />
                    <Nom_Payée />
                </div>
                <div>
                    <Details_Info/>
                </div>
            </div>


        </div>
    )
}

export default Page
