"use client";
import React, { useState } from "react";

import InputHeader from "@/components/ui/Input/InputHeader";
import ExportBtn from "@/components/ui/button/ExportBtn";
import GoldBtn from "@/components/ui/button/GoldBtn";
import DisplayDate from "@/components/ui/header/IconPlusText";
import DropDown from "@/components/ui/DropDown";
import Filter_Vente from "@/components/ui/modal/Filter_Vente";

const Section1_vente = () => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div className="flex justify-between items-center pt-[3.3rem] pl-[-3px] pr-[-8rem]">
            <div className="flex-[2] ">
                <InputHeader placeholder="Rechercher un catalogue"></InputHeader>
            </div>
            <div className="flex gap-2 pr-[6px] " >
                <DropDown>
                    <ExportBtn label="Export" />
                </DropDown>

                <GoldBtn label="Ajouter un catalogue" setOpenModal={setOpenModal} />
                <DisplayDate icon="/date.svg" text="Jan 6, 2023 - Jan 22, 2023"></DisplayDate>
                <Filter_Vente icon="/Filter_H.svg" text="Filter"></Filter_Vente>
            </div>
        </div>
    );
};

export default Section1_vente;
