"use client"

import DetailBio from '@/components/detail/DetailBio'
import NumberArticles from '@/components/detail/DetailCategories'
import DetailImage from '@/components/detail/DetailImage'
import DetailStatus from '@/components/detail/DetailStatus'
import Image from 'next/image'
import React, { useState } from 'react'
import HeaderSection from '@/components/ui/header/HeaderSection'


// Edit or show a catalogue
const DetailCatalogue = () => {
    const [imageData, setImageData] = useState('');
    const [statusData, setStatusData] = useState('');
    const [bioData, setBioData] = useState('');
    const updateData = async () => {
        // Create an object with the data to send to the API
        const dataToUpdate = {
            image: imageData,
            status: statusData,
            bio: bioData,
        };

        // Send the data to the API using a fetch or Axios request
        try {
            const response = await fetch('your-update-api-endpoint', {
                method: 'PUT', // or 'POST' or 'PATCH' based on your API
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToUpdate),
            });

            // Handle the API response, e.g., show a success message or handle errors
            // You can also update the state to reflect the changes made on the server
        } catch (error) {
            // Handle API request errors
        }
    };

    return (
        <>
            <HeaderSection pageTitle='Détails du catalogue'></HeaderSection>
            <form >
                <div className='flex gap-10'>
                    <div className='flex-col flex gap-5'>
                        <DetailImage src="/article.png"
                        
                        // setImageData={setImageData}
                        ></DetailImage>
                        <NumberArticles></NumberArticles>
                        <DetailStatus></DetailStatus>

                    </div>
                    <div className=''>
                        <div className='flex flex-col gap-5'>
                            <DetailBio />
                            {/* <div className='bg-white px-10 py-8 rounded-[20px] flex gap-5'>
                                <div className=''>
                                    <p className='text-sm text-[color:var(--labelText)]'>Code bar</p>
                                    <input type="text" placeholder='564635443' className='px-5 py-3 catalogue-input mb-2 placeholder:text-black' />
                                    <p className='text-sm text-[color:var(--labelText)]'>{"Poids d'or"}</p>
                                    <input type="text" placeholder='25 g' className='px-5 py-3 catalogue-input mb-2 placeholder:text-black' />
                                    <p className='text-sm text-[color:var(--labelText)]'>Cout</p>
                                    <input type="text" placeholder='150 DH' className='px-5 py-3 catalogue-input placeholder:text-black' />
                                </div>
                                <div className='w-[690px]'>
                                    <p className="text-sm text-[color:var(--labelText)]">{"Couleur d'or"}</p>
                                    <div className='mt-8'>
                                        <p className="text-sm text-[color:var(--labelText)] mb-2">{"Type"}</p>
                                        <Controller
                                            name="typeArticle"
                                            control={control}
                                            render={({ field }) => <Select
                                                {...field} options={[{ value: "1", label: "Diament" }, { value: "2", label: "Gold" }]} placeholder="Créateur d'article"></Select>}
                                        />
                                    </div>
                                </div>
                            </div> */}

                            <button  onClick={updateData}
                            className='self-end px-3 py-2 bg-[color:var(--goldColor)] rounded-3xl hover:cursor-pointer'>
                                <p className='text-sm text-white'>Sauvegarder les modifications</p>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>

    )
}

export default DetailCatalogue