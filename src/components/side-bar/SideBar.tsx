"use client"
import Image from "next/image";
import { menus } from "@/utils/seed";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const SideBar = () => {
  const handleLogout = async () => {
    try {
      // fonction signOut pour déconnecter user .
      await signOut(); 
      redirect('/login')
      // Redirigez l'utilisateur vers la page de connexion ou la page d'accueil après la déconnexion.
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
    }
  };

  // get the path name and remove the /
  let path = usePathname()
  path = path.slice(1)

  // class to be applied on the active menu
  const activeMenuClass = "bg-[color:var(--goldColor)] text-white"

  // class that change svg icon color to white when the specific menu is active
  const activeIconClass = "brightness-[10]"

  return (
    <div className="bg-[color:white] text-black w-[250px] h-max sidebar">
      <div className="px-3 py-5 flex flex-col gap-10">
        <div className="flex items-center justify-center">
          <Image
            src={"/logo.svg"}
            width={150}
            height={150}
            alt="Marina"></Image>
        </div>

        <div className="flex flex-col gap-3">
          {menus.map(menu => {
            return (
              <Link href={`/${menu.path}`}
                key={menu.name}
                className={`flex gap-2 items-center py-2 pl-6 rounded-2xl hover:bg-[color:var(--goldColor)] hover:text-white ${menu.path == path ? activeMenuClass : "text-[var(--textColor)]"
                  }`}>
                <Image
                  src={`/${menu.name}.svg`}
                  width={20}
                  height={20}
                  alt="dashboard"
                  className={`${menu.path == path && activeIconClass}`}
                />
                <span className="text-sm font-medium">
                  {menu.name}
                </span>
              </Link>
            );
          })}
        </div>
        <div className="flex justify-between px-3">
          <div className="flex flex-col gap-1 items-center">
            <button onClick={handleLogout} className="flex gap-3">
              <Image src={"/Deconnexion.svg"} alt="Deconnexion" width={20} height={20}></Image> 
              <span className="pt-[-2] text-[#787878]">Deconnexion</span>
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
