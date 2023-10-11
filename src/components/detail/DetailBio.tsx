import React from 'react'

const DetailBio = ({ register }: { register: any }) => {
    return (
        <div className='bg-white px-10 py-8 rounded-[20px] '>
            <p className='text-[color:var(--labelText)] text-sm'>Nom du produit</p>
            <input {...register("catalogue")} type="text" className="px-5 py-3 outline-none border-[1px] rounded-[10px] border-[color:var(--borderColor)] w-full" />
            <p className='text-[color:var(--labelText)] text-sm mt-5'>Description</p>
            <textarea {...register("description")} cols={10} rows={5} className="border-[1px] w-full px-5 py-3 resize-none h-[112px]"></textarea>
        </div>)
}

export default DetailBio