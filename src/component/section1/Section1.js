"use client";
import React from "react";
import SearchBar from "../Header/SearchBar";
import Exporter from "../Btn/Exporter/Exporter";
import Ajouter from "../Btn/Ajouter/Ajouter";
import Date from "../Btn/Date/Date";
import Filter from "../Btn/Filter/Filter";

const Section1 = () => {
  return (
    <section className="h-[8rem] w-[94%]"
    >
      <div className="flex justify-start">
        {<SearchBar />}

        <div className="flex align-center ml-10">
          {
            // Expoter
          }
          <Exporter/>
          {
            // Ajouter
          }

          <Ajouter/>

          {
            // date
          }
          <Date/>

          {
            // Filter
          }
          <Filter/>
        </div>
      </div>
    </section>
  );
};

export default Section1;
