import Image from "next/image";
import Link from "next/link";

const CardItem = () => {
  return (
    <div className="flex gap-2 rounded-3xl bg-white p-3">
      <div className="relative h-[158px] w-[119px]">
        <Link href={"catalogue/id"}>
          <Image
            className="rounded-lg object-cover"
            src={"/article.png"}
            alt="article"
            style={{ border: "1px solid #EBF1FF" }}
            fill
          />
        </Link>
        <Image
          src={"/barcode.png"}
          alt="barcode"
          className="absolute -bottom-7 left-1/2 object-cover"
          style={{ transform: "translate(-50%, -50%)" }}
          width={70}
          height={30}
        />
      </div>

<<<<<<< HEAD
            </div>

            <div className="flex flex-col gap-2 ">
                <div className="">
                    <p className="text-[color:var(--textColor)] text-[12px] font-medium overflow-hidden whitespace-nowrap max-w-[9rem]">
                        Bague en argent 18 carats et autres détails de votre texte ici...{"..."}
                    </p>

                    <p className="text-[color:var(--softTextColor)] text-[11px] mt-1 font-normal font-inter">
                        Description:{" "}
                    </p>
                    <p className="text-[12px] text-[color:var(--textColor)] w-[11rem] h-[3.6rem] max-h-[3.6rem] overflow-hidden">
                        Souvent, le bijoutier-joaillier a besoin d{''}un petit coup de main pour finaliser les ...
                        
                    </p>
                </div>


                <div>
                    <p className="text-[#C1C4C7] text-[10px]">Nombre d{" "}articles</p>
                    <p className=" text-[12px] font-medium text-[color:var(--textColor)]">
                        {"20"}
                    </p>
                </div>
                <div className="flex justify-end gap-2">
                    <Link href={"/catalogue/id"}>
                        <Image
                            style={{ paddingTop: "2px" }}
                            src={"/edit.svg"}
                            alt="edit icon"
                            width={15}
                            height={17}
                            className="hover:cursor-pointer" />
                    </Link>
                    <Image
                        src={"/delete.svg"}
                        alt="delete icon"
                        width={15}
                        height={15}
                        className="hover:cursor-pointer" />
                </div>
            </div>
=======
      <div className="flex flex-col gap-2 ">
        <div className="">
          <p className="max-w-[9rem] overflow-hidden whitespace-nowrap text-[12px] font-medium text-[color:var(--textColor)]">
            {
              "Bague en argent 18 carats et autres détails de votre texte ici..."
            }
            {"..."}
          </p>
>>>>>>> dev-rguig

          <p className="mt-1 font-inter text-[11px] font-normal text-[color:var(--softTextColor)]">
            Description:{" "}
          </p>
          <p className="h-[3.6rem] max-h-[3.6rem] w-[11rem] overflow-hidden text-[12px] text-[color:var(--textColor)]">
            {
              "Souvent, le bijoutier-joaillier a besoin d'un petit coup de main pour finaliser les ..."
            }
          </p>
        </div>

        <div>
          <p className="text-[10px] text-[#C1C4C7]">{"Nombre d'articles"}</p>
          <p className=" text-[12px] font-medium text-[color:var(--textColor)]">
            {"20"}
          </p>
        </div>
        <div className="flex justify-end gap-2">
          <Link href={"/catalogue/id"}>
            <Image
              style={{ paddingTop: "2px" }}
              src={"/edit.svg"}
              alt="edit icon"
              width={15}
              height={17}
              className="hover:cursor-pointer"
            />
          </Link>
          <Image
            src={"/delete.svg"}
            alt="delete icon"
            width={15}
            height={15}
            className="hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
