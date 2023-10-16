import Image from "next/image"

const DisplayDate = ({ text, icon }: { text: string, icon: string }) => {
    return (
        <div className="hover:cursor-pointer flex items-center bg-white rounded-[60px] border-[1px] p-3 border-[var(--borderColor)] gap-2">
            <Image src={icon} alt="date" width={"13"} height={"13"}></Image>
            <p className="text-xs text-[var(--textColor)] font-medium">{text}</p>
        </div>
    )
}

export default DisplayDate