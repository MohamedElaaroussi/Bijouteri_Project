import React from 'react'

const Réparateur_Répa = () => {
    return (
        <div className='bg-white px-10 py-8 rounded-[20px] w-[22rem] mt-5 pb-6'>
            <p className='text-sm text-[color:var(--labelText)] mb-2'>Réparateur</p>
            {/* <input type="text" placeholder='Choisir une option' className='px-5 py-3 catalogue-input mt-2 mb-1 placeholder:text-black' /> */}
            <form>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-[16.5rem] p-4 h-10 pl-10 text-sm 
                    text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 
                    " 
                    placeholder="Choisir un réparateur" required/>
                </div>
            </form>
            <p className='text-sm text-[color:var(--labelText)] mt-2'>{"Ajouter un produit à une catégorie"}</p>
        </div>
    )
}

export default Réparateur_Répa
