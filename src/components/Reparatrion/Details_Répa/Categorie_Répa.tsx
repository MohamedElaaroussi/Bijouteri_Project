import React from 'react'

const Categorie_Répa = () => {
    return (
        <div className='bg-white px-10 py-8 rounded-[20px] w-[22rem] mt-5'>
            <p className='text-sm text-[color:var(--labelText)] mb-2'>Categories</p>

            <select id="countries" className="bg-white border border-gray-300 text-gray-900 
            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[16.5rem] p-2.5 
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
            dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
            <p className='text-sm text-[color:var(--labelText)] mt-2'>{"Ajouter un produit à une catégorie"}</p>
        </div>
    )
}

export default Categorie_Répa
