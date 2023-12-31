import React from "react";

// import {Paginate} from "@/component/Paginate/Paginate.js"
import "../component/Header/style.css";
import "../component/section1/style.css";
import "../component/User/style.css";
import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import AuthProvider from "@/providers/AuthProvider";
import ReactQueryPro from "@/providers/ReactQueryPro";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "/logo.png",
  },
};

// Global Layout
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <ReactQueryPro>
        <body className={inter.className}>
          <link rel="icon" href="/logo.png" sizes="any" />
          <AuthProvider>
            <Providers>{children}</Providers>
          </AuthProvider>
          <ToastContainer />
        </body>
      </ReactQueryPro>
    </html>
  );
}
