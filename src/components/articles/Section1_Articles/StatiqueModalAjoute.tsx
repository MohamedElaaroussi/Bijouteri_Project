import Description from '@/components/ui/item/Description';
import ImagesUpload from '@/components/ui/item/ImagesUpload';
import SelectColor from '@/components/ui/item/SelectColor';
import React from 'react'

const StatiqueModalAjoute = () => {


    return (
        <div className='flex flex-row-reverse gap-6 '>
            <div className='w-[100%]'>
                <ImagesUpload />
            </div>
            <div>
                <div className="flex gap-10 mt-6 ">
                    <div>
                        <input
                            type="text"
                            id="first_name"
                            className="bg-white border border-gray-300 text-[#C1C4C7] text-[14px] font-somibold rounded-lg 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5"
                            placeholder="Nom de l’article"
                            required
                        />
                    </div>
                    <div>
                        <select className="border border-gray-300 text-[#C1C4C7]  rounded-lg text-Input font-inter  text-base 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5">
                            <option selected>Type d’article </option>
                            <option value="Activer">Activer</option>
                            <option value="Désactiver">Désactiver</option>

                        </select>
                    </div>
                </div>
                <div className='flex '>
                    <span >
                        <SelectColor />
                    </span>
                    <div>
                        <input
                            type="text"
                            id="first_name"
                            className="bg-white border border-gray-300 text-[#C1C4C7] 
                                text-[14px] font-somibold rounded-lg focus:ring-blue-500 
                                focus:border-blue-500 block w-[15rem] p-2.5 mt-6 ml-[3rem]"
                            placeholder="Code à barres"
                            required
                        />
                    </div>
                </div>
                <div className="flex gap-10 mt-6 ">
                    <div>
                        <input
                            type="text"
                            id="first_name"
                            className="bg-white border border-gray-300 text-[#C1C4C7] text-[14px] font-somibold rounded-lg 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5"
                            placeholder="Identification de base"
                            required
                        />
                    </div>
                    <div>
                        <select className="border border-gray-300 text-[#C1C4C7]  rounded-lg text-Input font-inter  text-base 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5">
                            <option selected>Fournisseur  </option>
                            <option value="US">Fournisseur_1</option>
                            <option value="CA">Fournisseur_2</option>
                            <option value="FR">Fournisseur_3</option>
                            <option value="DE">Fournisseur_4</option>
                        </select>
                    </div>
                </div>
                <div className="flex gap-10 mt-6 ">
                    <div>
                        <select className="border border-gray-300 text-[#C1C4C7]  rounded-lg text-Input font-inter  text-base 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5">
                            <option selected>Créateur d’article </option>
                            <option value="US">Créateur_1</option>
                            <option value="CA">Créateur_2</option>
                            <option value="FR">Créateur_3</option>
                            <option value="DE">Créateur_4</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="number"
                            id="first_name"
                            className="bg-white border border-gray-300 text-[#C1C4C7] text-[14px] font-somibold rounded-lg 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5"
                            placeholder="Poids (g)"
                            required
                        />
                    </div>

                </div>
                <div className="flex gap-10 mt-6 ">
                    <div>
                        <select className="border border-gray-300 text-[#C1C4C7]  rounded-lg text-Input font-inter  text-base 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5">
                            <option selected>Catégorie </option>
                            <option value="US">Catégorie_1</option>
                            <option value="CA">Catégorie_2</option>
                            <option value="FR">Catégorie_3</option>
                            <option value="DE">Catégorie_4</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="number"
                            id="first_name"
                            className="bg-white border border-gray-300 text-[#C1C4C7] text-[14px] font-somibold rounded-lg 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5"
                            placeholder="Nombre d'article"
                            required
                        />
                    </div>
                </div>
                <div className="flex gap-10 mt-6 ">
                    <div>
                        <input
                            type="text"
                            id="first_name"
                            className="bg-white border border-gray-300 text-[#C1C4C7] text-[14px] font-somibold rounded-lg 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5"
                            placeholder="Prix de vente"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="first_name"
                            className="bg-white border border-gray-300 text-[#C1C4C7] text-[14px] font-somibold rounded-lg 
                                            focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5"
                            placeholder="Prix d'achat"
                            required
                        />
                    </div>
                </div>
                <span>
                    <Description/>
                </span>
            </div>
        </div>
    )
}

export default StatiqueModalAjoute
