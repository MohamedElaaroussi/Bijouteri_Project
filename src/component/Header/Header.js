import SearchBar from "@/component/Header/SearchBar";
import React from "react";

const Header = () => {
  return (
    <span className="flex px-[130px] mb-[-45px] flex justify-between ">
      <div>
        <span>
          <h1 className="text-gray-700 font-inter font-semibold text-2xl leading- px-140 py-50 pr-[3rem]"
          style={{margin:'0 -50px'}}
          >
            Utilisateur
          </h1>
        </span>
      </div>
      <div className="flex justify-end px-16 ">
        {
          // Search bar
        }
        <div className="w-[16rem]">
        <form >
        <label
          for="default-search"
          className=" text-sm font-medium  text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative w-[23rem]">
          <div className="absolute inset-y-0 left-0 pr-4 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm bg-white text-gray-900 border
       border-[#EBF1FF] rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
        dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
        </div>
      </form>
        </div>
      </div>
    </span>
  );
};

export default Header;
