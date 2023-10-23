import Image from "next/image"

const DisplayDate_F = ({ text, icon }: { text: string, icon: string }) => {
    return (
        <div className="hover:cursor-pointer flex items-center bg-white rounded-[60px] border-[1px] p-3 border-[var(--borderColor)] gap-2">
            <Image src={icon} alt="date" width={"13"} height={"13"}></Image>
            <p className="text-xs text-[var(--textColor)] font-medium">{"Jan 6, 2023 - Jan 22, 2023"}</p>
        </div>
    )
}

export default DisplayDate_F