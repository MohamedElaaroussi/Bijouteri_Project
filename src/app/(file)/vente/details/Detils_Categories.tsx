import React from 'react'

const Detils_Categories = () => {
    return (
        <div className='bg-white px-10 py-8 rounded-[20px] w-[22rem] mt-5'>
            <p className='text-sm text-[color:var(--labelText)]'>Categories</p>
            <input type="text" placeholder='Choisir une option' className='px-5 py-3 catalogue-input mt-2 mb-1 placeholder:text-black' />
            <p className='text-sm text-[color:var(--labelText)]'>{"Ajouter un produit à une catégorie"}</p>
        </div>
    )
}

export default Detils_Categories
