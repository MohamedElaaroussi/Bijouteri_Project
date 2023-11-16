import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
  Spinner,
} from "@nextui-org/react";
import Link from "next/link";
import Delete_Articles from "@/components/ui/modal/Modal_Articles/Delete_Articles";
import Update_Articles from "@/components/ui/modal/Modal_Articles/Update_Articles";
import { useQuery, useQueryClient } from "react-query";
import { getArticle } from "../../../../api/article";
import Image from "next/image";

function Articles_Info() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const { isLoading, isSuccess, isError, data } = useQuery(
    ["articles", page, limit],
    () => getArticle(page, limit),
  );

  if (isLoading) {
    return (
      <div className="mt-[8rem] text-center">
        <Spinner label="Chargement des articles" color="warning" />
      </div>
    );
  }

  if (isError) {
    return <p>Something went wrong!</p>;
  }
  const totalPages = Math.ceil(data.total / limit);
  return (
    <div className="mb-[42vh] mt-7">
      <Table
        aria-label="Example table with client side pagination"
        bottomContent={
          <div className="flex justify-between">
            <div className="w-[30vh] text-sm text-[var(--textColor)]">
              Résultats: {page} - {limit} sur {totalPages}
            </div>
            <div className="flex w-full justify-end">
              <Pagination
                isCompact
                showControls
                showShadow
                color="warning"
                page={page}
                initialPage={1}
                total={totalPages}
                onChange={(page) => {
                  setPage(() => page);
                }}
              />
            </div>
          </div>
        }
        classNames={{
          wrapper: "min-h-[222px]",
        }}
      >
        <TableHeader>
          <TableColumn key={"Image"}>
            <div className="flex justify-center">Image</div>
          </TableColumn>
          <TableColumn key={"Nom"}>
            <div className="flex justify-center">Nom</div>
          </TableColumn>
          <TableColumn key={"Couleur"}>
            <div className="flex justify-center">Couleur</div>
          </TableColumn>
          <TableColumn key={"Type"}>
            <div className="flex justify-center">Type</div>
          </TableColumn>
          <TableColumn key={"Poids"}>
            <div className="flex justify-center">Poids</div>
          </TableColumn>
          <TableColumn key={"Cout"}>
            <div className="flex justify-center">Cout</div>
          </TableColumn>
          <TableColumn key={"Prix"}>
            <div className="flex justify-center">Prix de vente</div>
          </TableColumn>
          <TableColumn key={"action"}>{""} </TableColumn>
        </TableHeader>

        <TableBody items={data.result}>
          {(item:any) => (
            <TableRow key={item._id} as={Link} href={`/article/${item._id}`}>
              {(columnKey) => (
                <TableCell className="border-b-1 pb-5">
                  {columnKey === "action" ? (
                    <div className="flex  justify-end  gap-4">
                      <Update_Articles />
                      <Delete_Articles
                        onDelete={() => {}}
                        articleId={item._id}
                      />
                    </div>
                  ) : columnKey === "Nom" ? (
                    <div className="flex w-[9rem] flex-col ">
                      <div className="h-[1.4rem] max-h-[1.4rem] w-[13rem] overflow-hidden ">
                        {item.description}{" "}
                      </div>
                      <div className="flex flex-row gap-2">
                        <span className="font-somibold text-[12px] text-[#96B0C4]  ">
                          {" "}
                          Code bar :
                        </span>
                        <div className=" textè-[15px] font-bold text-[#D9A528]  ">
                          {item.barCode}
                        </div>
                      </div>
                    </div>
                  ) : columnKey === "Couleur" ? (
                    <div
                      className={`ml-4 h-3 w-3 rounded-full`}
                      style={{ background: item.color }}
                    ></div>
                  ) : columnKey === "Type" ? (
                    <div className="text-center">{item.typeArticle}</div>
                  ) : columnKey === "Poids" ? (
                    <div className="text-center">{item.weight}</div>
                  ) : columnKey === "Cout" ? (
                    <div className="text-center">{item.sellPrice}</div>
                  ) : columnKey === "Prix" ? (
                    <div className="text-center">{item.buyPrice}</div>
                  ) : columnKey === "Image" ? (
                    <div className="flex h-[80px] justify-center">
                      <Image
                        src={"/article.png"}
                        alt="Image"
                        className="relative rounded-[12px]"
                        width={80}
                        height={90}
                      />
                      <Image
                        src={"/Code_Barre.svg"}
                        alt="Image"
                        className="absolute mt-[9.5vh]"
                        width={60}
                        height={40}
                      />
                    </div>
                  ) : columnKey === "Nom" ? (
                    item.name
                  ) : (
                    getKeyValue(item, columnKey)
                  )}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
export default Articles_Info;
