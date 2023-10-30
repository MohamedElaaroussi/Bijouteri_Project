
'use cient'
import React from 'react';
type HeaderProps = {
    CommandeId: string;
};

const Dtails_Commande = ({ CommandeId }: HeaderProps) => {
    return (
        <div>
            <div className='bg-white px-10 py-8 rounded-[20px] pt-4 pb-4 w-[20rem]'>
                <div>
                    <h3 className=' flex text-[#787878] text-[14px] font-semibold	'>
                        Détails de la commande (#{CommandeId})
                    </h3>
                </div>
                <div className='pt-4'>
                    <div className='flex justify-between border-b-1 pb-2'>
                        <h4 className='text-[#96B0C4] text-[12px]'>Date ajoutée</h4>
                        <h3 className='text-[#787878] text-[12px] font-semibold	'>Oct 5, 2023</h3>
                    </div>
                </div>
                <div className='pt-4'>
                    <div className='flex justify-between border-b-1 pb-2'>
                        <h4 className='text-[#96B0C4] text-[12px]'>Mode de paiement</h4>
                        <h3 className='text-[#787878] text-[12px] font-semibold	'>Cache</h3>
                    </div>

                </div>
                <div className='pt-4'>
                    <div className='flex justify-between border-b-1 pb-2'>
                        <h4 className='text-[#96B0C4] text-[12px]'>Mode de livraison</h4>
                        <h3 className='text-[#787878] text-[12px] font-semibold	'>Magasin</h3>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Dtails_Commande;
