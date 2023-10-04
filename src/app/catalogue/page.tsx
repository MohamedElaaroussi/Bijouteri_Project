"use client"

import CatalogueCardItem from "@/components/catalogue/CatalogueCardItem";
import SecondSectionGroupComponent from "@/components/second-section/SecondSectionGroupComponent";
import Modal from "@/components/ui/modal/Modal";
import { NextPage } from "next";
import { useState } from "react";

const Catalogue: NextPage = () => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div>
            <div>header</div>
            <SecondSectionGroupComponent setOpenModal={setOpenModal} />
            <CatalogueCardItem />
            {openModal && <Modal setCloseModal={setOpenModal} />}
        </div>
    );
};

export default Catalogue;
