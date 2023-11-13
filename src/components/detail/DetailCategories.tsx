import React from 'react'

interface CatalogueDisplayProps {
    AllCatalogue: any
}


const DetailCategories: React.FC<CatalogueDisplayProps> = ({ AllCatalogue }) => {
    
    return (
        <div className='bg-white px-10 py-8 rounded-[20px]'>
            <p className='text-sm text-[#96B0C4] text-[12px]'>Nombre d’articles</p>
            {/* <p >{AllCatalogue.nbrOfArticles}</p> */}
            <input
            className='text-sm text-[#787878] text-[20px] font-semibold h-[2rem] '
            type="number" 
            placeholder={AllCatalogue.nbrOfArticles}
            />

            {/* <p className='text-sm text-[color:var(--labelText)]'>Categories</p>
            <input type="text" placeholder='Choisir une option' className='px-5 py-3 catalogue-input mt-2 mb-1 placeholder:text-black' />
            <p className='text-sm text-[color:var(--labelText)]'>{"Ajouter un produit à une catégorie"}</p> */}
        </div>)
}

export default DetailCategories