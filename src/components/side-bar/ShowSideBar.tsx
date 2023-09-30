"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import SideBar from "./SideBar";

const ShowSideBar = () => {
  const path = usePathname();

  if (path !== "/login") return <SideBar />;
};

export default ShowSideBar;
