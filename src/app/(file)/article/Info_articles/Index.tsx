import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
} from "@nextui-org/react";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import Delete_Articles from "@/components/ui/modal/Modal_Articles/Delete_Articles";
import Update_Articles from "@/components/ui/modal/Modal_Articles/Update_Articles";
import { Spinner } from "@nextui-org/react";

function Articles_Info() {
  //  Start Api pour getter les Article
  const [Article, setArticles] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setloading] = useState(true);

  const fetchUser = async () => {
    const URL = process.env.NEXT_PUBLIC_VERCEL_URL ?? "http://localhost:3000/";
    try {
      const response = await axios.get(
        `api/article?page=${currentPage}&limit=10`,
      );
      const userData = Array.isArray(response.data.result)
        ? response.data.result
        : [response.data.result];
      setArticles(userData);
      setloading(false);
      console.log("---------------");
      console.log(userData);
      console.log("---------------");
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données de l'utilisateur",
        error,
      );
    }
  };

  useEffect(() => {
    fetchUser(); // Charger les données initiales

    const intervalId = setInterval(fetchUser, 3000); // Actualiser toutes les 3 secondes

    return () => {
      clearInterval(intervalId); // Nettoyer l'intervalle lorsque le composant est démonté
    };
  }, [currentPage]);

  //  End Api pour getter les Article

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(Article.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return Article.slice(start, end);
  }, [page, Article]);

  if (loading) {
    return;
    <div className="mt-[8rem] text-center">
      <Spinner label="Chargement des articles" color="warning" />
    </div>;
  }
  return (
    <div className="mb-[42vh] mt-7">
      <Table
        aria-label="Example table with client side pagination"
        bottomContent={
          <div className="flex justify-between">
            <div className="w-[30vh] text-sm text-[var(--textColor)]">
              Résultats: {page} - {rowsPerPage} sur {pages}
            </div>
            <div className="flex w-full justify-end">
              <Pagination
                isCompact
                showControls
                showShadow
                color="secondary"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
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

        <TableBody items={items}>
          {(item) => (
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
                      <img
                        src={"/article.png"}
                        alt="Image"
                        className="relative rounded-[12px]"
                        width={80}
                        height={90}
                      />
                      <img
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
