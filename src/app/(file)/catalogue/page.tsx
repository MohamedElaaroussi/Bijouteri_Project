"use client";

import Modal from "@/components/ui/modal/Modal";
import { useEffect, useState } from "react";
import ExportBtn from "@/components/ui/button/ExportBtn";
import DisplayDate from "@/components/ui/header/IconPlusText";
import HeaderSection from "@/components/ui/header/HeaderSection";
import { usePathname } from "next/navigation";
import Filter_Catalogue from "@/components/ui/modal/Modal_Catalogue/Filter_Catalogue";
import Ajouter_Catalogue from "@/components/ui/modal/Modal_Catalogue/Ajouter_Catalogue";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DropDownCatalogue from "@/components/ui/dropdown/DropDownCatalogue";
import CardItem from "@/components/catalogue/CatalogueCard";
import PathName from "@/components/ui/header/PathName";
import Image from "next/image";
import React, { Suspense } from 'react';
// const CardItem = React.lazy(() => import('@/components/catalogue/CatalogueCard'));



const Catalogue = ({ pageTitle }: { pageTitle: string }) => {
  const [openModal, setOpenModal] = useState(false);
  const [check, setCheck] = useState<any>(false)
  const path = usePathname().slice(1);
  const [forceRender, setForceRender] = useState<number>(0);
  const [Icons, setIcons] = useState<any>(false)
  const [Search, setSearch] = useState<string>("");
  const [StartDate, setStartDate] = useState<any>()
  const [EndDate, setEndDate] = useState<Date>()
  const [RechercheNom_F, setRechercheNom_F] = useState<string>("");


  useEffect(() => {
    setForceRender(0);
    setCheck(false);
    if (check) {
      setForceRender((prev) => prev + 1);
    }
    if (Icons) {
      setForceRender((prev) => prev + 1);
      // Additional logic to refresh the component when Icons is true
    }

    const delay = 200; // Délai en millisecondes après lequel la recherche sera déclenchée
    const timeoutId = setTimeout(() => { }, delay);

    // Effacer le timeout précédent à chaque changement de terme
    return () => clearTimeout(timeoutId);
  }, [check, Icons, setSearch]);

  useEffect(() => {
    // Logic to refresh the component when Icons is true
    if (Icons) {
      refreshComponent();
    }
  }, [Icons]);

  const refreshComponent = () => {
     

  };
  return (
    <div key={forceRender}>
      {/* Header Section */}
      <PathName pageTitle={pageTitle}></PathName>
      <HeaderSection pageTitle={path}></HeaderSection>
      {/* Section 1 */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex-[2]">
          {/* <InputHeader placeholder="Rechercher un catalogue"></InputHeader> */}
          <div
            // style={{marginLeft: "-4rem",position:"fixed"}}
            className="flex items-center bg-white rounded-[10px] gap-4 h-10 w-max">
            <Image className="ml-4 mr-3 " src={"/search.svg"} alt='search' width={12} height={12}></Image>
            <input type="text" name="search" placeholder={"Rechercher un catalogue"}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-[10px] border-none outline-none placeholder:text-[12px] h-full" />
          </div>
        </div>
        <div className="flex gap-2">
          <DropDownCatalogue
            StartDate2={StartDate}
            EndDate2={EndDate}
          >
            <ExportBtn label="Export" />
          </DropDownCatalogue>
          <Ajouter_Catalogue label="Ajouter un catalogue"
            //@ts-ignore
            setCheck={setCheck} />
          <DisplayDate
            setStartDate1={setStartDate}
            setEndDate1={setEndDate}
            icon="/date.svg"
            text="Jan 6,2023 - Jan 22,2023"
          ></DisplayDate>

          <Filter_Catalogue icon="/Filter_H.svg" text="Filter" 
          //@ts-ignore
          setRechercheNom_F1={setRechercheNom_F}></Filter_Catalogue>
        </div>
      </div>
      {/* catalogue card */}
      <CardItem catalogueId="" onDelete={() => { }} setIcons={setIcons} Recherche={Search} RechercheNom_F1={RechercheNom_F} />
      {/* modal for creating a catalogue */}
      {openModal && <Modal setCloseModal={setOpenModal} />}

      {
        !check || !Icons ? (
          <span className='mt-[10rem] '>
            <ToastContainer position='bottom-right'
            />
          </span>
        ) : null
      }
    </div >
  );
};

export default Catalogue;
