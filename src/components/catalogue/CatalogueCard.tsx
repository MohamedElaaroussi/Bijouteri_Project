import axios from "axios";
import Image from "next/image";
import { Spinner } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useState, useMemo } from "react";
import Delete_Catalogue from "../ui/modal/Modal_Catalogue/Delete_Catalogue";
import Pagination from "@/components/ui/pagination/Pagination";

interface DeleteUserProps {
  catalogueId: string;
  onDelete: () => void;
  setIcons: React.Dispatch<React.SetStateAction<boolean>>;
  Recherche: string;
  RechercheNom_F1: string;
}

const CardItem = ({ setIcons, Recherche, RechercheNom_F1 }: any) => {
  const [Catalogue, setCatalogue] = useState<any[]>([]);
  const lenCatalogue = Catalogue.length;
  const [DeleteCatalogueIcon, setDeleteCatalogueIcon] =
    useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setloading] = useState(true);
  const [CatalogueFilter, setCatalogueFilter] = useState<any[]>([]);

  setIcons(DeleteCatalogueIcon);

  useEffect(() => {
    const fetchCatalogue = async () => {
      const baseURL =
        process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000/";

      try {
        let url = `api/catalogue?page=${currentPage}&limit=10`;
        let searchQuery = Recherche.trim();
        // Ajoutez la recherche à l'URL si la recherche n'est pas vide
        if (searchQuery) {
          url += `&search=${searchQuery}`;
        }

        // Ajoutez la recherche par nom à l'URL si RechercheNom_F1 n'est pas vide
        if (RechercheNom_F1.trim() !== "") {
          url = `api/catalogue/filter?nbrOfArticles=0&startDate=&endDate=&page=1&limit=10&catalogue=${RechercheNom_F1.trim()}`;
        }

        const response = await axios.get(url);

        if (response.data.message === "the Filter was applied successfully") {
          setCatalogueFilter(response.data.filtered.result);
          console.log("aa", response.data.filtered.result);
        } else {
          setCatalogue(response.data.result);
          console.log("bb", response.data.result);
        }

        setloading(false);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données du catalogue",
          error,
        );
      }
    };

    fetchCatalogue();
  }, [currentPage, Recherche, RechercheNom_F1]);

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 9;

  const pages = Math.ceil(Catalogue.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return Catalogue.slice(start, end);
  }, [page, Catalogue]);

  return (
    <div>
      {loading ? (
        <div className="ml-[500px] mt-[230px] h-[450px]">
          <Spinner label="Loading..." color="warning" />
        </div>
      ) : !lenCatalogue ? (
        <div>
          <div className="h-[30rem] bg-[#FFF] ">
            <div className=" rounded-lg pl-[44%] pt-[14%]">
              <Image
                src={"/search2.svg"}
                width={130}
                height={130}
                alt="Not Found"
              ></Image>
            </div>
            <p className="mt-6 text-center text-[15px] font-normal text-[#96B0C4]">
              <h5>{`Il n'y a pas encore xxxxxxxxxxxx ajouté.`}</h5>
              <br />
              <p className="mb-4">{`Démarrez votre entreprise en ajoutant votre premier xxxxxxxxxxx`}</p>
            </p>
          </div>
        </div>
      ) : Catalogue ? (
        <div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            {CatalogueFilter.map((item: any) => (
              <div
                key={item._id}
                className="flex gap-2 rounded-3xl bg-white p-3"
              >
                <div className="relative h-[158px] w-[119px]">
                  <Link href={`/catalogue/${item._id}`}>
                    <Image
                      className="rounded-lg object-cover"
                      src={`/uploads/${item.img}`}
                      alt="article"
                      style={{ border: "1px solid #EBF1FF" }}
                      fill
                    />
                  </Link>
                </div>

                <div className="flex flex-col gap-2">
                  <div>
                    <p className="max-w-[9rem] overflow-hidden whitespace-nowrap text-[12px] font-medium text-[color:var(--textColor)]">
                      {item.catalogue}
                    </p>

                    <p className="mt-1 font-inter text-[11px] font-normal text-[color:var(--softTextColor)]">
                      Description:{" "}
                    </p>
                    <p className="h-[3.6rem] max-h-[3.6rem] w-[11rem] overflow-hidden text-[12px] text-[color:var(--textColor)]">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] text-[#C1C4C7]">
                      {`Nombre d'articles`}
                    </p>
                    <p className=" text-[12px] font-medium text-[color:var(--textColor)]">
                      {item.nbrOfArticles}
                    </p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Link href={`/catalogue/${item._id}`}>
                      <Image
                        style={{ paddingTop: "2px" }}
                        src="/edit.svg"
                        alt="edit icon"
                        width={15}
                        height={15}
                        className="mt-[10px]  hover:cursor-pointer "
                      />
                    </Link>
                    <Delete_Catalogue
                      catalogueId={item._id}
                      onDelete={() => {}}
                      //@ts-ignore
                      setDeleteCatalogueIcon={setDeleteCatalogueIcon}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Pagination lenPAge={lenCatalogue} setCurrentPage={setCurrentPage} />
        </div>
      ) : CatalogueFilter ? (
        <div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            {CatalogueFilter.map((item: any) => (
              <div
                key={item._id}
                className="flex gap-2 rounded-3xl bg-white p-3"
              >
                <div className="relative h-[158px] w-[119px]">
                  <Link href={`/catalogue/${item._id}`}>
                    <Image
                      className="rounded-lg object-cover"
                      src={`/uploads/${item.img}`}
                      alt="article"
                      style={{ border: "1px solid #EBF1FF" }}
                      fill
                    />
                  </Link>
                </div>

                <div className="flex flex-col gap-2">
                  <div>
                    <p className="max-w-[9rem] overflow-hidden whitespace-nowrap text-[12px] font-medium text-[color:var(--textColor)]">
                      {item.catalogue}
                    </p>

                    <p className="mt-1 font-inter text-[11px] font-normal text-[color:var(--softTextColor)]">
                      Description:{" "}
                    </p>
                    <p className="h-[3.6rem] max-h-[3.6rem] w-[11rem] overflow-hidden text-[12px] text-[color:var(--textColor)]">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] text-[#C1C4C7]">
                      {`Nombre d'articles`}
                    </p>
                    <p className=" text-[12px] font-medium text-[color:var(--textColor)]">
                      {item.nbrOfArticles}
                    </p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Link href={`/catalogue/${item._id}`}>
                      <Image
                        style={{ paddingTop: "2px" }}
                        src="/edit.svg"
                        alt="edit icon"
                        width={15}
                        height={15}
                        className="mt-[10px]  hover:cursor-pointer "
                      />
                    </Link>
                    <Delete_Catalogue
                      catalogueId={item._id}
                      onDelete={() => {}}
                      //@ts-ignore
                      setDeleteCatalogueIcon={setDeleteCatalogueIcon}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Pagination lenPAge={lenCatalogue} setCurrentPage={setCurrentPage} />
        </div>
      ) : null}
    </div>
  );
};

export default CardItem;
