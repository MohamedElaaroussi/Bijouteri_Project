import CatalogueCard from "@/components/catalogue/CatalogueCard";
import CatalogueCardItem from "@/components/catalogue/CatalogueCardItem";
import ExportBtn from "@/components/ui/button/ExportBtn";
import GoldBtn from "@/components/ui/button/GoldBtn";
import Modal from "@/components/ui/button/modal/Modal";
import { NextPage } from "next";
import Image from "next/image";

const Catalogue: NextPage = () => {
    return (
        <div>
            <div>header</div>



            <CatalogueCardItem />
            {<Modal />}
        </div>
    );
};

export default Catalogue;
