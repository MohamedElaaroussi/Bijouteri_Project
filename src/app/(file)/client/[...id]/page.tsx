"use client"
import React, { useEffect, useState } from 'react';
import Header from '../../utilisateur/USerComponent/Header/Header';
import Info_Client from '../Details_Client/Info_Client';
import Total_Payment from '../Details_Client/Total_Payment';
import Nom_Payée from '../Details_Client/Nom_Payée';
import Details_Info from '../Details_Client/Details_Info';
import axios from 'axios';
import { Spinner } from '@nextui-org/react';

interface ClientData {
    _id: string;
    username: string;
    email: string;
    phone: number;
    address: string;
    status: string;
    createdAt: string;
    total:number
    // Ajoutez d'autres propriétés si nécessaire
}
interface ParamsType {
    id: string;
}

const Page = ({ params }: { params: ParamsType }) => {

    const [loading, setloading] = useState(true);
    const [client, setClient] = useState(null);



    useEffect(() => {
        // Faites une requête pour récupérer le client par ID
        try {
            axios.get(`http://localhost:3000/api/client/${params.id}`)
                .then((response) => {
                    const ClientData = Array.isArray(response.data) ? response.data : [response.data];
                    // @ts-ignore
                    setClient(ClientData);
                    setloading(false);
                    console.log("---------------");
                    console.log(ClientData);
                    console.log("---------------");
                })
                .catch((error) => {
                    console.error("Erreur lors de la récupération des données de l'utilisateur", error);
                });
        } catch (error) {
            console.error("Erreur lors de la récupération des données de l'utilisateur", error);
        }
    }, [params.id]);

    const path = "Détails du client";

    if (loading) {
        return (
            <div className="text-center mt-[8rem]">
                <Spinner label="Details Clients En cour de chargement" color="warning" />
            </div>
        );
    }

    return (
        <div>
            <Header path={path} />

            {       
               client ?  client.map((clientData: ClientData,) =>
                (
                    <div key={clientData._id} className='flex'>
                        <div className='flex-col mr-6'>
                            <Info_Client Name={clientData.username} tele={clientData.phone} />
                            <Total_Payment total={clientData.total} />
                            <Nom_Payée data={clientData} />
                        </div>
                        <div>
                            <Details_Info
                                idClient={clientData._id}
                                status={clientData.status}
                                DateC={clientData.createdAt}
                                total={clientData.total}
                            />
                        </div>
                    </div>
                )):("invalid")}
        </div>
    );
}

export default Page;
