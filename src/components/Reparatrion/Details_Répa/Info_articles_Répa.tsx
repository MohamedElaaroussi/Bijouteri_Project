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
    return (
        <div className=" h-[5.8rem]">
            <table className="table-fixed ml-[3.4rem] ">
                <thead>
                    <tr>
                        <th className='w-[7.5rem]  text-[#96B0C4] text-[12px]'>Code bar</th>
                        <th className='w-[7.5rem] text-[#96B0C4] text-[12px]'>Couleur d’or</th>
                        <th className='w-[7.5rem] text-[#96B0C4] text-[12px]'>Type</th>
                        <th className='w-[7.5rem] text-[#96B0C4] text-[12px]'>Poids d’or</th>
                        <th className='w-[7.5rem] text-[#96B0C4] text-[12px]'>Coût</th>
                        <th className='w-[7.5rem] text-[#96B0C4] text-[12px]'></th>
                    </tr>
                </thead>
                <tbody className='overflow-scroll-y max-h-[9rem]'>
                    {Info.slice(0,3).map((item: any) => (
                        <tr key={item.id}>
                            
                            <td >
                                <div className='mx-auto text-center pt-2 pb-2 pl-3'>
                                    <Image src={item.code_bar} alt='code barre' width={80} height={40} />
                                </div>

                            </td>
                            <td>
                                <div className='w-10 h-5 rounded-full mx-auto text-center' style={{ background: item.couleur }}></div>
                            </td>
                            <td>
                                <div className='mx-auto text-center'>
                                    {item.type}
                                </div>
                            </td>
                            <td >
                                <div className='mx-auto text-center'>
                                    {item.Poids_}
                                </div>

                            </td>
                            <td>
                                <div className='mx-auto text-center'>
                                    {item.Coût}
                                </div>

                            </td>
                            <td>
                                <Image src="/Return_Icons.svg" width={20} height={20} alt='return' />
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Info_articles_Répa
