import Image from 'next/image';
import { useState } from 'react';

const DetailImage = ({ src }: { src: string }) => {
    const [imagePreview, setImagePreview] = useState<string | null>(src);
    // console.log('Voici Iimage '+imagePreview)

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                //@ts-ignore
                const base64Image = event.target.result as string;
                setImagePreview(base64Image);
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='bg-white py-5 px-7 rounded-[20px] flex flex-col items-center gap-2 w-[350px] max-h-[40rem]'>
            <p className='text-sm text-[color:var(--labelText)] self-start'>Image</p>
            <div className='relative'>
                <label htmlFor="fileInput" className="cursor-pointer">
                    <div style={{ maxHeight: '40rem', overflow: 'hidden' }}>
                        <Image src={imagePreview || src} alt='' width={192} height={254} />
                    </div>
                    <div className='bg-white p-2 rounded-full w-max absolute -top-2 -right-2 border-[1px]'>
                        <input
                            type="file"
                            id="fileInput"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleImageChange}
                        />
                        <Image src={"/edit.svg"} alt='' width={18} height={18} />
                    </div>
                </label>
            </div>
            <p className='text-sm text-center text-[color:#96B0C4]'>
                Définissez l’image miniature du produit. Seuls les fichiers image *.png, *.jpg et *.jpeg sont acceptés
            </p>
        </div>
    );
};

export default DetailImage;
