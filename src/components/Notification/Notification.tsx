"use client"

import Image from 'next/image'
import React from 'react'
import Pagination from '../ui/pagination/Pagination'

const Notification = () => {
    const Info = [
        { id: 1, tache1: 45890, tache2: 45890, date: "Le Oct 4, 2023 à 01:00" },
        { id: 1, tache1: 45890, tache2: 45890, date: "Le Oct 4, 2023 à 01:00" },
        { id: 1, tache1: 45890, tache2: 45890, date: "Le Oct 4, 2023 à 01:00" },
        { id: 1, tache1: 45890, tache2: 45890, date: "Le Oct 4, 2023 à 01:00" },
        { id: 1, tache1: 45890, tache2: 45890, date: "Le Oct 4, 2023 à 01:00" },
        { id: 1, tache1: 45890, tache2: 45890, date: "Le Oct 4, 2023 à 01:00" },
        { id: 1, tache1: 45890, tache2: 45890, date: "Le Oct 4, 2023 à 01:00" }
    ]

    return (

        <span>
            <div className='mt-14'>
            <div className='ml-1'>
                <p className='text-[#D9A528] text-[16px] font-bold'>Géneral</p>
                <Image src={'/Line_20.svg'} className='pt-2 pb-4' width={58} height={20} alt='Ligne' ></Image>
                {/* <span style={{borderBottom:'solid #D9A528 2px',width:"5.6%"}}></span> */}
            </div>
            <div className='mt-4 rounded-[15px] bg-white pt-5'>
                <div className='pl-10'>
                    <p className='text-[#787878] font-[600] text-[16px]'>Listes des notification</p>
                </div>
                {
                    Info && Info.slice(0,6).map((item) => {
                        return (
                            <div key={item.id} className='flex justify-between pl-12 mt-4 text-[14px] pb-5    '>
                                <h3 >
                                    <span className='border border-[#D9A528] border-l-4 mr-6 ml-[-10px] '></span>
                                    La tâche n°
                                    <span className='text-[#96B0C4]'>{item.tache1}</span>
                                    a été fusionnée avec la tâche n°
                                    <span className='text-[#96B0C4]'>{item.tache2}</span>
                                </h3>
                                <h4 className='mr-6 text-[#C1C4C7] text-[12px]'>
                                    {item.date}
                                </h4>
                            </div>
                        )
                    })
                }

            </div>
        </div>
        <Pagination/>
        </span>
    )
}

export default Notification
