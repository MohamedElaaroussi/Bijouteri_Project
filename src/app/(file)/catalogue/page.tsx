"use client";

import CatalogueCardItem from "@/components/catalogue/CatalogueCardItem";
import Modal from "@/components/ui/modal/Modal";
import { NextPage } from "next";
import { useState } from "react";
import InputHeader from "@/components/ui/Input/InputHeader";
import ExportBtn from "@/components/ui/button/ExportBtn";
import DisplayDate from "@/components/ui/header/IconPlusText";
import DropDown from "@/components/ui/DropDown";
import HeaderSection from "@/components/ui/header/HeaderSection";
import { usePathname } from "next/navigation";
import Filter_Catalogue from "@/components/ui/modal/Modal_Catalogue/Filter_Catalogue";
import Ajouter_Catalogue from "@/components/ui/modal/Modal_Catalogue/Ajouter_Catalogue";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Catalogue: NextPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [check, setCheck] = useState<boolean>()
  const path = usePathname().slice(1);



  const notify = () => toast.success('Information ajouter avec success !', {
    position: toast.POSITION.BOTTOM_RIGHT
  });
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

          <Ajouter_Catalogue label="Ajouter un catalogue"
          //@ts-ignore
          setCheck={setCheck} />
          <DisplayDate
            icon="/date.svg"
            text="Jan 6, 2023 - Jan 22, 2023"
          ></DisplayDate>
          <Filter_Catalogue icon="/Filter_H.svg" text="Filter"></Filter_Catalogue>
        </div>
      </div>
      {/* catalogue card */}
      <CatalogueCardItem />
      {/* modal for creating a catalogue */}
      {openModal && <Modal setCloseModal={setOpenModal} />}

      {
        check ? (<span className='mt-[10rem] '>
          <ToastContainer position='bottom-right' />
        </span>) : ("")
      }

    </div>
  );
};

export default Catalogue;
