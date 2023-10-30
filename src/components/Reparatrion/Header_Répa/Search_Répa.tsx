import React from "react";
import InputHeader from "@/components/ui/Input/InputHeader";

function Search_Répa() {
  return (
    <div className="mr-[-30px] w-[350px] pb-[-90px] pl-[15rem]  pt-0 ml-[-10rem]">
      <form>
        <div className="flex-[2] pl-[13px]">
          <InputHeader placeholder={"Rechercher une catalogue"}></InputHeader>
        </div>
      </form>
    </div>
  );
}

export default Search_Répa;
