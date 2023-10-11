import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { ReactNode } from "react"

const DropDown = ({ children }: { children: ReactNode }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Image className="mr-3" src={"/csv.svg"} alt="export csv" width={20} height={22}></Image>
                    Exporter au format CSV</DropdownMenuItem>
                <DropdownMenuItem>
                    <Image className="mr-3" src={"/xls.svg"} alt="export csv" width={20} height={22}></Image>
                    Exporter au format Excel
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default DropDown