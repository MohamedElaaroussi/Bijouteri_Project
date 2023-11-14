"use client"
import axios from 'axios';
import Image from 'next/image';
import { Spinner } from '@nextui-org/react';
import Link from 'next/link';
import React, { useEffect, useState, useMemo } from 'react';
import Delete_Catalogue from '../ui/modal/Modal_Catalogue/Delete_Catalogue';
import Pagination from '@/components/ui/pagination/Pagination';
import { any } from 'zod';

interface DeleteUserProps {
  catalogueId: string;
  onDelete: () => void;
  setIcons: React.Dispatch<React.SetStateAction<boolean>>;
  Recherche: string
}



const CardItem: React.FC<DeleteUserProps> = ({ setIcons, Recherche }) => {
  const [Catalogue, setCatalogue] = useState<any[]>([]);
  const lenCatalogue = Catalogue.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setloading] = useState(true);
  const [DeleteCatalogueIcon, setDeleteCatalogueIcon] = useState<boolean>(false);

  setIcons(DeleteCatalogueIcon)



  useEffect(() => {
    const fetchCatalogue = async () => {
      const baseURL = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000/';

      try {
        let url = `api/catalogue?page=${currentPage}&limit=10`;

        // Ajoutez la recherche à l'URL si la recherche n'est pas vide
        if (Recherche.trim() !== '') {
          // Divisez la recherche en mots clés séparés par des espaces
          const keywords = Recherche.trim().split(' ');

          // Ajoutez chaque mot-clé à la requête pour chercher dans le catalogue et la description
          keywords.forEach((keyword) => {
            url += `&search=${keyword}`;
          });
        }

        const response = await axios.get(url);
        const CatalogueData = Array.isArray(response.data.result)
          ? response.data.result
          : [response.data.result];

        setCatalogue(CatalogueData);
        setloading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des données du catalogue', error);
      }
    };

    fetchCatalogue();
  }, [currentPage, Recherche]);

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 9;

  const pages = Math.ceil(Catalogue.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return Catalogue.slice(start, end);
  }, [page, Catalogue]);

  if (loading) {
    return (
      <div className="ml-[30rem] h-[450px] mt-[15rem]">
        <Spinner label="Loading..." color="warning" />
      </div>
    );
  }
  if (Recherche.trim() !== '' && Catalogue.length === 0) {
    // Affiche un message lorsque la recherche n'est pas vide et aucun élément n'est trouvé
    return (
      <div className="ml-[30rem] mt-[15rem] text-[color:var(--textColor)]">
        Aucun élément trouvé.
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item._id} className="flex gap-2 rounded-3xl bg-white p-3">
            <div className="relative h-[158px] w-[119px]">
              <Link href={`/catalogue/${item._id}`}>
                <Image
                  className="rounded-lg object-cover"
                  src={`/uploads/${item.img}`}
                  alt="article"
                  style={{ border: '1px solid #EBF1FF' }}
                  fill
                />
              </Link>
            </div>

            <div className="flex flex-col gap-2 ">
              <div className="">
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
                <p className="text-[10px] text-[#C1C4C7]">Nombre d'articles</p>
                <p className=" text-[12px] font-medium text-[color:var(--textColor)]">
                  {item.nbrOfArticles}
                </p>
              </div>
              <div className="flex justify-end gap-2">
                <Link href={`/catalogue/${item._id}`}>
                  <Image
                    style={{ paddingTop: '2px' }}
                    src="/edit.svg"
                    alt="edit icon"
                    width={15}
                    height={15}
                    className="hover:cursor-pointer  mt-[10px] "
                  />
                </Link>
                <Delete_Catalogue catalogueId={item._id} onDelete={() => { }}
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
  );
};

export default CardItem;
