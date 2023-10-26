'use client'
import Image from 'next/image'
import React from 'react'

const Info_articles_Répa = () => {
    const Info = [
        { id: 1, code_bar: "/Code_Barre.svg", couleur: "#AB5884", type: "Type", Poids_: " 25 ", Coût: 150 },
        { id: 1, code_bar: "/Code_Barre.svg", couleur: "#AB5884", type: "Type", Poids_: " 25 ", Coût: 150 },
        { id: 1, code_bar: "/Code_Barre.svg", couleur: "#AB5884", type: "Type", Poids_: " 25 ", Coût: 150 },
        { id: 1, code_bar: "/Code_Barre.svg", couleur: "#AB5884", type: "Type", Poids_: " 25 ", Coût: 150 },
        { id: 1, code_bar: "/Code_Barre.svg", couleur: "#AB5884", type: "Type", Poids_: " 25 ", Coût: 150 },
        { id: 1, code_bar: "/Code_Barre.svg", couleur: "#AB5884", type: "Type", Poids_: " 25 ", Coût: 150 },
        { id: 1, code_bar: "/Code_Barre.svg", couleur: "#AB5884", type: "Type", Poids_: " 25 ", Coût: 150 },
        { id: 1, code_bar: "/Code_Barre.svg", couleur: "#AB5884", type: "Type", Poids_: " 25 ", Coût: 150 },
        { id: 1, code_bar: "/Code_Barre.svg", couleur: "#AB5884", type: "Type", Poids_: " 25 ", Coût: 150 },
        { id: 1, code_bar: "/Code_Barre.svg", couleur: "#AB5884", type: "Type", Poids_: " 25 ", Coût: 150 },
    ]
    const showScroll = Info.length > 3;
    return (


        <div className="flex flex-col h-[19rem]  overflow-hidden">
            <div className=" sm:mx-0.5 lg:mx-0.5">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="">
                        <table className="min-w-full   ">
                            <thead className="bg-white border-b">
                                <tr>
                                    <th scope="col" className="text-[12px] font-medium text-gray-900 px-6 py-4 text-center">
                                        Code bar
                                    </th>
                                    <th scope="col" className="text-[12px] font-medium text-gray-900 px-6 py-4 text-left">
                                        Couleur d’or
                                    </th>
                                    <th scope="col" className="text-[12px] font-medium text-gray-900 px-6 py-4 text-left">
                                        Type
                                    </th>
                                    <th scope="col" className="text-[12px] font-medium text-gray-900 px-6 py-4 text-left">
                                        Poids d’or
                                    </th>
                                    <th scope="col" className="text-[12px] font-medium text-gray-900 px-6 py-4 text-left">
                                        Coût
                                    </th>
                                    <th scope="col" className="text-[12px] font-medium text-gray-900 px-6 py-4 text-left">

                                    </th>
                                </tr>
                            </thead>
                            <tbody className=' '>
                                {
                                    Info.slice(0, 3).map((item, i) => {
                                        return (
                                            <tr key={i} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100
                                                
                                                ">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    <Image src={item.code_bar} alt='code barre' width={80} height={40} />
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <div className='w-10 h-5 rounded-full mx-auto text-center' style={{ background: item.couleur }}></div>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <div className='mx-auto text-center'>
                                                        {item.type}
                                                    </div>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <div className='mx-auto text-center'>
                                                        {item.Poids_}
                                                    </div>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <div className='mx-auto text-center'>
                                                        {item.Coût}
                                                    </div>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <Image src="/Return_Icons.svg" width={20} height={20} alt='return' />

                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Info_articles_Répa
