"use client";
import Image from "next/image";
import { menus } from "@/utils/seed";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import MenuIcons from "../Icons/MenuIcons";
import { signOut } from "next-auth/react";

const SideBar = () => {
  const handleLogout = async () => {
    try {
      // fonction signOut pour déconnecter user .
      await signOut();
      redirect("/login");
      // Redirigez l'utilisateur vers la page de connexion ou la page d'accueil après la déconnexion.
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  };

  // get the path name and remove the /
  let path = usePathname();
  path = path.slice(1);

  // class to be applied on the active menu
  const activeMenuClass = "bg-[color:var(--goldColor)] hover:text-white text-white ";

  // class that change svg icon color to white when the specific menu is active
  const activeIconClass = "brightness-[10]";

  return (
    <div className="sidebar w-[250px] bg-[color:white] text-black">
      <div className="fixed flex flex-col gap-[20px] px-3 py-5">
        <div className="flex items-center  justify-center mr-3">
          <Image
            src={"/logo.svg"}
            width={150}
            height={150}
            alt="Marina"
          ></Image>
        </div>

        <div className=" flex flex-col gap-[2vh]">
          {menus.map((menu) => {
            return (
              <Link
                href={`/${menu.path}`}
                key={menu.name}
                className={`flex items-center gap-2 rounded-2xl py-2 pl-6 hover:text-[color:var(--goldColor)]  ${
                  menu.path == path
                    ? activeMenuClass
                    : "text-[var(--textColor)]"
                }`}
              >
                {/* <Image
                  src={`/${menu.name}.svg`} 
                  //@ts-ignore
                  clasName='hover:text-[color:var(--goldColor)] '
                  width={20}
                  height={20}
                  alt="dashboard"
                  className={`${menu.path == path && activeIconClass} hover:stroke`}
                /> */}
                <MenuIcons color={`${ menu.path == path ? `white`: `#787878`}`} name={menu.name} />
                <span
                  className={`text-sm font-medium hover:text-[color:var(--goldColor)] w-[25vh] ${ menu.path == path && ` hover:text-white`} `}
                >
                  {menu.name}
                </span>
              </Link>
            );
          })}
        </div>
        <div className="">
          <div className="fixed bottom-2 left-6">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3  "
            >
              <MenuIcons color="#787878" name="Deconnexion" />
              <span className="text-[#787878]">Deconnexion</span>
            </button>
          </div>
          {/* <div className="self-end flex gap-2 items-center">
            <Link href={"/"}>
              <Image src={"/logout.svg"} alt="user" width={20} height={20}></Image>
            </Link>
            <Link href={"/"}>
              <Image src={"/setting.svg"} alt="user" width={20} height={20}></Image>
            </Link>
            <Link className="relative" href={"/"}>
              <Image src={"/notification.svg"} alt="user" width={18} height={18}></Image>
              <div className="w-[12px] h-[12px] border-[3px] border-white rounded-full bg-red-500 absolute top-[1px] -right-[1px]"></div>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
