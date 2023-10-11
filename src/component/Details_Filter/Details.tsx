import React from "react";

const Details = () => {
  return (
    <div>
      <form>
        <div className=" flex w-[85%] justify-between pt-2 pl-4 pb-2 gap-4 bg-white">
          <select
            id="countries"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500  block w-full p-2.5"
          >
            <option selected>Type d'articles</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <input
            className="appearance-none block w-full bg-white text-gray-900
        border border-gray-300 rounded-lg  py-3 px-4  h-12"
            id="grid-first-name"
            type="Text"
            placeholder="Code barre"
          />
          <select
            id="countries"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500  block w-full p-2.5"
          >
            <option selected>Fournisseur</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <div className=" flex w-[85%] justify-between pt-2 pl-4 pb-2 gap-4 bg-white">
          <input
            type="text"
            id="voice-search"
            className="bg-white border border-gray-300 h-12 pr-[2rem] px-4
                text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[196px] pl-3 p-2.5  "
            placeholder="Catalogue ..."
            required
          />
          
            <svg
              className="w-4 h-6 mt-[-13px] mr-[520px]"
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
      </form>
    </div>
  );
};

export default Details;
