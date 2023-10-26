import Image from "next/image"
import DisplayFilter from "./DisplayFilter"

const DisplayDate = ({ text, icon }: { text: string, icon: string }) => {
    const composant = null



    return (
        <div className="hover:cursor-pointer flex items-center bg-white rounded-[60px] border-[1px] p-3 h-[3.2rem] mt-[9px]
         border-[var(--borderColor)] gap-2">
            {text === "Filter" ? (
                <DisplayFilter text="Filter" icon="/path/to/icon.png" />            ) : (
                <>
                    <Image src={icon} alt="date" width={13} height={13} />
                    <p className="text-xs text-[var(--textColor)] font-medium">{text}</p>
                </>
            )}
        </div>
    )
}

export default DisplayDate