import Image from 'next/image';
import React from 'react';

const NuméroCmd_Conpt = () => {
    const Data = [
        { id: 1, Quantité: 2, Prix_Unitaire: 255, Total: 2554 },
        { id: 1, Quantité: 2, Prix_Unitaire: 255, Total: 2554 },
        { id: 1, Quantité: 2, Prix_Unitaire: 255, Total: 2554 },
        { id: 1, Quantité: 2, Prix_Unitaire: 255, Total: 2554 },
        { id: 1, Quantité: 2, Prix_Unitaire: 255, Total: 2554 },
        { id: 1, Quantité: 2, Prix_Unitaire: 255, Total: 2554 },
    ]
    return (
        <div className='bg-white px-10 py-8 rounded-[20px] pt-4 pb-4 w-auto'>
            <div>
                <h3 className='text-[#787878] text-[15px] font-semibold '>
                    N° de commande <span className='text-[#D9A528]'> #45485 </span>
                </h3>
            </div>
            <div className='pt-6'>
                {/* Tableau */}
                <table className="table-auto overflow-scroll h-[4rem]">
                    <thead className='border-b-1  pb-[2rem]'>
                        <tr className=" ">
                            <th className="w-20 text-[#96B0C4] text-[12px] text-start w-[30rem]">
                                PRODUIT
                            </th>
                            <th className="w-20 text-[#96B0C4] text-[12px] text-start w-[10rem]">QUANTITÉ</th>
                            <th className="w-20 text-[#96B0C4] text-[12px] text-start w-[10rem]">PRIX UNITAIRE</th>
                            <th className="w-20 text-[#96B0C4] text-[12px] text-start w-[10rem] ">TOTAL</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            Data && Data.slice(0, 2).map((item) => {
                                return (
                                    <tr key={item.id} className='border-b-1 pb-4'>
                                        <td className="flex gap-4 pt-3  ">
                                            <Image src={"/Return_Icons.svg"} width={20} height={20} alt='suprimer'></Image>
                                            <Image src={"/Produit.svg"} width={60} height={40} alt='produit'></Image>
                                            <div>
                                                <span className='text-[10px] text-[#C1C4C7]'>Couleur</span>
                                                <Image src={"/Code_Barre.svg"} width={70} height={40} alt='produit'></Image>
                                            </div>
                                            <div>
                                                <span className='text-[10px] text-[#C1C4C7]'>Couleur</span>
                                                <div className='w-8 h-4 rounded-full bg-[#AB5884] mt-2'></div>
                                            </div>
                                            <div>
                                                <span className='text-[10px] text-[#C1C4C7]'>Nom</span>
                                                <div className='text-[#787878] text-[12px] w-[10rem]'>Nom de produit</div>
                                            </div>
                                        </td>
                                        <td className="text-[#787878] text-[15px]">{item.Quantité}</td>
                                        <td className="text-[#787878] text-[15px]">{item.Prix_Unitaire} Dhs</td>
                                        <td className="text-[#787878] text-[15px]">{item.Total} Dhs</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            <div className='border-b-1 pb-2'>
                <h3 className='text-[12px] text-[#96B0C4] pt-3 pb-1'>Article</h3>
                <div className='flex gap-10 '>
                    <div>
                        <form>
                            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-[514px] h-[2.7rem] p-4 pl-10 text-sm 
                            text-gray-900 border border-gray-300 rounded-[12px] bg-white "
                                    placeholder="Rechercher l’article..." required />
                            </div>
                        </form>
                    </div>
                    <div className='mt-[-20px]'>
                        <div className='pt-[-2px]'>
                            <h3 className='text-[12px] text-[#96B0C4] pb-1'>Nombre d’rticle</h3>
                            <input type="number" className="bg-white border border-gray-300 text-gray-900
                            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[135px] 
                            p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                            dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
                        </div>
                    </div>
                    <div>
                        <button
                            className="flex gap-2 items-center rounded-full  mt-2"
                        >
                            <span className="text-[#D9A528] text-[14px] font-semibold">+</span>
                            <span className="text-[#D9A528] text-[14px] font-semibold">Ajouter une transaction</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex  justify-between'>
                <div>
                    <button className='w-[258px] h-[45px] rounded-full bg-[#D9A528] mt-20'>
                        Sauvegarder les modifications
                    </button>
                </div>
                <div>
                    <span className='flex flex-row gap-10 flex justify-between border-b-1 pt-2 pb-2'>
                        <h2 className='text-[14px] text-[#96B0C4] font-semibold'>Total</h2>
                        <h2 className='text-[#787878] text-[15px] font-semibold'>3850 Dhs</h2>
                    </span>
                    <span className='flex flex-row gap-10 flex justify-between border-b-1 pt-2 pb-2'>
                        <h2 className='text-[14px] text-[#96B0C4] font-semibold'>TVA (20%)</h2>
                        <h2 className='text-[#787878] text-[15px] font-semibold'>412 Dhs</h2>
                    </span>
                    <span className='flex flex-row gap-10 flex justify-between border-b-1 pt-2 pb-2'>
                        <h2 className='text-[18px] text-[#787878] font-semibold'>Total</h2>
                        <h2 className=''>
                           <span className='text-[#D9A528] font-semibold'>4 515 </span> 
                            <span className='text-[10px] mb-6 text-[#D9A528] font-semibold'>Dhs</span>
                        </h2>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default NuméroCmd_Conpt;
