import Image from "next/image";
import Link from "next/link";

const CardItem = () => {
    return (
        <div className="bg-white flex p-3 gap-2 rounded-3xl">
            <div className="w-[119px] h-[158px] relative">
                <Link href={"catalogue/id"}>
                    <Image
                        className="object-cover rounded-lg"
                        src={"/article.png"}
                        alt="article"
                        style={{ border: "1px solid #EBF1FF" }}
                        fill />
                </Link>
                <Image src={"/barcode.png"} alt="barcode" className="object-cover absolute -bottom-7 left-1/2" style={{ transform: "translate(-50%, -50%)" }} width={70} height={30} />

            </div>

            <div className="flex flex-col gap-2 justify-between">
                <div className="">
                    <p className="text-[color:var(--textColor)] text-[12px] font-medium">
                        Bague en argent 18 carats ...
                    </p>
                    <p className="text-[color:var(--softTextColor)] text-[10px] mt-1">
                        Code Bar:{" "}
                    </p>
                    <p className="text-[12px] text-[color:var(--textColor)]">
                        {"#5484168168"}
                    </p>
                </div>

                <div className="flex justify-between mt-1">
                    <div>
                        <p className="text-[color:var(--softTextColor)] text-[10px]">
                            Type
                        </p>
                        <p className="text-[12px] text-[color:var(--textColor)] font-medium">
                            {"Type"}
                        </p>
                    </div>
                    <div>
                        <p className="text-[color:var(--softTextColor)] text-[10px]">
                            Poids
                        </p>
                        <p className="text-[12px] text-[color:var(--textColor)] font-medium">
                            {"25 g"}
                        </p>
                    </div>
                    <div>
                        <p className="text-[color:var(--softTextColor)] text-[10px]">
                            Color
                        </p>
                        <p className="bg-[color:#AB5884] text-[12px] h-[15px] w-[25px] rounded-full mt-[2px]"></p>
                    </div>
                </div>
                <div>
                    <p className="text-[color:var(--softTextColor)] text-[10px]">Prix</p>
                    <p className=" text-[12px] font-medium text-[color:var(--textColor)]">
                        {"150 Dhs"}
                    </p>
                </div>
                <div className="flex justify-end gap-2">
                    <Link href={"/catalogue/id"}>
                        <Image
                            src={"/edit.svg"}
                            alt="edit icon"
                            width={15}
                            height={15}
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

        </div>
    )
}

export default CardItem