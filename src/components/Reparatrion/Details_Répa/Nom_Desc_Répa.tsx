import React from 'react'

const Nom_Desc_Répa = () => {
    return (
        <div className='bg-white px-10 py-8 rounded-[20px] h-[18rem] w-[40rem]  ml-[1.6rem]
        mt-[5rem]'>
            <p className='text-[color:var(--labelText)] text-sm'>Nom du produit</p>
            <input type="text" className="px-5 py-3 outline-none border-[1px] rounded-[10px] border-[color:var(--borderColor)] w-full" />
            <p className='text-[color:var(--labelText)] text-sm mt-5'>Description</p>
            <textarea cols={10} rows={5} className="border-[1px] w-full px-5 py-3 resize-none h-[112px]"></textarea>
        </div>
    )
}

export default Nom_Desc_Répa
