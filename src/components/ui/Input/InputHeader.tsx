import Image from "next/image"

const InputHeader = ({ placeholder = "Recherche" }: { placeholder?: string }) => {
    return (
        <div className="flex items-center bg-white rounded-lg gap-2 p-2 w-max">
            <Image src={"/search.svg"} alt='search' width={12} height={12}></Image>
            <input type="text" name="search" placeholder={placeholder} className="border-none outline-none placeholder:text-[12px]" />
        </div>
    )
}

export default InputHeader