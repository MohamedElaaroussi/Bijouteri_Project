import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const CustomSelect = ({ placeholder, width }: { placeholder: string, width?: string }) => {
    return (
        <Select>
            <SelectTrigger className={`${width ? "w-[" + width + "]" : "w-[270px]"} h-[45px] text-sm text-[color:var(--softTextColor)] focus:ring-0 focus:ring-offset-0 px-5 py-4`} >
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Jhon Doe</SelectItem>
                <SelectItem value="green">Mark Doe</SelectItem>
                <SelectItem value="red">Med Doe</SelectItem>
            </SelectContent>
        </Select>
    )
}

export default CustomSelect