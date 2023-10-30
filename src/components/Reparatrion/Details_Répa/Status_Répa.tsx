import React from 'react'

const Status_Répa = () => {
    const newLocal = "Définissez l'état du produit"
    return (
        <div className='bg-white px-10 py-8 rounded-[20px] w-[22rem]'>
            <p className='text-sm text-[color:var(--labelText)] mb-2'>Statut</p>
            <select id="countries"
                className="px-5 py-3 catalogue-input mt-2 mb-1 placeholder:text-black">
                <option className='text-[#787878]' selected>En coure</option>
                <option className='text-[#787878]' value="US">calme</option>
                <option className='text-[#787878]' value="CA">Arréter</option> 
            </select>
            <p className='text-sm text-[color:var(--labelText)] mt-2'>{newLocal}</p>
        </div>
    )
}

export default Status_Répa
