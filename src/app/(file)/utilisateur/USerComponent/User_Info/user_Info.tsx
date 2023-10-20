


import Image from "next/image";
import Paginate from "../Pagination/Paginate";
import axios from "axios";
import { useState, useEffect } from "react";
// import { GET_USER } from "@/Url_Api/User";

import Link from "next/link";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { string } from "zod";
import Instance from "@/components/Axios_Instance/instance"

const User_Info = () => {
  const [user, setUser] = useState<any[]>([]); // Vous pouvez également utiliser une interface pour le typage
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchUser = async () => {
      const URL =   process.env.VERCEL 
      console.log(URL)
      try {
        const response = await Instance.get(
          `api/user?page=${currentPage}&limit=10`,
        );
        const userData = Array.isArray(response.data.result)
          ? response.data.result
          : [response.data.result];
        setUser(userData);
        console.log(response.data.result);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de l'utilisateur",
          error,
        );
      }
    };

    fetchUser();
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  if (user ) { // Vérifiez que user est défini et n'est pas vide
    return (
      <div
        style={{ margin: "0", padding: "1rem 4rem", right: "2.5rem 2.5rem" }}
      >
        <div className="mt-6 overflow-hidden">
          <Table
            aria-label="Example static collection table"
            style={{
              height: "auto",
              minWidth: "100%",
            }}
            selectionMode="single"
          >
            <TableHeader>
              <TableColumn>Status</TableColumn>
              <TableColumn>Nom</TableColumn>
              <TableColumn>Téléphone</TableColumn>
              <TableColumn>Date de création</TableColumn>
              <TableColumn>Role</TableColumn>
              <TableColumn>{""}</TableColumn>
            </TableHeader>
            <TableBody>
              {user.slice(0, 8).map((item, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>
                      <div
                        className={`ml-4 h-3 w-3 rounded-full`}
                        style={{ background: "red" }}
                      ></div>
                    </TableCell>
                    <TableCell>
                      <Link href={`/utilisateur/${item._id || ''}`}>
                        {item.username}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link href={`/utilisateur/${item._id || ''}`}>
                        {item.phone}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link href={`/utilisateur/${item._id || ''}`}>
                        {item.createdAt}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link href={`/utilisateur/${item._id || ''}`}>
                        {item.role?.name}
                      </Link>
                    </TableCell>
                    <TableCell>

                      <span className="flex gap-4">
                        {/* {update Icons } */}
                        {/* {Delate Icons } */}
                      </span>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
        <Paginate
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    );
  } else {
    return <h1>Chargement des utilisateurs...</h1>;
  }
};

export default User_Info;
