import Image from 'next/image'
import React from 'react'

const route = () => {

    return (
        <div>
            <div>
                <div className=''>
                    <div className='bg-white p-10'>
                        <p className='text-xs text-[color:var(--softTextColor)]'>Image</p>
                        <div className='relative w-[119px]'>
                            <Image src={"/article.png"} alt='' width={119} height={256}></Image>
                            <div className='bg-white p-1 rounded-full w-max absolute -top-1 -right-1 border-[1px]'>
                                <Image src={"/edit.svg"} alt='' width={14} height={14}></Image>
                            </div>
                        </div>
                        <p className='text-sm'>Définissez l’image miniature du produit. Seuls les fichiers image *.png, *.jpg et *.jpeg sont acceptés</p>
                    </div>
                    <div className='bg-white p-10'>
                        <p className='text-xs text-[color:var(--softTextColor)]'>Statut</p>
                        <input type="text" placeholder='statut' className='px-5 py-3 catalogue-input mt-2 mb-1 placeholder:text-black' />
                        <p className='text-xs text-[color:var(--softTextColor)]'>{"Définissez l'état du produit"}</p>
                    </div>
                    <div className='bg-white p-10'>
                        <p className='text-xs text-[color:var(--softTextColor)]'>Categories</p>
                        <input type="text" placeholder='Choisir une option' className='px-5 py-3 catalogue-input mt-2 mb-1 placeholder:text-black' />
                        <p className='text-xs text-[color:var(--softTextColor)]'>{"Ajouter un produit à une catégorie"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default route