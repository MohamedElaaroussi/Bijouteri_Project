import Image from "next/image";
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { format } from 'date-fns';


const DisplayDate = ({ text, icon, }: { text: string, icon: string, 
    // setStartDate1: any, setEndDate1: any 
}) => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });
    //@ts-ignore
    // setStartDate1(value.startDate)
    console.log(value.endDate)

    const handleValueChange = (newValue: any) => {
        setValue(newValue);

        // Formatez la date ici avant de la passer à setStartDate1
        const formattedDateStart = format(new Date(newValue.startDate), 'dd-MM-yyy');
        const formattedDateEnd = format(new Date(newValue.endDate), 'yyy-MM-dd');
        // setStartDate1(formattedDateStart);
        // setEndDate1(formattedDateEnd);
    };

    return (
        <div className="mt-3 ">
            <Datepicker
                // @ts-ignore
                value={value}
                // setStartDate1={handleValueChange}
                // setEndDate1={handleValueChange}
                onChange={handleValueChange}
                primaryColor="orange"
            // placeholder={text}
            />
        </div>
    );
};

export default DisplayDate;