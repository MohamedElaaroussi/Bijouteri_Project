"use client";
import ExportBtn_Conp from "@/components/comptabilite/All_Header/Button/ExportBtn_Conp";
import GernerateurPdf_Conp from "@/components/comptabilite/All_Header/Button/GernerateurPdf_Conp";
import { Header_Conpt } from "@/components/comptabilite/All_Header/Header_Conpt";
import Dtails_Client from "@/components/comptabilite/Details_Id/Dtails_Client";
import Dtails_Commande from "@/components/comptabilite/Details_Id/Dtails_Commande";
import Dtails_Document from "@/components/comptabilite/Details_Id/Dtails_Document";
import NuméroCmd_Conpt from "@/components/comptabilite/Details_Id/NuméroCmd_Conpt";
import { usePathname } from "next/navigation";
import React from "react";

const Page = () => {
  const Name = "Mustapha Lwalidi";
  const Email = "mustapha@gmail.com";
  const tele = "0666 848 552";
  const pathname = usePathname();
  const Pathid = pathname.substring(pathname.lastIndexOf("/") + 1);
  return (
    <div>
      <Header_Conpt path={Pathid} />
      <div className="ml-[2rem] gap-2 md:flex">
        <div>
          <ExportBtn_Conp label="Exporter" />
        </div>
        <div>
          <GernerateurPdf_Conp label="Génération PDF " />
        </div>
      </div>

      {/* Details  */}
      <div>
        <span className="ml-1 w-auto gap-1 pr-[-3rem] md:flex">
          <div className="w-1/3 p-5">
            <Dtails_Commande CommandeId={Pathid} />
          </div>
          <div className="w-1/3 p-5">
            <Dtails_Client />
          </div>
          <div className="w-1/3 p-5">
            <Dtails_Document />
          </div>
        </span>
      </div>

      {/* Details Commande */}

      <div>
        <NuméroCmd_Conpt />
      </div>
    </div>
  );
};

export default Page;
