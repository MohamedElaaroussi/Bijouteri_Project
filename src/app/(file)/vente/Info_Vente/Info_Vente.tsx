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
import { format } from "date-fns"; // Importez la fonction format de date-fns
import Image from "next/image";

function Info_Vente() {
  //  Start Api pour getter les Article
  const [Article, setArticles] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setloading] = useState(true);

  const fetchUser = async () => {
    const URL = process.env.NEXT_PUBLIC_VERCEL_URL ?? "http://localhost:3000/";
    try {
      const response = await axios.get(`api/sale?page=${currentPage}&limit=10`);
      setArticles(response.data.result);
      setloading(false);
      console.log("---------------");
      console.log(response.data.result.date);
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

  const getColorClass = (etat: any) => {
    // Logique pour déterminer la classe CSS en fonction de la valeur d'état (exemple)
    if (etat === "Terminée") {
      return "bg-[#05CD99] rounded-full pl-3 text-white";
    } else if (etat === "Annulé") {
      return "bg-[#D62832] rounded-full pl-3 text-white";
    } else if (etat === "En attente") {
      return "bg-[#FFA94D] rounded-full pl-3 text-white";
    } else {
      return ""; // Valeur par défaut ou vide si aucun état correspondant
    }
  };

  if (loading) {
    return (
      <div className="mt-[8rem] text-center">
        <Spinner label="Chargement des articles" color="warning" />
      </div>
    );
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
        <TableHeader className="bg-[#F7F9FB]">
          <TableColumn className="w-[5rem] text-center" key={"id"}>
            ID
          </TableColumn>
          <TableColumn className="text-center" key={"image"}>
            Images
          </TableColumn>
          <TableColumn className="text-center" key={"Client"}>
            Client
          </TableColumn>
          <TableColumn className="text-center" key={"Etat"}>
            Etat
          </TableColumn>
          <TableColumn className="text-center" key={"Date"}>
            Date
          </TableColumn>
          <TableColumn className="text-center" key={"poid"}>
            Poid
          </TableColumn>
          <TableColumn className="text-center" key={"total"}>
            Total
          </TableColumn>
          <TableColumn key={"action"}>{}</TableColumn>
        </TableHeader>

        <TableBody items={items}>
          {(item) => (
            <TableRow
              key={item._id}
              as={Link}
              href={`/utilisateur/${item._id}`}
            >
              {(columnKey) => (
                <TableCell className="w-[5rem] pb-4">
                  {columnKey === "action" ? (
                    <div className="flex  justify-end  gap-4">
                      <Image
                        src="/Update.svg"
                        alt="Update Icon"
                        width={60}
                        height={50}
                        className="w-20 bg-[red]"
                      />
                      <Delete_Articles
                        onDelete={() => {}}
                        articleId={item._id}
                      />
                    </div>
                  ) : columnKey === "id" ? (
                    <div className="">
                      <div className="text-center text-[#D9A528]">
                        {item._id}
                      </div>
                      <div className="flex justify-start pl-3">
                        {"1"} articles
                      </div>
                    </div>
                  ) : columnKey === "image" ? (
                    <div>
                      <div className="flex justify-center">
                        <span className="mr-[1rem] pt-14">
                          <svg
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_58_11280)">
                              <path
                                d="M6.88037 0.0202637H8.0809C8.08794 0.0535248 8.11455 0.0476552 8.13764 0.0496118C8.50671 0.0797155 8.87297 0.137666 9.2333 0.222963C13.1464 1.12297 15.6848 5.12957 14.8368 9.06652C14.1665 12.1782 11.7154 14.4889 8.58804 14.9627C8.41938 14.9882 8.24447 14.9796 8.07934 15.041H6.8788C6.86706 15.0019 6.83302 15.0132 6.80641 15.0109C6.48126 14.9796 6.15825 14.929 5.8391 14.8594C2.86986 14.22 0.51731 11.6769 0.0790455 8.64156C0.0551757 8.47643 0.0645692 8.30503 -0.00195312 8.14655V6.88537C0.0371777 6.8748 0.0258272 6.84037 0.0297403 6.81415C0.0571319 6.62084 0.0790485 6.42676 0.111527 6.23462C0.647227 3.06816 3.21186 0.564575 6.38693 0.101267C6.55284 0.077006 6.72345 0.0875686 6.88037 0.0202637ZM7.50216 13.8675C10.9907 13.8612 13.83 11.0086 13.8198 7.52007C13.8096 4.03156 10.9774 1.19458 7.49589 1.1938C4.01443 1.19302 1.16845 4.04213 1.17119 7.53299C1.17393 11.0238 4.01952 13.8737 7.50216 13.8675Z"
                                fill="#96B0C4"
                              />
                              <path
                                d="M3.73535 7.66357C3.73535 7.06526 3.91692 6.6403 4.27144 6.294C4.91579 5.66164 5.5625 5.03137 6.21155 4.4032C6.46159 4.16137 6.81729 4.16372 7.04973 4.40085C7.28216 4.63798 7.27551 4.99798 7.02899 5.24099C6.40289 5.85769 5.77211 6.46891 5.14288 7.08248C4.8194 7.39814 4.81849 7.71509 5.14015 8.03336C5.76898 8.65397 6.40094 9.27146 7.02703 9.8952C7.3616 10.2282 7.23168 10.7643 6.79029 10.8891C6.69424 10.9205 6.59137 10.9245 6.49317 10.9007C6.39497 10.8769 6.30532 10.8263 6.23424 10.7545C5.55454 10.0893 4.87288 9.42406 4.20375 8.74671C3.91376 8.45959 3.74595 8.07152 3.73535 7.66357Z"
                                fill="#96B0C4"
                              />
                              <path
                                d="M8.73932 8.09262C8.03222 8.09262 7.32513 8.09458 6.61803 8.09262C6.37503 8.09262 6.19816 7.96779 6.09994 7.74984C6.05982 7.66057 6.04265 7.56269 6.05 7.4651C6.05735 7.36751 6.08898 7.2733 6.14203 7.19106C6.19507 7.10881 6.26784 7.04113 6.35371 6.99418C6.43957 6.94723 6.53582 6.92249 6.63369 6.92222C8.03848 6.92013 9.44302 6.92013 10.8473 6.92222C10.9247 6.92111 11.0015 6.93554 11.0732 6.96465C11.1449 6.99375 11.2101 7.03695 11.2648 7.09167C11.3195 7.1464 11.3627 7.21155 11.3918 7.28326C11.4209 7.35498 11.4354 7.43179 11.4343 7.50918C11.4343 7.84101 11.1815 8.09106 10.8332 8.09262C10.1359 8.09614 9.43858 8.09262 8.74127 8.09262H8.73932Z"
                                fill="#96B0C4"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_58_11280">
                                <rect
                                  width="15"
                                  height="15.0203"
                                  fill="white"
                                  transform="translate(0 0.0202637)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <div className="flex h-[80px] w-[5rem] flex-col justify-center">
                          <img
                            src={"/articles.svg"}
                            alt="Image"
                            className="relative relative top-[15px] h-[6rem] w-[4.5rem] rounded-[12px] pb-2"
                          />
                          <img
                            src={"/Code_Barre.svg"}
                            alt="Image"
                            className="absolute ml-2 mt-[16vh] "
                          />
                        </div>

                        <span className="ml-[1rem] pt-14">
                          <svg
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_58_11284)">
                              <path
                                d="M8.11963 15.0203L6.9191 15.0203C6.91206 14.987 6.88545 14.9929 6.86236 14.9909C6.49329 14.9608 6.12703 14.9029 5.7667 14.8176C1.85362 13.9176 -0.684791 9.91096 0.163174 5.97401C0.833484 2.86233 3.28463 0.551655 6.41197 0.0777819C6.58062 0.0523464 6.75553 0.0609553 6.92067 -0.000479451L8.1212 -0.000479346C8.13294 0.0386509 8.16698 0.0273041 8.19359 0.029652C8.51874 0.0609221 8.84175 0.11149 9.1609 0.181088C12.1301 0.820485 14.4827 3.36359 14.921 6.39897C14.9448 6.5641 14.9354 6.73549 15.002 6.89397L15.002 8.15516C14.9628 8.16572 14.9742 8.20016 14.9703 8.22638C14.9429 8.41968 14.921 8.61377 14.8885 8.8059C14.3528 11.9724 11.7881 14.476 8.61307 14.9393C8.44716 14.9635 8.27655 14.953 8.11963 15.0203ZM7.49784 1.17306C4.00934 1.17932 1.17001 4.03195 1.18018 7.52046C1.19036 11.009 4.02264 13.8459 7.50411 13.8467C10.9856 13.8475 13.8316 10.9984 13.8288 7.50754C13.8261 4.01669 10.9805 1.1668 7.49784 1.17306Z"
                                fill="#96B0C4"
                              />
                              <path
                                d="M11.2646 7.37695C11.2646 7.97526 11.0831 8.40022 10.7286 8.74653C10.0842 9.37888 9.4375 10.0092 8.78845 10.6373C8.53841 10.8792 8.18271 10.8768 7.95027 10.6397C7.71784 10.4025 7.72449 10.0425 7.97101 9.79954C8.59711 9.18284 9.22789 8.57162 9.85712 7.95804C10.1806 7.64239 10.1815 7.32543 9.85985 7.00717C9.23102 6.38656 8.59906 5.76907 7.97297 5.14532C7.6384 4.81232 7.76832 4.27623 8.20971 4.15141C8.30576 4.12007 8.40864 4.11606 8.50683 4.13983C8.60503 4.1636 8.69468 4.21422 8.76576 4.28601C9.44546 4.95124 10.1271 5.61646 10.7963 6.29382C11.0862 6.58094 11.2541 6.96901 11.2646 7.37695Z"
                                fill="#96B0C4"
                              />
                              <path
                                d="M6.26068 6.9479C6.96778 6.9479 7.67487 6.94595 8.38197 6.9479C8.62497 6.9479 8.80184 7.07273 8.90006 7.29069C8.94018 7.37995 8.95735 7.47783 8.95 7.57543C8.94265 7.67302 8.91102 7.76722 8.85797 7.84947C8.80493 7.93172 8.73216 7.99939 8.64629 8.04635C8.56043 8.0933 8.46418 8.11804 8.36631 8.11831C6.96152 8.12039 5.55698 8.12039 4.15271 8.11831C4.07532 8.11941 3.9985 8.10499 3.92678 8.07588C3.85507 8.04677 3.78993 8.00358 3.7352 7.94885C3.68047 7.89413 3.63728 7.82898 3.60817 7.75726C3.57907 7.68555 3.56464 7.60873 3.56575 7.53135C3.56575 7.19952 3.81853 6.94947 4.1668 6.9479C4.86411 6.94438 5.56142 6.9479 6.25873 6.9479L6.26068 6.9479Z"
                                fill="#96B0C4"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_58_11284">
                                <rect
                                  width="15"
                                  height="15.0203"
                                  fill="white"
                                  transform="translate(15 15.0203) rotate(-180)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                  ) : columnKey === "Client" ? (
                    <div>
                      <div className="flex justify-center">
                        <svg
                          width="16"
                          height="21"
                          viewBox="0 0 16 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_58_11179)">
                            <path
                              d="M8.44472 0C8.75783 0.0917077 9.08451 0.115042 9.40033 0.201865C11.9302 0.899169 13.6422 3.40349 13.3693 6.02015C13.1028 8.57059 11.2269 10.5372 8.68512 10.9322C5.81233 11.3788 2.96234 9.29557 2.51574 6.42225C2.07131 3.56629 3.72259 0.981652 6.49336 0.188299C6.76468 0.1107 7.04632 0.106359 7.30733 0H8.44472ZM7.93463 1.62795C6.91084 1.62607 5.92805 2.03015 5.20168 2.75164C4.47531 3.47313 4.0646 4.45317 4.05958 5.47695C4.05252 7.60902 5.77652 9.35255 7.89882 9.35961C8.92228 9.36163 9.90482 8.95789 10.6312 8.23684C11.3575 7.51579 11.7684 6.53622 11.7739 5.51277C11.782 3.37853 10.0575 1.635 7.93463 1.6274V1.62795Z"
                              fill="#7E7E80"
                            />
                            <path
                              d="M14.9414 20.8296C14.9382 20.7867 14.9007 20.7797 14.8719 20.7661C14.5285 20.6033 14.3798 20.332 14.37 19.9565C14.3206 18.0718 13.5501 16.5454 12.0605 15.3982C11.0968 14.6488 9.91038 14.2426 8.68955 14.244C7.94015 14.2375 7.18967 14.2022 6.4419 14.3167C4.08029 14.6792 2.06924 16.6794 1.70729 19.0426C1.67039 19.2836 1.62209 19.531 1.63349 19.7692C1.65682 20.2685 1.4886 20.6331 1.01433 20.8296H0.567727C0.546564 20.7585 0.473848 20.7617 0.424467 20.7324C0.146088 20.5658 -0.00476887 20.3227 0.000114973 19.9972C0.0343018 17.8097 0.850445 15.9653 2.47079 14.5017C3.88168 13.2309 5.55304 12.6139 7.44851 12.6133C8.17783 12.6133 8.90987 12.5699 9.63539 12.6871C12.2477 13.1088 14.1329 14.5224 15.3006 16.891C15.7646 17.832 15.9654 18.8446 15.9996 19.8913C16.0148 20.3624 15.7901 20.6467 15.388 20.8296H14.9414Z"
                              fill="#7E7E80"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_58_11179">
                              <rect width="16" height="20.8296" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div>{item?.Client_Nom}</div>
                      <div className="flex justify-center">
                        {item?.client.username}
                      </div>
                    </div>
                  ) : columnKey === "Date" ? (
                    <div className="w-[5rem]">
                      {format(new Date(item.date), "yyyy-MM-dd")}
                    </div>
                  ) : columnKey === "Etat" ? (
                    <div>
                      <div className={getColorClass(item.status)}>
                        <div>{item.status}</div>
                      </div>
                    </div>
                  ) : columnKey === "poid" ? (
                    item.totalWeight
                  ) : columnKey === "total" ? (
                    item.totalPrice
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

export default Info_Vente;
