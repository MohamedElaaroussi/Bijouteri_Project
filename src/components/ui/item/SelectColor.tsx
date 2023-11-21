import { colorArr, colorObject } from '@/utils/seed';
import Image from 'next/image';
import React, { useState } from 'react'

const SelectColor = () => {
  const [selectedColor, SetSelectedColor] = useState("yellow");
    const changeColorHandler = (color: string) => {
        SetSelectedColor(color);
    };
  return (
    <div>
      <span >
        <span className='text-[14px] font-semibold font-normal text-[#787878]'>Couleur</span>
        <div className="flex gap-1 pt-2">
          {colorArr.map((color) => {
            return (
              <div
                onClick={() => changeColorHandler(color)}
                key={color}
                className={`${colorObject[color]} relative mt-[2px] h-[20px] w-[35px] rounded-full`}
              >
                {color === selectedColor && (
                  <div className="absolute -right-1 -top-1 flex h-[11px] w-[11px] items-center justify-center rounded-full bg-green-500">
                    <Image
                      src={"/checked.svg"}
                      alt="check mark"
                      width={8}
                      height={4}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </span>
    </div>
  )
}

export default SelectColor
