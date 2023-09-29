"use client";

import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import loginSchema, { Login } from "@/schema/loginSchema";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Props {}

const Login: NextPage = (): JSX.Element => {
  const { status } = useSession();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: zodResolver(loginSchema),
  });
  const handleFormSubmit: SubmitHandler<Login> = async (data) => {
    const signRes = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
  };
  console.log(status);

  if (status === "loading") {
    return <div>Loading ...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="flex h-screen overflow-x-hidden">
      <form className="flex-[5]" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={"/logo.svg"}
              width={300}
              height={300}
              alt="logo"
              className="mb-2"></Image>
            <p className="text-neutral-500 text-md font-normal">
              Content de vous revoir
            </p>
          </div>

          <div className="my-10">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Image
                  src={"/user-icon.svg"}
                  width={10}
                  height={10}
                  alt="user"></Image>
                <input
                  {...register("email")}
                  placeholder="Identifiant ou adresse e-mail"
                  name="email"
                  className={`text-neutral-600 border-none outline-none p-3 placeholder:text-xs ${
                    errors.email ? "text-red-600" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-xs italic text-red-500 mt-2">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <hr />

              <div className="flex gap-2">
                <Image
                  src={"/lock.svg"}
                  width={10}
                  height={10}
                  alt="lock"></Image>
                <input
                  {...register("password")}
                  className={`border-none outline-none p-3 placeholder:text-xs  ${
                    errors.email ? "text-red-600" : ""
                  }`}
                  type="password"
                  placeholder="Mot de passe"
                  name="password"
                />
                {errors.password && (
                  <p className="text-xs italic text-red-500 mt-2">
                    {errors.password?.message}
                  </p>
                )}
              </div>
              <hr className="mb-5" />
            </div>

            <button className="hover:bg-[color:var(--softGoldColor)] bg-[color:var(--goldColor)] text-sm p-2 text-white w-full rounded-[10px]">
              Se Connecter
            </button>
            <div className="my-4 flex gap-2 items-center">
              <input
                type="checkbox"
                className="rounded-[5px] border border-gray-200"
              />
              <span className="text-neutral-500 text-xs font-normal leading-7">
                Se souvenir de moi
              </span>
            </div>

            <p className="text-center mt-10">
              <Link
                href=""
                className="hover:text-[color:var(--goldColor)] text-xs text-neutral-500">
                Mot de passe oublié ?
              </Link>
            </p>
          </div>
        </div>
      </form>

      <div className="hidden relative flex-[4] lg:block">
        <Image
          className="object-cover"
          src={"/bg-login.png"}
          alt="login-bg"
          fill></Image>
      </div>
    </div>
  );
};

export default Login;
