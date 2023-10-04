import Image from 'next/image'
import React from 'react'
import CustomSelect from '../select/CustomSelect'

const CatalogueModalContent = () => {
    return (
        <div className="mt-5">
            <div className="flex gap-10 ">
                <div>
                    <div className='flex gap-5'>
                        <div className="flex flex-col gap-5">
                            <input
                                className="px-5 py-3 catalogue-input"
                                type="text"
                                placeholder="Nom du catalogue"
                                name="catalogue"
                            />
                            <div>
                                <p className="text-sm mb-1">Couleur</p>
                                <div className="flex gap-1">
                                    <div className="bg-[color:#AB5884] h-[20px] w-[35px] rounded-full mt-[2px] relative">
                                        <div className="bg-green-500 absolute -right-1 -top-1 rounded-full w-[11px] h-[11px] flex justify-center items-center">
                                            <Image
                                                src={"/checked.svg"}
                                                alt="check mark"
                                                width={8}
                                                height={4}></Image>
                                        </div>
                                    </div>
                                    <div className="bg-[color:#D69670] h-[20px] w-[35px] rounded-full mt-[2px]"></div>
                                    <div className="bg-[color:#D62832] h-[20px] w-[35px] rounded-full mt-[2px]"></div>
                                    <div className="bg-[color:#ff38a2] h-[20px] w-[35px] rounded-full mt-[2px]"></div>
                                    <div className="bg-[color:#5640a3] h-[20px] w-[35px] rounded-full mt-[2px]"></div>
                                    <div className="bg-[color:#70d361] h-[20px] w-[35px] rounded-full mt-[2px]"></div>
                                </div>
                            </div>
                            <input
                                className="px-5 py-3 catalogue-input"
                                type="text"
                                placeholder="identification de base"
                                name="catalogue"
                            />
                            <CustomSelect placeholder={"Créateur d'article"} />
                            <CustomSelect placeholder={"Catégorie"} />
                        </div>
                        <div className="flex flex-col gap-5">
                            <CustomSelect placeholder={"Type d’article"} />
                            <input
                                className="px-5 py-3 catalogue-input"
                                type="text"
                                placeholder={"Code à barres"}
                            />
                            <CustomSelect placeholder={"Fournisseur"} />
                            {/* <div className='flex border-[1px] rounded-[10px] catalogue-input px-5 py-3'>
                                <input
                                    className="outline-none"
                                    type="number"
                                    placeholder={"Poids (g)"}
                                />
                                <Image src={"/down-up-arrow.svg"} alt='down up arrow' width={16} height={17}></Image>
                            </div> */}
                            <input
                                className="px-5 py-3 catalogue-input"
                                type="number"
                                placeholder={"Poids (g)"}
                            />
                            <input
                                className="px-5 py-3 catalogue-input"
                                type="number"
                                placeholder={"Prix d'achat"}
                            />

                        </div>
                    </div>
                    <div className="mt-5">
                        <textarea className="border-[1px] w-full px-5 py-3 resize-none h-[112px]" name="" id="" cols={10} rows={5} placeholder='Description'></textarea>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="">
                        <div className="hover:cursor-pointer border-dashed border-2 rounded-[20px] w-[90%] h-[170px] p-8 flex flex-col justify-center items-center gap-2">
                            <Image
                                src={"/ajouter.svg"}
                                alt="ajouter"
                                width={35}
                                height={35}></Image>
                            <p className="text-[color:var(--softTextColor)] text-sm">
                                Ajouter image
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <input
                            className="px-5 py-3 catalogue-input"
                            placeholder="Date de création"
                        />
                        <input
                            className="px-5 py-3 catalogue-input"
                            type="text"
                            placeholder="Référence externe d’article"
                        />
                        <input
                            className="px-5 py-3 catalogue-input"
                            type="number"
                            placeholder={"Nombre d'article"}
                        />
                        <button className='self-end text-white bg-[color:var(--goldColor)] rounded-[60px] px-16 py-2 w-max hover:bg-[color:var(--softGoldColor)] '>Ajouter</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatalogueModalContent