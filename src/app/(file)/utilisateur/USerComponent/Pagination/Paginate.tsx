import { numberPerPage, numbers } from "@/utils/seed";
import Image from "next/image";
import { useState } from "react";
import Select from "react-select";
type PaginationProps = {
  currentPage: number;
  onPageChange: (newPage: number) => void;
};

const Pagination = ({ currentPage, onPageChange }: PaginationProps) => {
  const [page, setPage] = useState<number>(1);

  // request for the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  const totalPages = 10;
  // request for the next page
  const nextPage = () => {
    // Ajoutez la logique pour déterminer s'il y a une page suivante
    // Vous pouvez obtenir le nombre total de pages depuis votre API
     // Remplacez par le nombre total de pages.

    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="mt-6 flex items-center justify-between rounded-[20px] bg-white px-8 py-2 text-sm text-[var(--textColor)]">
      <p className="text-sm text-[var(--textColor)]">
        Résultats: 1 - 15 sur 300
      </p>
      <div className="flex items-center gap-2">
        <Select
          menuPlacement="top"
          defaultValue={numberPerPage[1]}
          options={numberPerPage}
        ></Select>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="relative h-[9px] w-[5px]"
        >
          <Image src="/minus-arrow.svg" alt="previous" fill></Image>
        </button>
        {numbers.map((number) => (
          <div key={number} className="flex flex-col gap-3">
            <button
              onClick={() => onPageChange(number)}
              className={`rounded-[10px] px-2 py-1 outline-none ${
                currentPage === number
                  ? "bg-[color:var(--goldColor)] text-white"
                  : ""
              }`}
            >
              {number}
            </button>
          </div>
        ))}
        <button
          onClick={nextPage}
          // Assurez-vous que la page suivante n'est pas désactivée lorsque vous atteignez la dernière page
          disabled={currentPage === totalPages}
          className="relative h-[9px] w-[5px]"
        >
          <Image src="/greater-arrow.svg" alt="next" fill></Image>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
