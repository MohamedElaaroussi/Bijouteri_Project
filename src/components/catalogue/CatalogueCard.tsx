import Image from "next/image";

const CardItem = () => {
    return (
        <div className="bg-white flex p-3 w-[30%] gap-2 rounded-3xl">
            <div className="w-[119px] h-[180px] relative">
                <Image
                    className="object-cover rounded-lg"
                    src={"/article.png"}
                    alt="article"
                    style={{ border: "1px solid #EBF1FF" }}
                    fill />
                <Image src={"/barcode.png"} alt="barcode" className="object-cover absolute -bottom-4 left-4" width={70} height={30} />
            </div>

            <div className="flex flex-col gap-2 justify-between">
                <div className="">
                    <p className="text-[color:var(--textColor)] text-sm font-medium">
                        Bague en argent 18 carats ...
                    </p>
                    <p className="text-[color:var(--softTextColor)] text-xs mt-3">
                        Code Bar:{" "}
                    </p>
                    <p className="text-sm text-[color:var(--textColor)]">
                        {"#5484168168"}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-1">
                    <div>
                        <p className="text-[color:var(--softTextColor)] text-xs">
                            Type
                        </p>
                        <p className="text-sm text-[color:var(--textColor)] font-medium">
                            {"Type"}
                        </p>
                    </div>
                    <div>
                        <p className="text-[color:var(--softTextColor)] text-xs">
                            Poids
                        </p>
                        <p className="text-sm text-[color:var(--textColor)] font-medium">
                            {"25 g"}
                        </p>
                    </div>
                    <div>
                        <p className="text-[color:var(--softTextColor)] text-xs">
                            Color
                        </p>
                        <p className="bg-[color:#AB5884] text-sm h-[15px] w-[25px] rounded-full"></p>
                    </div>
                </div>
                <div>
                    <p className="text-[color:var(--softTextColor)] text-xs">Prix</p>
                    <p className=" text-sm font-medium text-[color:var(--textColor)]">
                        {"150 Dhs"}
                    </p>
                </div>
                <div className="flex justify-end gap-2">
                    <Image
                        src={"/edit.svg"}
                        alt="edit icon"
                        width={15}
                        height={15}></Image>
                    <Image
                        src={"/delete.svg"}
                        alt="delete icon"
                        width={15}
                        height={15}></Image>
                </div>
            </div>

        </div>
    )
}

export default CardItem