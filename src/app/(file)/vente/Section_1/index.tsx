"use client";
import React, { useState } from "react";
import InputHeader from "@/components/ui/Input/InputHeader";
import ExportBtn from "@/components/ui/button/ExportBtn";
import GoldBtn from "@/components/ui/button/GoldBtn";
import DisplayDate from "@/components/ui/header/IconPlusText";
import DropDown from "@/components/ui/DropDown";

import Filter_Fournisseur from "@/components/ui/modal/Filter_Fournisseur";

const Section1 = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex items-center justify-between pl-[-3px] pr-[-8rem] pt-[3.3rem]">
      <div className="mt-4 flex ">
        <InputHeader placeholder="Rechercher un catalogue"></InputHeader>
      </div>
      <div className="flex gap-2 pr-[6px] ">
        <DropDown>
          <ExportBtn label="Export" />
        </DropDown>
        {/* @ts-ignore */}
        <GoldBtn label="Ajouter une vente" setOpenModal={setOpenModal} />
        <DisplayDate
          icon="/date.svg"
          // setStartDate1={""}
          // setEndDate1={""}
          text="Jan 6, 2023 - Jan 22, 2023"
        ></DisplayDate>
        <Filter_Fournisseur
          icon="/Filter_H.svg"
          text="Filter"
        ></Filter_Fournisseur>
      </div>
    </div>
  );
};

export default Section1;
