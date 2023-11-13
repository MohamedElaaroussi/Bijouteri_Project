import React from 'react'

const DetailStatus = () => {
    return (
        <div className='bg-white px-10 py-8 rounded-[20px] '>
            <p className='text-sm text-[color:var(--labelText)]'>Statut</p>
           
            <input type="text" placeholder='Terminer' className='px-5 py-3 catalogue-input mt-2 mb-1 placeholder:text-black' />
            {/* <select id="countries"
                className="px-5 py-3 catalogue-input mt-2 mb-1 placeholder:text-black">
                <option selected>Active</option>
                <option value="US">calme</option>
                <option value="CA">Arréter</option> 
            </select> */}
            <p className='text-sm text-[color:var(--labelText)]'>{"Définissez l'état du produit"}</p>
        </div>
    )
}

export default DetailStatus