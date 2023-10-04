import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const CustomSelect = ({ placeholder }: { placeholder: string }) => {
    return (
        <Select>
            <SelectTrigger className="w-[270px] h-[45px] text-sm text-[color:var(--softTextColor)] focus:ring-0 focus:ring-offset-0 px-5 py-4 catalogue-input" >
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Jhon Doe</SelectItem>
                <SelectItem value="light">Mark Doe</SelectItem>
                <SelectItem value="light">Med Doe</SelectItem>
            </SelectContent>
        </Select>
    )
}

export default CustomSelect