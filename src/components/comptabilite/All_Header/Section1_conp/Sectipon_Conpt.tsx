"use client";
import React, { useState } from "react";

import InputHeader from "@/components/ui/Input/InputHeader";
import ExportBtn from "@/components/ui/button/ExportBtn";
// import GoldBtn from "@/components/ui/button/GoldBtn";
import DisplayDate from "@/components/ui/header/IconPlusText";
import DropDown from "@/components/ui/DropDown";
import DisplayFilter from "@/components/ui/header/DisplayFilter";

const Sectipon_Conpt = () => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div className="flex justify-between items-center pt-[1rem] pl-[-3px] pr-[-8rem]">
            <div className="flex-[2] pl-[13px]">
                <InputHeader placeholder="Rechercher un catalogue"></InputHeader>
            </div>
            <div className="flex gap-2 pr-[6px]" >
                <DropDown>
                    <ExportBtn label="Export" />
                </DropDown>

                {/* <GoldBtn label="Ajouter un catalogue" setOpenModal={setOpenModal} /> */}
                <DisplayDate icon="/date.svg" text="Jan 6, 2023 - Jan 22, 2023"></DisplayDate>
                <DisplayFilter icon="/Filter_H.svg" text="Filter"></DisplayFilter>
            </div>
        </div>
    );
};

export default Sectipon_Conpt;
