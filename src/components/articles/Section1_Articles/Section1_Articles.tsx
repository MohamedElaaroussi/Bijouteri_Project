"use client";
import React, { useState } from "react";
import InputHeader from "@/components/ui/Input/InputHeader";
import ExportBtn from "@/components/ui/button/ExportBtn";
import GoldBtn from "@/components/ui/button/GoldBtn";
import DisplayDate from "@/components/ui/header/IconPlusText";
import Filter_Articles from "@/components/ui/modal/Modal_Articles/Filter_Articles";
import DropdownArticles from "@/components/ui/dropdown/DropdownArticles";

const Section1_Articles = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex items-center justify-between pl-[-3px] pr-[-8rem] pt-[3.3rem]">
      <div className="flex-[2] ">
        <InputHeader placeholder="Rechercher un catalogue"></InputHeader>
      </div>
      <div className="flex gap-2 pr-[6px] ">
        <DropdownArticles>
          <ExportBtn label="Export" />
        </DropdownArticles>

        <GoldBtn label="Ajouter un article" />
        <DisplayDate
          icon="/date.svg"
          text="Jan 6, 2023 - Jan 22, 2023"
        ></DisplayDate>
        <Filter_Articles icon="/Filter_H.svg" text="Filter"></Filter_Articles>
      </div>
    </div>
  );
};

export default Section1_Articles;
