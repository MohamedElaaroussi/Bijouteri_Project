import { numberPerPage, numbers } from "@/utils/seed";
import Image from "next/image";
import { useState } from "react";
import Select from "react-select";
type PaginationProps = {
  lenPAge: number;
  setCurrentPage: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ lenPAge, setCurrentPage }) => {
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(lenPAge / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  const startItem = (page);
  const endItem = Math.min(page * itemsPerPage, lenPAge);

  // request for the previous page
  const prevPage = () => setPage((pg) => pg - 1);

  // request for the next page
  const nextPage = () => setPage((pg) => pg + 1);


  return (
    <div className="mt-6 flex items-center justify-between rounded-[20px] bg-white px-8 py-2 text-sm text-[var(--textColor)]">
      <p className="text-sm text-[var(--textColor)]">
        Résultats: {startItem} - {endItem} sur {totalPages}
      </p>
      <div className="flex items-center gap-2">
        <Select
          menuPlacement="top"
          defaultValue={numberPerPage[1]}
          className=""
          options={numberPerPage}
        ></Select>

        <button
          onClick={prevPage}
          disabled={page == 1}
          className="relative h-[9px] w-[5px]"
        >
          <Image src="/minus-arrow.svg" alt="previous" fill></Image>
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => {
              setCurrentPage(number);
              setPage(number);
            }}
            className={`rounded-[10px] px-2 py-1 outline-none ${page === number ? "bg-[color:var(--goldColor)] text-white" : ""}`}
          >
            {number}
          </button>
        ))}
        <button
          onClick={nextPage}
          disabled={page == numbers.length}
          className="relative h-[9px] w-[5px]"
        >
          <Image src="/greater-arrow.svg" alt="previous" fill></Image>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
