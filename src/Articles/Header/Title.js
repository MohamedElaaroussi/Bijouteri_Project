import React from "react";
import SearchBar from "@/component/Header/SearchBar";

const Title = () => {
  return (
    <div>
      <div className="flex  mr-10">
        <div>
          <h1>Articles</h1>
        </div>
          <SearchBar />
        
      </div>
    </div>
  );
};

export default Title;
