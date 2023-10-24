import React from "react";
import InputHeader from "@/components/ui/Input/InputHeader";

function SearchBar() {
  return (
    <div className="mr-[-30px] w-[350px] pb-[-90px] pl-[15rem]  pt-0">
      <form>
        <div className="flex-[2] pl-[13px]">
          <InputHeader placeholder="Rechercher un catalogue"></InputHeader>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
