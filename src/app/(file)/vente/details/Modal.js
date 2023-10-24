// Modal.js
import { Button } from "@nextui-org/button";
import React from "react";

const Modals = ({ onClose }) => {
  return (
    <div>
      <div className="flex flex-col gap-1">Ajouter une autre traité</div>
      <div>
        <div className="flex w-[22rem] gap-6 rounded-[20px] bg-white px-10 py-2">
          <div>
            <select
              id="countries"
              className="catalogue-input mb-1 bg-white px-5  py-3 placeholder:text-black"
            >
              <option className="text-[#787878]" selected>
                Active
              </option>
              <option className="text-[#787878]" value="US">
                calme
              </option>
              <option className="text-[#787878]" value="CA">
                Arréter
              </option>
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="Prix"
              className="catalogue-input px-5 py-3 text-[#C1C4C7]  placeholder:text-black"
            />
          </div>
          {/* <p className='text-sm text-[color:var(--labelText)]'>{"Définissez l'état du produit"}</p> */}
        </div>
        <div>
          <div className="max-w- relative mt-5">
            <input
              type="date"
              className="ml-10 block w-[269px] rounded-lg border border-gray-300  
                                bg-white p-2.5 pt-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Date"
            />
          </div>
        </div>
        <div>
          <div className="mt-5 w-[38rem] pb-2 pl-9">
            {/* <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label> */}
            <textarea
              id="message"
              className="block w-full rounded-lg border border-gray-300 bg-white
                                p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 
                                "
              placeholder="Note "
            ></textarea>
          </div>
        </div>
      </div>
      <div>
        <div className="pr-4">
          <Button
            color="primary"
            className="ml-5 h-[45px] w-[200px] rounded-full bg-[#D9A528] "
          >
            Ajouter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modals;
