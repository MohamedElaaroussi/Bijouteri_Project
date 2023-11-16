import React from 'react'
interface CatalogueDisplayProps {
    AllCatalogue2: any
}
const DetailStatus: React.FC<CatalogueDisplayProps> = ({ AllCatalogue2 }) => {
    
    return (
        <div className='bg-white px-10 py-8 rounded-[20px] '>
            <p className='text-sm text-[color:var(--labelText)]'>Statut</p>

            {/* <input type="text" placeholder='Terminer' className='px-5 py-3 catalogue-input mt-2 mb-1 placeholder:text-black' /> */}
            <select id="countries"
                value={AllCatalogue2.status}
                className="px-5 py-3 catalogue-input mt-2 mb-1 placeholder:text-black">
                <option value="Terminer">Terminer</option>
                <option value="Désactiver">Désactiver</option>
            </select>
            <p className='text-sm text-[color:var(--labelText)]'>{"Définissez l'état du produit"}</p>
        </div>
    )
}

export default DetailStatus