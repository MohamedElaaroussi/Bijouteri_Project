import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DisplayDate = ({ text, icon }: { text: string, icon: string }) => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const handleValueChange = (newValue:any) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    
    };

    return (
        <div className="mt-3 ">
            <Datepicker 
            // @ts-ignore
            value={value} 
            onChange={handleValueChange} 
            primaryColor="orange"
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