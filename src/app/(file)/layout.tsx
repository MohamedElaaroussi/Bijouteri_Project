"use client";

import "../globals.css";
import SideBar from "@/components/side-bar/SideBar";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Layout for authenticate user
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status == "unauthenticated") router.push("/login");
  }, [status, router]);

  if (status === "loading") return <div>Loding...</div>;

  return (
    status === "authenticated" && (
      <div className="flex">
        <SideBar />
        <div
          className={`min-h-screen w-[calc(100%-250px)] bg-[color:#EDF0F8] p-8`}
        >
          {children}
        </div>
      </div>
    )
  );
}
