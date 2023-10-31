import Image from "next/image";
import Pagination from "../../utilisateur/USerComponent/Pagination/Paginate";
import Link from "next/link";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { useEffect, useState } from "react";
import axios from "axios";

const Articles_Info = () => {
  const [articles, setArticles] = useState<any[]>([]);
  console.log('===============Les articles=====================');
  console.log(articles);
  console.log('====================================');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`/api/article?page=${currentPage}&limit=10`);
        if (Array.isArray(response.data.result)) {
          setArticles(response.data.result);
        } else {
          setArticles([response.data.result]);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données de l'article", error);
      }
    };

    fetchArticles();
  }, [currentPage]);

  if (!articles) {
    return <p>Chargement en cours...</p>;
  }else{
  return (
    <div>
      <div className="mt-[1.6rem] overflow-hidden">
        <Table aria-label="Example static collection table" style={{ height: "auto", minWidth: "100%" }} selectionMode="single">
          <TableHeader>
            <TableColumn>
              <div className="flex justify-center">Image</div>
            </TableColumn>
            <TableColumn>
              <div className="flex justify-center">Nom</div>
            </TableColumn>
            <TableColumn>
              <div className="flex justify-center">Couleur</div>{" "}
            </TableColumn>
            <TableColumn>
              <div className="flex justify-center">Type</div>
            </TableColumn>
            <TableColumn>
              <div className="flex justify-center">Poids</div>
            </TableColumn>
            <TableColumn>
              <div className="flex justify-center">Cout</div>
            </TableColumn>
            <TableColumn>
              <div className="flex justify-center">Prix de vente</div>
            </TableColumn>
            <TableColumn> </TableColumn>
          </TableHeader>
          <TableBody>
            {articles.map((item, i) => (
              <TableRow key={i} className="border-[#F4F7FE]-500 border-b">
                <TableCell>
                  <Link href={`/article/${item._id}`}>
                    <Image
                      width={60}
                      height={90}
                      alt="image"
                      // src={`https://s3-alpha-sig.figma.com/img/7ce4/3520/0197468b4cc19788b75ace5c68ec0eea?Expires=1698019200&Signature=DHkjJJtCR7vd6gsUKdwosVbe-rNNxo7W7t~sh0S22E985Rts6BQ~yVtDo0LVM-8bvf0e5aGZGI1UGbcbtS2OhGDsjnLA8dJsrYMXAG2xNOpLq3PlWRQaNIzmfQBxm02lPAw~eCDL0UCBbAGFFGDbrMl6JjW8k3kecE6JbfeodCOp87eTokR1bVLLqjWw8uWEiXTWxNWjJ5ZCdqSuqpq0t2KaC557pIhZNvdv306VjN5FbURvYuG5jqPx9by7nmZB-nUn1nA8oVuzHosUfh0jP4~eK28ODszNwO-Ac0TJnA6V6eRzn~KgVJH7d78B1CaFXpBS5Q50Dis2DSdk8hn3lQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`}
                      // src={item.img}
                      src={"/article.png"}
                    />
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/article/${item._id}`}>
                    <div className="font-inter text-sm text-center"> {item?.name}</div>
                    <div className="text-xs text-blue-300 text-center">
                      Code Barre :
                      <span className="font-inter text-15 font-normal text-[#D9A528] ">
                        {item.barCode}
                      </span>
                    </div>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/article/${item._id}`}>
                    <div className={`h-4 w-6 rounded-full bg-[${item.color}]`}></div>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/article/${item._id}`}>
                    <div className="font-inter text-14 text-var(--TEXT, #787878) text-center font-normal">
                      {item?.typeArticle}
                    </div>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/article/${item._id}`}>
                    <div className="text-center">
                      {item?.weight} g
                    </div>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/article/${item._id}`}>
                    <div className="text-center">
                      {item?.sellPrice} Dhs
                    </div></Link>
                </TableCell>
                <TableCell>
                  <Link href={`/article/${item.id}`}>
                    <div className="text-center">
                     {item?.buyPrice} Dhs 
                    </div>
                    </Link>
                </TableCell>
                <TableCell>
                  <span className="flex gap-4">
                    <Image src="/Update.svg" width={20} height={20} alt="Update_Icons" />
                    <Image src="/delete.svg" width={20} height={20} alt="Delete_Icons" />
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* <Pagination /> */}
    </div>
  );
}};

export default Articles_Info;
