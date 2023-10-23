import Image from "next/image"

const InputHeader_F = ({ placeholder = "Recherche" }: { placeholder?: string }) => {
    return (
        <div className="flex items-center bg-white rounded-[10px] gap-4 h-10 w-max">
            <Image className="ml-2" src={"/search.svg"} alt='search' width={12} height={12}></Image>
            <input type="text" name="search" placeholder={placeholder}
                className="rounded-[10px] border-none outline-none placeholder:text-[12px] h-full" />
        </div>
    )
}

export default InputHeader_F