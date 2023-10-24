import React from 'react'

const Details_Status = () => {
    const newLocal = "Définissez l'état du produit"
    return (
        <div className='bg-white px-10 py-8 rounded-[20px] w-[22rem]'>
            <p className='text-sm text-[color:var(--labelText)]'>Statut</p>
            <select id="countries"
                className="px-5 py-3 catalogue-input mt-2 mb-1 placeholder:text-black">
                <option className='text-[#787878]' selected>Active</option>
                <option className='text-[#787878]' value="US">calme</option>
                <option className='text-[#787878]' value="CA">Arréter</option> 
            </select>
            <p className='text-sm text-[color:var(--labelText)]'>{newLocal}</p>
        </div>
    )
}

export default Details_Status
