"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Router from 'next/router';

import 'nprogress/nprogress.css'; 

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status == "authenticated") router.push("/dashboard");
    if (status == "unauthenticated") router.push("/login");
  }, [status, router]);
  if (status == "loading") return
   <div>Loding...</div>;
}
