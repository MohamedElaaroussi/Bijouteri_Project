"use client";

import React, { useEffect, useState } from "react";
import Section_G from "../USerComponent/Section_gouch/Section_G";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { UserModel } from "../../../../../models/User";

interface ParamsType {
  // Define the properties of the 'params' object
  id: string;
  // Add more properties as needed
}


const Page = ({ params }: { params: ParamsType }) => {
  const [user, setUser] = useState<any>([]);
 
  
  useEffect(() => {

    axios.get(`http://localhost:3000/api/user/${params.id}`)
      .then(response => {
        setUser(response.data);
        // console.log(response.data.)
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données de l\'utilisateur :', error);
      });
  },[params.id]);
  
  return (
    <div className=" ">
      <div className=" mt-4  pr-20 pt-14">
        {/* Card start */}
        <div>
          <div className="mx-auto h-[210px] w-[90%] rounded-lg bg-white pb-3 shadow-lg">
            <div>
              <div className="flex justify-end px-4 pt-3">
                <Image width={20} height={20} alt="" src={"/Update.svg"}
                ></Image>
              </div>
            </div>
            <div className="flex justify-between gap-8 w-50 ml-10 px-12 pb-0">
              <div className="flex justify-between gap-[15rem] my-2  mt-[2.1rem]  pr-10 text-center ">
                <div className="ml-[-3rem] h-20  w-20 pt-[1rem] overflow-hidden rounded-full bg-[#F4F7FE]">
                  <span className=" pt-3.5  text-[30px] font-medium font-normal text-[#C1C4C7] ">
                  {user.username && user.username.charAt(0).toUpperCase() + user.username.slice(1,2)}
                  </span>
                </div>
                <div className="py-4  pt-4">
                  <h3 className="mb-1  font-bold text-yellow-500">
                    {user.username}
                  </h3>
                  <div className="inline-flex items-center text-[#787878]">
                    {user.phone}
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-8 pr-[2rem] pt-12 ">
                <button className="mr-[50px] flex-1 justify-center h-12 rounded-full bg-[#05CD99]
                 px-4 py-1.5  font-bold text-white ">
                  {/* {user.role.name}  */}
                  {user.role && user.role.name } 
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card end */}
      </div>
      <div>
        {/* Section left start  */}
        <Section_G email={user.email} phone={user.phone} role={user.role && user.role.name} />
      </div>
    </div>
  );
};

export default Page;
