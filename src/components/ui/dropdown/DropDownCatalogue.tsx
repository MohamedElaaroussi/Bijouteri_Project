import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";




const DropDownCatalogue = ({ children, StartDate2, EndDate2 }: { children: ReactNode, StartDate2: any, EndDate2: any }) => {


  const [Catalogue, setCatalogue] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);




  const LinkExprot = `http://localhost:3000/api/catalogue/export?startDate=${StartDate2}&endDate=${EndDate2 =="1970-01-01"? "" : EndDate2}`


  return (
    <div className="ml-[-4]">
      <DropdownMenu>
        <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
        <DropdownMenuContent className="mr-[2px]">
          <DropdownMenuItem
            // onClick={() => exportDataAsCSV(yourData)}
          >
            <Image className="mr-3" src={"/csv.svg"} alt="export csv" width={20} height={22}></Image>
            Exporter au format CSV
          </DropdownMenuItem>
          <DropdownMenuItem
          >
            <Link href={LinkExprot} className="flex gap-0">  
             <Image className="mr-3" src={"/xls.svg"} alt="export excel" width={20} height={22}></Image>
                Exporter au format Excel
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDownCatalogue;
