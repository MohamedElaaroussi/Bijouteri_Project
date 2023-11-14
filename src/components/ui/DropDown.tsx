import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { ReactNode } from "react";
import * as XLSX from "xlsx";

const exportDataAsCSV = (data:any) => {
  const csvContent = "data:text/csv;charset=utf-8," +
    data.map((row:any) => Object.values(row).join(',')).join('\n');

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "exported_data.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const exportDataAsExcel = (data:any) => {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");
  const blob = XLSX.writeBlob(wb, { bookType: "xlsx", mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "exported_data.xlsx";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const DropDown = ({ children }: { children: ReactNode }) => {
  const yourData = [
    { name: "John Doe", age: 30, city: "New York" },
  { name: "Jane Smith", age: 25, city: "Los Angeles" }
  ];

  return (
    <div className="ml-[-4]">
      <DropdownMenu>
        <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
        <DropdownMenuContent className="mr-[2px]">
          <DropdownMenuItem onClick={() => exportDataAsCSV(yourData)}>
            <Image className="mr-3" src={"/csv.svg"} alt="export csv" width={20} height={22}></Image>
            Exporter au format CSV
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => exportDataAsExcel(yourData)}>
            <Image className="mr-3" src={"/xls.svg"} alt="export excel" width={20} height={22}></Image>
            Exporter au format Excel
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDown;
