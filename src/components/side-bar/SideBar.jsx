import Image from "next/image";
import { menus } from "@/utils/seed";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

const SideBar = async () => {
  return (
    <div className="bg-[color:white] text-black w-[287px] h-[100vh]">
      <div className="px-3 py-5 flex flex-col gap-16">
        <div className="text-[color:var(--goldColor)] flex items-center justify-center">
          <Image
            src={"/logo.svg"}
            width={150}
            height={150}
            alt="Marina"></Image>
        </div>
        <div className="flex flex-col gap-3">
          {menus.map((menu, i) => {
            return (
              <div
                key={i}
                className={`flex gap-2 text-black py-2 pl-6 rounded-2xl ${
                  i == 1 && "bg-[color:var(--goldColor)]"
                }`}>
                <Image
                  src={"/dashboard.svg"}
                  width={20}
                  height={20}
                  alt="dashboard"
                />
                <span className="text-sm font-medium">{menu.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
