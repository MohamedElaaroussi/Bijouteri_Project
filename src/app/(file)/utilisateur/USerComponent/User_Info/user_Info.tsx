
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue, Spinner } from "@nextui-org/react";
import axios from "axios";
import React,{ useState, useEffect } from "react";
import Image from "next/image"; // Importez le composant Image de Next.js
import Link from "next/link";
import { format } from "date-fns"; // Importez la fonction format de date-fns
import Update_User from "@/components/ui/modal/Modal_User/Update_User";
import Delete_user from "@/components/ui/modal/Modal_User/Delete_user";



// const users = [
//   {
//     key: "1",
//     color: "green",
//     name: "CEO",
//     Téléphone: "Active",
//     Date_de_création: "Active",
//     Role: "Active",
//     Group: "Group",
//   },
//   

export default function User_Info() {


  //  Start Api pour getter les users
  const [users, setUser] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setloading] = useState(true);
  const [check,setcheck]=useState(false)

  const fetchUser = async () => {
    
   
    const URL = process.env.NEXT_PUBLIC_VERCEL_URL ?? "http://localhost:3000/";
    try {
      const response = await axios.get(`api/user?page=${currentPage}&limit=10`);
      const userData = Array.isArray(response.data.result)
        ? response.data.result
        : [response.data.result];
      setUser(userData);
      setloading(false);
    } catch (error) {
      console.error("Erreur lors de la récupération des données de l'utilisateur", error);
    }
  };
   

  // if(check){
  //   router.reload
    


  // }
  useEffect(() => {
    fetchUser(); // Charger les données initiales


  },[]);

  //  End Api pour getter les users

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);

  if (loading) {
    return (
      <div className="ml-[30rem] h-[450px] mt-[15rem]">
        <Spinner label="Loading..." color="warning" />
      </div>)

  }
  return (
    <div className="mb-[42vh] mt-7">
      <Table
        aria-label="Example table with client side pagination"
        bottomContent={
          <div className="flex justify-between">
            <div className="text-sm text-[var(--textColor)] w-[30vh]">
              Résultats: {page} - {rowsPerPage} sur {pages}
            </div>
            <div className="flex w-full justify-end">
              <Pagination
                isCompact
                showControls
                showShadow
                color="warning"
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
          <TableColumn key={"Status"}>Status</TableColumn>
          <TableColumn key={"Nom"}>Nom</TableColumn>
          <TableColumn key={"Téléphone"}>Téléphone</TableColumn>
          <TableColumn key={"Date_de_création"}>Date de création</TableColumn>
          <TableColumn key={"Role"}>Role</TableColumn>
          <TableColumn key={"actions"}>{ }</TableColumn>
        </TableHeader>
        <TableBody items={items}>

          {(item) => (
            <TableRow key={item._id} as={Link} href={`/utilisateur/${item._id}`}>
              {(columnKey) => (
                <TableCell>
                  {columnKey === "actions" ? (
                    <div className="flex  justify-end  gap-4">
                      <Update_User />
                      <Delete_user
                        onDelete={() => { }}
                        //@ts-ignore
                        setcheck={setcheck}
                        userId={item._id} />
                    </div>
                  ) : columnKey === "Nom" ? (item.username)
                    : columnKey === "Téléphone" ? (item.phone)
                      : columnKey === "Date_de_création" ? (format(new Date(item.createdAt), "yyyy-MM-dd"))
                        : columnKey === "Role" ? (item.role.name)
                          : columnKey === "Status" ?
                            (<div
                              className={`ml-4 h-3 w-3 rounded-full`}
                              style={{ background: 'green' }}
                            ></div>)
                            : columnKey === "Nom" ? (
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
