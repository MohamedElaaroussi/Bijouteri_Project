import Image from "next/image";
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { format } from 'date-fns';


const DisplayDate = ({ text, icon, setStartDate1,setEndDate1 }: { text: string, icon: string, setStartDate1: any,setEndDate1:any }) => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });
    //@ts-ignore
    setStartDate1(value.startDate)
    console.log(value.endDate)

    const handleValueChange = (newValue: any) => {
        setValue(newValue);
        
        // Formatez la date ici avant de la passer à setStartDate1
        const formattedDateStart = format(new Date(newValue.startDate), 'dd-MM-yyy');
        const formattedDateEnd = format(new Date(newValue.endDate), 'yyy-MM-dd');
        setStartDate1(formattedDateStart);
        setEndDate1(formattedDateEnd);
    };

    return (
        <div className="mt-3 ">
            <Datepicker
                // @ts-ignore
                value={value}
                setStartDate1={handleValueChange}
                setEndDate1={handleValueChange}
                onChange={handleValueChange}
                primaryColor="orange"
                // placeholder={text}
            />


            {/* <div className="hover:cursor-pointer flex items-center bg-white rounded-[60px]
         border-[1px] p-3 h-[45px] mt-[9px]
         border-[var(--borderColor)] gap-2">
            {text === "Filter" ? (
                <DisplayFilter text="Filter" icon="/path/to/icon.png" />            ) : (
                <>
                    <Image src={icon} alt="date" width={13} height={13} />
                    <p className="text-xs text-[var(--textColor)] font-medium">{text}</p>
                </>
            )}
        </div> */}
        </div>
    );
};

export default DisplayDate;