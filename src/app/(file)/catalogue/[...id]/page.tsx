"use client"

import DetailBio from '@/components/detail/DetailBio'
import NumberArticles from '@/components/detail/DetailCategories'
import DetailImage from '@/components/detail/DetailImage'
import DetailStatus from '@/components/detail/DetailStatus'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import HeaderSection from '@/components/ui/header/HeaderSection'
import axios from 'axios'


// Edit or show a catalogue
interface ParamsType {
    id: string;
}

const DetailCatalogue = ({ params }: { params: ParamsType }) => {
    // console.log(params.id)
    // const [imageData, setImageData] = useState('');
    // const [statusData, setStatusData] = useState('');
    // const [bioData, setBioData] = useState('');
    const [Catalogue, setCatalogue] = useState<any>([])
    const [Image,setImlage]=useState([])

    
    useEffect(() => {

        axios.get(`http://localhost:3000/api/catalogue/${params.id}`)
          .then(response => {
            // console.log("Voici data ", response.data);
            setCatalogue(response.data)
            setImlage(response.data.img)
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des données de l\'utilisateur :', error);
          });
      },[params.id]);
    return (
        <>
            <HeaderSection pageTitle='Détails du catalogue'></HeaderSection>
            <form >
                <div className='flex gap-10'>
                    <div className='flex-col flex gap-5'>
                        <DetailImage  CatalogueImage={Catalogue}

                        // setImageData={setImageData}
                        ></DetailImage>
                        <NumberArticles AllCatalogue={Catalogue}></NumberArticles>
                        <DetailStatus AllCatalogue2={Catalogue}></DetailStatus>

                    </div>
                    <div className=''>
                        <div className='flex flex-col gap-5'>
                            <DetailBio AllCatalogue3={Catalogue} />
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

                            <button
                                //  onClick={updateData}
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