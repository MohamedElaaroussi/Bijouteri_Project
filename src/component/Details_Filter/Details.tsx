import React from "react";

const Details = () => {
  return (
    <div>
      <form>
        <div className=" flex w-[85%] justify-between gap-4 bg-white pb-2 pl-4 pt-2">
          <select
            id="countries"
            className="block w-full rounded-lg border border-gray-300 bg-white 
            p-2.5  text-sm text-gray-900 focus:ring-blue-500"
          >
            <option selected>{"Type d'articles"}</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <input
            className="block h-12 w-full appearance-none rounded-lg
        border border-gray-300 bg-white  px-4 py-3  text-gray-900"
            id="grid-first-name"
            type="Text"
            placeholder="Code barre"
          />
          <select
            id="countries"
            className="block w-full rounded-lg border border-gray-300 bg-white 
            p-2.5  text-sm text-gray-900 focus:ring-blue-500"
          >
            <option selected>Fournisseur</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <div className=" flex w-[85%] justify-between gap-4 bg-white pb-2 pl-4 pt-2">
          <input
            type="text"
            id="voice-search"
            className="block h-12 w-[196px] rounded-lg border border-gray-300
                bg-white p-2.5 px-4 pl-3 pr-[2rem] text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  "
            placeholder="Catalogue ..."
            required
          />

          <svg
            className="mr-[520px] mt-[-13px] h-6 w-4"
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
