"use client";
import React from "react";
import User_Info from "./USerComponent/User_Info/user_Info";
import Header from "./USerComponent/Header/Header";
import Section1 from "./USerComponent/section1/Section1";
import { usePathname } from "next/navigation";

const Home = () => {
  const path = usePathname().slice(1);
  return (
    <div className="flex flex-col h-[100vh]">
      <Header path={path} />
      <Section1 />
      <User_Info />
    </div>
  );
};

export default Home;
