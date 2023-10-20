"use client";

import React, { useEffect, useState } from "react";
import Section_G from "../USerComponent/Section_gouch/Section_G";
import { useRouter } from "next/navigation";
import axios from "axios";

const Page = ({params}) => {
  const [user, setUser] = useState([]);
  const Roles=user.role ;
  console.log(user.role)
  
  useEffect(() => {

    axios.get(`http://localhost:3000/api/user/${params.id}`)
      .then(response => {
        setUser(response.data);
        // console.log(response.data.)
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données de l\'utilisateur :', error);
      });
  }, []);
  
  
  


  return (
    <div className=" ">
      <div className=" mt-4  pr-20 pt-14">
        {/* Card start */}
        <div>
          <div className="mx-auto h-[210px] w-[90%] rounded-lg bg-white pb-3 shadow-lg">
            <div>
              <div className="flex justify-end px-4 pt-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_112_5294)">
                    <path
                      d="M11.6814 -0.000261885C11.7081 0.0649799 11.778 0.0519422 11.8265 0.0759512C11.9807 0.151629 12.1056 0.275859 12.1822 0.429531C12.2588 0.583204 12.2827 0.757792 12.2503 0.926401C12.2179 1.09501 12.131 1.2483 12.0029 1.36265C11.8749 1.47701 11.7128 1.5461 11.5416 1.55928C11.4706 1.5645 11.3986 1.55928 11.3271 1.55928H4.00536C2.57682 1.55928 1.56584 2.5734 1.56584 4.00663V15.9949C1.56584 17.413 2.581 18.4308 3.997 18.4308H16.0051C17.4222 18.4308 18.4374 17.4141 18.4374 15.996C18.4374 13.5161 18.4374 11.0364 18.4374 8.55686C18.4374 8.20403 18.5845 7.93993 18.9108 7.7964C19.214 7.66278 19.4943 7.7228 19.7458 7.93366C19.8784 8.04483 19.9348 8.20246 20 8.35487V16.5957C19.927 16.6479 19.9478 16.7356 19.9327 16.8045C19.5814 18.6438 17.9979 19.9851 16.1268 19.9883C12.039 19.9966 7.95136 19.9966 3.86391 19.9883C1.74799 19.9825 0.0125601 18.2461 0.00734073 16.1322C-0.00309795 12.0382 -0.00309795 7.94393 0.00734073 3.84953C0.0109943 2.13602 1.18482 0.619278 2.831 0.146927C3.03299 0.0889924 3.24855 0.0858665 3.44115 -0.00390625L11.6814 -0.000261885Z"
                      fill="#C1C4C7"
                    />
                    <path
                      d="M5.86605 15.9309C5.50884 15.9245 5.15304 15.8843 4.80339 15.8109C4.46726 15.7384 4.24909 15.5223 4.18855 15.182C3.8232 13.136 4.32426 11.3197 5.77054 9.83058C7.76067 7.78095 9.80195 5.78194 11.8213 3.76101C12.6564 2.9233 13.4915 2.07987 14.3355 1.24999C16.05 -0.433248 18.893 0.285971 19.5491 2.57413C19.856 3.64305 19.6326 4.61856 18.9228 5.47923C18.8475 5.5688 18.7677 5.6545 18.6837 5.73601C15.9098 8.51096 13.1355 11.2863 10.3609 14.0619C9.43451 14.9904 8.34367 15.5995 7.0498 15.8365C6.65912 15.9055 6.26274 15.9372 5.86605 15.9309ZM6.07482 14.3704C7.26118 14.3375 8.32227 13.8907 9.20017 13.0133C11.9974 10.2147 14.795 7.41681 17.5929 4.61959C17.6451 4.56739 17.6936 4.51833 17.7401 4.46301C17.9978 4.16114 18.1308 3.77236 18.1118 3.37588C18.0929 2.97939 17.9235 2.60505 17.6381 2.32914C17.3527 2.05323 16.9729 1.89651 16.576 1.89093C16.1791 1.88534 15.795 2.0313 15.502 2.29907C15.2452 2.53812 15.0046 2.79544 14.752 3.0397C14.6836 3.10547 14.6847 3.14408 14.752 3.20984C14.9086 3.35703 15.0594 3.50944 15.2081 3.66446C15.5213 3.9938 15.526 4.47815 15.2165 4.78401C14.907 5.08986 14.4378 5.08412 14.111 4.77514C13.9597 4.63213 13.8099 4.48702 13.6705 4.33252C13.5891 4.24223 13.5432 4.24641 13.4576 4.33252C11.2613 6.53509 9.0535 8.72669 6.86712 10.9387C6.0409 11.7737 5.64944 12.814 5.63587 13.9878C5.62857 14.4257 5.57272 14.3563 6.07169 14.3704H6.07482Z"
                      fill="#C1C4C7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_112_5294">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex justify-between gap-8 w-50 ml-10 px-12 pb-0">
              <div className="flex justify-between gap-[15rem] my-2  mt-[2.1rem]  pr-10 text-center ">
                <div className="ml-[-3rem] h-20  w-20 pt-[1rem] overflow-hidden rounded-full bg-[#F4F7FE]">
                  <span className=" pt-3.5  text-[30px] font-medium font-normal text-[#C1C4C7] ">
                    {/* {user.username.substring(0, 2)} */}
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
