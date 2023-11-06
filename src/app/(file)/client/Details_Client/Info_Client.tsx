"use client"
import Image from 'next/image'
import React from 'react'

interface InfoClientProps {
    Name: string; // Remplacez YourDataType par le type de données attendu
    tele : number,
  }


  const Info_Client: React.FC<InfoClientProps> = ({ Name ,tele}) => {
   
    return (

        <div className=" mt-4 pt-14">
            {/* Card start */}

            <div className="mx-auto h-[210px] ml-[5px] mr-[&.rem] pr-8 rounded-lg bg-white  shadow-lg">

                <div className="flex justify-end px-4 pr-[0px] pt-3">
                    <Image width={20} height={20} alt="" src={"/Update.svg"}
                    ></Image>
                </div>
                <div className='flex-row items-center '>
                    <div className="ml-[6rem] h-20  w-20 pt-[1rem] overflow-hidden rounded-full bg-[#F4F7FE]">
                        <span className="pt-4 pl-4 text-[30px] font-medium font-normal text-[#C1C4C7] ">
                            {Name.substring(0, 2).toUpperCase()}
                        </span>

                    </div>
                    <div className="pl-[36%] pt-4">
                        <h3 className="mb-1  font-bold text-yellow-500 text-center pr-10">
                            {Name}
                        </h3>
                        <div className="inline-flex items-center text-[#787878]">
                            {tele}
                        </div>
                    </div>
                </div>

                {/* <div className="flex justify-start gap-8 w-50 ml-10 px-12 pb-0"> */}


                {/* </div> */}
            </div>
            {/* Card end */}
        </div>

    )
}

export default Info_Client
