import React, { useState, useEffect } from 'react';

interface CatalogueDetaliProps {
    AllCatalogue3: {
        catalogue: string;
        description: string;
        // ... other properties
    };
}

const DetailBio: React.FC<CatalogueDetaliProps> = ({ AllCatalogue3 }) => {
    const [catalogueName, setCatalogueName] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    // Utilisez useEffect pour mettre à jour les valeurs initiales lorsque AllCatalogue3 change
    useEffect(() => {
        setCatalogueName(AllCatalogue3.catalogue);
        setDescription(AllCatalogue3.description);
    }, [AllCatalogue3]);

    return (
        <div className='bg-white px-10 py-8 rounded-[20px] w-[650px] h-[300px]'>
            <p className='text-[color:var(--labelText)] text-sm'>Nom du produit</p>
            <input
                type='text'
                value={catalogueName}
                onChange={(e) => setCatalogueName(e.target.value)}
                className="px-5 py-3 outline-none border-[1px] rounded-[10px] border-[color:var(--borderColor)] w-full"
            />
            <p className='text-[color:var(--labelText)] text-sm mt-5'>Description</p>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols={10}
                rows={5}
                className="border-[1px] w-full px-5 py-3 resize-none h-[112px]"
            ></textarea>
        </div>
    );
};

export default DetailBio;
