"use client";

import Image from "next/image";
import Paginate from "../Paginate/Paginate";
import Link from "next/link";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
const info = [
  {
    Nom: "samed",
    Télephone: "12346789",
    date_création: "03/10/2023",
    Role: "admin",
    Group: "Manager",
    color: "#05CD99",
  },
  {
    Nom: "samed",
    Télephone: "12346789",
    date_création: "03/10/2023",
    Role: "admin",
    Group: "Manager",
    color: "#05CD99",
  },
  {
    Nom: "samed",
    Télephone: "12346789",
    date_création: "03/10/2023",
    Role: "admin",
    Group: "Manager",
    color: "#05CD99",
  },
  ,
  {
    Nom: "Nom",
    Télephone: "12346789",
    date_création: "03/10/2023",
    Role: "admin",
    Group: "Manager",
    color: "#D62832",
  },
  {
    Nom: "Nom",
    Télephone: "12346789",
    date_création: "03/10/2023",
    Role: "admin",
    Group: "Manager",
    color: "#D62832",
  },
  {
    Nom: "Mr",
    Télephone: "12346789",
    date_création: "03/10/2023",
    Role: "admin",
    Group: "Manager",
    color: "#D62832",
  },
  {
    Nom: "Mr",
    Télephone: "12346789",
    date_création: "03/10/2023",
    Role: "admin",
    Group: "Manager",
    color: "#D62832",
  },
  {
    Nom: "Nom",
    Télephone: "12346789",
    date_création: "03/10/2023",
    Role: "admin",
    Group: "Manager",
    color: "#D62832",
  },
  {
    Nom: "Nom",
    Télephone: "12346789",
    date_création: "03/10/2023",
    Role: "admin",
    Group: "Manager",
    color: "#D62832",
  },
];
const User_Info = () => {
  return (
    <div style={{ margin: "0", padding: "1rem 4rem", right: "2.5rem 2.5rem" }}>
      <div className="overflow-hidden">
        <Table aria-label="Example static collection table" className="pt-6">
          <TableHeader className="bg-[red]">
            <TableColumn>STATUS</TableColumn>
            <TableColumn>NAME</TableColumn>
            <TableColumn>Télephone</TableColumn>
            <TableColumn>date_création</TableColumn>
            <TableColumn>ROLE</TableColumn>
            <TableColumn>Group</TableColumn>
            <TableColumn></TableColumn>
          </TableHeader>
          <TableBody>
            {info.map((item, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{item.Nom}</TableCell>
                  <TableCell>{item.Nom}</TableCell>
                  <TableCell>{item.Nom}</TableCell>
                  <TableCell>{item.Télephone}</TableCell>
                  <TableCell>{item.date_création}</TableCell>
                  <TableCell>{item.Role}</TableCell>
                  <TableCell className="flex gap-4">
                    <span>
                      {" "}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_58_11331)">
                          <path
                            d="M11.6814 -0.000170332C11.7081 0.0650715 11.778 0.0520338 11.8265 0.0760428C11.9807 0.15172 12.1056 0.27595 12.1822 0.429623C12.2588 0.583295 12.2827 0.757883 12.2503 0.926492C12.2179 1.0951 12.131 1.24839 12.0029 1.36275C11.8749 1.4771 11.7128 1.54619 11.5416 1.55938C11.4706 1.5646 11.3986 1.55938 11.3271 1.55938H4.00536C2.57682 1.55938 1.56584 2.57349 1.56584 4.00672V15.995C1.56584 17.4131 2.581 18.4309 3.997 18.4309H16.0051C17.4222 18.4309 18.4374 17.4142 18.4374 15.9961C18.4374 13.5162 18.4374 11.0365 18.4374 8.55695C18.4374 8.20413 18.5845 7.94002 18.9108 7.79649C19.214 7.66288 19.4943 7.72289 19.7458 7.93375C19.8784 8.04493 19.9348 8.20255 20 8.35496V16.5958C19.927 16.648 19.9478 16.7357 19.9327 16.8046C19.5814 18.6439 17.9979 19.9852 16.1268 19.9884C12.039 19.9967 7.95136 19.9967 3.86391 19.9884C1.74799 19.9826 0.0125601 18.2461 0.00734073 16.1323C-0.00309795 12.0383 -0.00309795 7.94402 0.00734073 3.84962C0.0109943 2.13611 1.18482 0.619369 2.831 0.147019C3.03299 0.089084 3.24855 0.085958 3.44115 -0.0038147L11.6814 -0.000170332Z"
                            fill="#C1C4C7"
                          />
                          <path
                            d="M5.86605 15.931C5.50884 15.9245 5.15304 15.8843 4.80339 15.8109C4.46726 15.7384 4.24909 15.5223 4.18855 15.182C3.8232 13.136 4.32426 11.3197 5.77054 9.83062C7.76067 7.78098 9.80195 5.78197 11.8213 3.76104C12.6564 2.92333 13.4915 2.0799 14.3355 1.25002C16.05 -0.433218 18.893 0.286001 19.5491 2.57416C19.856 3.64308 19.6326 4.61859 18.9228 5.47926C18.8475 5.56883 18.7677 5.65453 18.6837 5.73604C15.9098 8.51099 13.1355 11.2863 10.3609 14.0619C9.43451 14.9904 8.34367 15.5995 7.0498 15.8365C6.65912 15.9056 6.26274 15.9372 5.86605 15.931ZM6.07482 14.3704C7.26118 14.3375 8.32227 13.8907 9.20017 13.0134C11.9974 10.2148 14.795 7.41684 17.5929 4.61962C17.6451 4.56743 17.6936 4.51836 17.7401 4.46304C17.9978 4.16118 18.1308 3.77239 18.1118 3.37591C18.0929 2.97942 17.9235 2.60508 17.6381 2.32917C17.3527 2.05326 16.9729 1.89654 16.576 1.89096C16.1791 1.88537 15.795 2.03133 15.502 2.2991C15.2452 2.53815 15.0046 2.79547 14.752 3.03974C14.6836 3.1055 14.6847 3.14411 14.752 3.20987C14.9086 3.35706 15.0594 3.50947 15.2081 3.66449C15.5213 3.99383 15.526 4.47818 15.2165 4.78404C14.907 5.08989 14.4378 5.08415 14.111 4.77517C13.9597 4.63216 13.8099 4.48705 13.6705 4.33255C13.5891 4.24226 13.5432 4.24644 13.4576 4.33255C11.2613 6.53512 9.0535 8.72672 6.86712 10.9387C6.0409 11.7738 5.64944 12.814 5.63587 13.9878C5.62857 14.4257 5.57272 14.3563 6.07169 14.3704H6.07482Z"
                            fill="#C1C4C7"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_58_11331">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span>
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_371_5008)">
                          <path
                            d="M10.4662 2.14734e-05C10.5429 0.068924 10.6452 0.0496175 10.734 0.072585C11.2286 0.201167 11.668 0.487115 11.9859 0.887288C12.3037 1.28746 12.4829 1.78015 12.4962 2.29104C12.4993 2.5061 12.5056 2.72116 12.4962 2.93518C12.4879 3.08133 12.5223 3.12988 12.6815 3.12883C13.9183 3.12118 15.1549 3.1203 16.3913 3.12622C16.9415 3.12622 17.31 3.6315 17.1471 4.14357C17.0995 4.29332 17.0077 4.42518 16.8838 4.52186C16.7599 4.61855 16.6097 4.67554 16.4529 4.68539C16.3819 4.68957 16.3099 4.68539 16.2384 4.68539C11.9361 4.68539 7.63388 4.68401 3.33165 4.68123C3.16253 4.68123 3.12286 4.71776 3.12286 4.89002C3.12877 8.59405 3.13034 12.2979 3.12756 16.0016C3.12756 17.4183 4.14387 18.4341 5.56211 18.4346H11.5958C13.0573 18.4346 14.0627 17.4313 14.0627 15.9755C14.0627 13.0137 14.0627 10.052 14.0627 7.0902C14.0627 6.59849 14.3895 6.24876 14.8425 6.24824C15.0397 6.24845 15.2295 6.32299 15.374 6.45701C15.5186 6.59102 15.6073 6.77464 15.6224 6.97118C15.6255 7.0166 15.6224 7.06254 15.6224 7.10795C15.6224 10.0889 15.6224 13.0701 15.6224 16.0517C15.6224 17.9199 14.3962 19.4655 12.5818 19.8982C12.291 19.9663 11.9931 19.9996 11.6944 19.9974C9.63101 19.9974 7.57072 20.0005 5.50469 19.9974C3.28885 19.9932 1.56733 18.2639 1.56577 16.0428C1.56333 12.3263 1.56455 8.60954 1.56942 4.89263C1.56942 4.72194 1.53236 4.66713 1.36062 4.68384C1.17221 4.69506 0.98332 4.6961 0.794789 4.68696C0.348489 4.67913 0.00815136 4.34507 0.00449744 3.9139C0.0028023 3.80982 0.0220645 3.70644 0.0611344 3.60995C0.100204 3.51346 0.158282 3.42581 0.231918 3.35222C0.305554 3.27863 0.393243 3.22061 0.489762 3.1816C0.58628 3.1426 0.689657 3.12341 0.793744 3.12517C2.03034 3.12204 3.26693 3.12048 4.50352 3.12831C4.66325 3.12831 4.69091 3.07977 4.68935 2.93465C4.68465 2.4941 4.64811 2.04726 4.80158 1.62028C5.10903 0.761083 5.7114 0.23596 6.60139 0.0391706C6.63115 0.0329068 6.66769 0.0428368 6.6776 -0.000488281L10.4662 2.14734e-05ZM8.58704 3.12465C9.31782 3.12465 10.0444 3.12465 10.7731 3.12465C10.8864 3.12465 10.9511 3.11735 10.9412 2.9738C10.9266 2.75979 10.9412 2.5442 10.936 2.32966C10.935 2.12532 10.853 1.92971 10.708 1.78576C10.563 1.6418 10.3667 1.56127 10.1624 1.56182C9.1146 1.55695 8.06713 1.55695 7.02002 1.56182C6.81568 1.56265 6.62002 1.64451 6.47596 1.78944C6.33191 1.93437 6.25124 2.13054 6.25166 2.33489C6.24696 2.54943 6.25949 2.765 6.24748 2.97901C6.24018 3.1069 6.28715 3.12517 6.40095 3.12465C7.12703 3.12204 7.85573 3.12517 8.58443 3.12517L8.58704 3.12465Z"
                            fill="#C1C4C7"
                          />
                          <path
                            d="M6.24808 12.3419C6.24808 13.5848 6.25069 14.8276 6.24808 16.0705C6.24808 16.6306 5.73654 17.0038 5.21977 16.8326C5.06435 16.781 4.92923 16.6816 4.83378 16.5485C4.73833 16.4155 4.68743 16.2556 4.68838 16.0919C4.6842 15.6101 4.68838 15.1288 4.68838 14.647C4.68838 12.6426 4.68838 10.6383 4.68838 8.63424C4.68838 8.28972 4.83349 8.03081 5.14877 7.88465C5.44213 7.74894 5.72296 7.79488 5.96986 7.99637C6.17553 8.1634 6.25278 8.38942 6.25226 8.65198C6.24652 9.88178 6.24808 11.1116 6.24808 12.3419Z"
                            fill="#C1C4C7"
                          />
                          <path
                            d="M9.37285 12.3424C9.37285 13.5853 9.37285 14.8281 9.37285 16.071C9.37285 16.6311 8.86078 17.0038 8.34453 16.8326C8.18907 16.7807 8.05398 16.6811 7.95854 16.5479C7.86311 16.4147 7.81222 16.2547 7.81315 16.0908C7.80949 15.5688 7.81315 15.05 7.81315 14.529V8.63368C7.81315 8.28917 7.95826 8.03026 8.27406 7.88462C8.56794 7.74891 8.84825 7.79485 9.09515 7.99686C9.30029 8.1639 9.37755 8.38991 9.3765 8.65247C9.37198 9.88297 9.37076 11.113 9.37285 12.3424Z"
                            fill="#C1C4C7"
                          />
                          <path
                            d="M12.4974 12.3644C12.4974 13.601 12.4974 14.8375 12.4974 16.0736C12.4974 16.6332 11.9842 17.0059 11.468 16.8341C11.3127 16.7823 11.1777 16.6826 11.0824 16.5494C10.9872 16.4161 10.9365 16.2562 10.9377 16.0924C10.934 15.5328 10.9377 14.9733 10.9377 14.4137V8.63528C10.9377 8.29077 11.0833 8.03185 11.3991 7.88622C11.693 7.75102 11.9733 7.79749 12.2197 7.99898C12.4253 8.16654 12.5015 8.39255 12.501 8.65563C12.4968 9.89031 12.4956 11.1266 12.4974 12.3644Z"
                            fill="#C1C4C7"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_371_5008">
                            <rect width="17.1844" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <Paginate />
    </div>
  );
};

export default User_Info;
