import Image from 'next/image'

const DetailImage = ({ src }: { src: string }) => {
    return (
        <div className='bg-white py-5 px-7 rounded-[20px] flex flex-col items-center gap-2'>
            <p className='text-sm text-[color:var(--labelText)] self-start'>Image</p>
            <div className='relative'>
                <Image src={src} alt='' width={192} height={254}></Image>
                <div className='bg-white p-2 rounded-full w-max absolute -top-2 -right-2 border-[1px] hover:cursor-pointer'>
                    <Image src={"/edit.svg"} alt='' width={18} height={18}></Image>
                </div>
            </div>
            <p className='text-sm text-center text-[color:#96B0C4]'>Définissez l’image miniature du produit. Seuls les fichiers image *.png, *.jpg et *.jpeg sont acceptés</p>
        </div>
    )
}

export default DetailImage