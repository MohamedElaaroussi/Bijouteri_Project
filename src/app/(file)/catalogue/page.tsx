"use client"

import CatalogueCardItem from "@/components/catalogue/CatalogueCardItem";
import Modal from "@/components/ui/modal/Modal";
import { NextPage } from "next";
import { useState } from "react";
import PathName from "@/components/ui/header/PathName"
import InputHeader from "@/components/ui/Input/InputHeader";
import ExportBtn from "@/components/ui/button/ExportBtn";
import GoldBtn from "@/components/ui/button/GoldBtn";
import DisplayDate from "@/components/ui/header/IconPlusText";
import DropDown from "@/components/ui/DropDown";



const Catalogue: NextPage = () => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div>

            {/* Header Section */}
            <div className="flex justify-between">
                <PathName pathName="Catalogue"></PathName>
                <InputHeader></InputHeader>
            </div>

            {/* Section 1 contain */}
            <div className="flex justify-between items-center my-6">
                <div className="flex-[2]">
                    <InputHeader placeholder="Rechercher un catalogue"></InputHeader>
                </div>
                <div className="flex gap-2">
                    <DropDown>
                        <ExportBtn label="Export" />
                    </DropDown>

                    <GoldBtn label="Ajouter un catalogue" setOpenModal={setOpenModal} />
                    <DisplayDate icon="/date.svg" text="Jan 6, 2023 - Jan 22, 2023"></DisplayDate>
                    <DisplayDate icon="/filter.svg" text="Filter"></DisplayDate>
                </div>
            </div>
            {/* Header Section */}
            <CatalogueCardItem />
            {/* Create a catalogue */}
            {openModal && <Modal setCloseModal={setOpenModal} />}
        </div>
    );
};

export default Catalogue;
