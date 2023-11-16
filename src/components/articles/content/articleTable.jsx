"use client";

import { deleteArticle, getArticle } from "@/client-api/article";
import {
  Pagination,
  Select,
  SelectItem,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { columns } from "@/components/articles/content/articleColumns";
import ModalCustom from "@/components/ui/modal/ModalCustom";

const ArticleTable = () => {
  const [page, setPage] = useState(1);
  const [articleId, setArticleId] = useState("");
  const [limit, setLimit] = useState(10);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Access the client
  const queryClient = useQueryClient();

  // fetch articles
  const { isLoading, isError, data } = useQuery(["articles", page, limit], () =>
    getArticle(page, limit),
  );

  // delete article
  const deleteArticleMut = useMutation(deleteArticle, {
    onSuccess: () => {
      queryClient.invalidateQueries("articles");
    },
  });

  const handleDeleteArticles = (id) => {
    deleteArticleMut.mutate(id);
  };
  // used to format cells
  const renderCell = useCallback(
    (article, columnKey) => {
      const cellValue = article[columnKey];
      switch (columnKey) {
        case "img":
          return (
            <div className="flex h-[80px] justify-center">
              <Image
                src={"/uploads/" + article.img}
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
          );
        case "name":
          return (
            <div className="flex flex-col">
              <div className="h-[1.4rem] max-h-[1.4rem] overflow-hidden">
                {article.name}
              </div>
              <div className="flex flex-row gap-2">
                <span className="text-[12px] font-semibold text-[#96B0C4]">
                  Code bar :
                </span>
                <div className=" text-[15px] font-bold text-[#D9A528]  ">
                  {article.barCode}
                </div>
              </div>
            </div>
          );
        case "weight":
          return cellValue + " g";

        case "_id":
          return (
            <div className="flex items-center justify-center gap-2">
              <Link href={`articlev2/${article._id}`}>
                <Image src="/edit.svg" alt="edit Icon" width={20} height={20} />
              </Link>

              <Image
                src="/delete.svg"
                alt="Update Icon"
                width={20}
                height={20}
                className="cursor-pointer"
                onClick={() => {
                  setArticleId(() => article._id);
                  onOpen();
                }}
              />
            </div>
          );
        default:
          return cellValue;
      }
    },
    [onOpen],
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
    <>
      <Table
        aria-label="Example table with dynamic content"
        bottomContent={
          <div className="flex justify-between">
            <div className="w-[30vh] flex-1 text-sm text-[var(--textColor)]">
              Résultats: {page} - {totalPages} sur {data.total}
            </div>
            <div className="flex flex-1 justify-end gap-2">
              <div className="w-20">
                <Select
                  size="xs"
                  label={limit}
                  className="h-full"
                  onChange={(e) => setLimit(() => e.target.value)}
                >
                  <SelectItem key={10} textValue={10}>
                    {10}
                  </SelectItem>
                  <SelectItem key={15} textValue={15}>
                    {15}
                  </SelectItem>
                  <SelectItem key={20} textValue={20}>
                    {20}
                  </SelectItem>
                </Select>
              </div>

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
      >
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column.key}>{column.value}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {data.result.map((row) => (
            <TableRow key={row._id}>
              {(columnKey) => {
                return <TableCell>{renderCell(row, columnKey)}</TableCell>;
              }}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ModalCustom
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        handleDelete={() => handleDeleteArticles(articleId)}
        description={`Si vous confirmez, l'article sera définitivement effacé`}
      ></ModalCustom>
    </>
  );
};

export default ArticleTable;
