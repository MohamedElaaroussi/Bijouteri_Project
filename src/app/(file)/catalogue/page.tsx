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
import HeaderSection from "@/components/ui/header/HeaderSection";
import Pagination from "@/components/ui/pagination/Pagination";



const Catalogue: NextPage = () => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div>

            {/* Header Section */}
            <HeaderSection pageTitle="Catalogue"></HeaderSection>

            {/* Section 1 */}
            <div className="flex justify-between items-center mb-6">
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
            {/* catalogue card */}
            <CatalogueCardItem />
            {/* modal for creating a catalogue */}
            {openModal && <Modal setCloseModal={setOpenModal} />}
            <Pagination />
        </div>
    );
};

export default Catalogue;
