"use client";

import CatalogueCardItem from "@/components/catalogue/CatalogueCardItem";
import Modal from "@/components/ui/modal/Modal";
import { NextPage } from "next";
import { useState } from "react";
import PathName from "@/components/ui/header/PathName";
import InputHeader from "@/components/ui/Input/InputHeader";
import ExportBtn from "@/components/ui/button/ExportBtn";
import GoldBtn from "@/components/ui/button/GoldBtn";
import DisplayDate from "@/components/ui/header/IconPlusText";
import DropDown from "@/components/ui/DropDown";
import HeaderSection from "@/components/ui/header/HeaderSection";
import Pagination from "@/components/ui/pagination/Pagination";
import { usePathname } from "next/navigation";
import Filter_Articles from "@/components/ui/modal/Modal_Articles/Filter_Articles";
<<<<<<< HEAD
import Filter_Catalogue from "@/components/ui/modal/Modal_Catalogue/Filter_Catalogue";
=======
>>>>>>> dev-rguig

const Catalogue: NextPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const path = usePathname().slice(1);
  return (
    <div>
      {/* Header Section */}
      <HeaderSection pageTitle={path}></HeaderSection>

      {/* Section 1 */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex-[2]">
          <InputHeader placeholder="Rechercher un catalogue"></InputHeader>
        </div>
        <div className="flex gap-2">
          <DropDown>
            <ExportBtn label="Export" />
          </DropDown>

          <GoldBtn label="Ajouter un catalogue" setOpenModal={setOpenModal} />
          <DisplayDate
            icon="/date.svg"
            text="Jan 6, 2023 - Jan 22, 2023"
          ></DisplayDate>
<<<<<<< HEAD
          <Filter_Catalogue icon="/Filter_H.svg" text="Filter"></Filter_Catalogue>
=======
          <Filter_Articles icon="/Filter_H.svg" text="Filter"></Filter_Articles>
>>>>>>> dev-rguig
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
