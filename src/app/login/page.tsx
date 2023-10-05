"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import loginSchema, { Login } from "@/schema/loginSchema";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ResetPassword from "@/components/reset-password/ResetPassword";

interface Props { }

const Login = (): JSX.Element | void => {

  const [showResetPasswordInput, setShowResetPasswordInput] = useState(false)
  const { status } = useSession();
  const router = useRouter();

  // VALIDATE THE USER LOGIN SCHEMA
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,

  } = useForm<Login>({
    resolver: zodResolver(loginSchema),
  });

  // SEND LOGIN INFO TO BACKEND
  const handleFormSubmit: SubmitHandler<Login> = async (data) => {
    const signRes = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
  };

  // 
  const showResetHandler = () => {

    clearErrors()
    setShowResetPasswordInput(prev => true)
  }

  useEffect((): any => {
    if (status === "authenticated") {
      return router.push("/");
    }
  }, [status, router])

  if (status === "loading") {
    return <div>Loading ...</div>;
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

          {/* if the user forget the password then show the reset input component */}
          {showResetPasswordInput ? <ResetPassword setShowResetPasswordInput={setShowResetPasswordInput} /> : <div className="my-10">
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
                  className={`text-neutral-600 border-none outline-none p-3 placeholder:text-xs ${errors.email ? "text-red-600" : ""
                    }`}
                />

              </div>
              {errors.email && (
                <p className="text-xs italic text-red-500 mt-2">
                  {errors.email?.message}
                </p>
              )}
              <hr />

              <div className="flex gap-2">
                <Image
                  src={"/lock.svg"}
                  width={10}
                  height={10}
                  alt="lock"></Image>
                <input
                  {...register("password")}
                  className={`border-none outline-none p-3 placeholder:text-xs  ${errors.email ? "text-red-600" : ""
                    }`}
                  type="password"
                  placeholder="Mot de passe"
                />

              </div>
              {errors.password && (
                <p className="text-xs italic text-red-500 mt-2">
                  {errors.password?.message}
                </p>
              )}
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

            <p className="text-center mt-10" onClick={showResetHandler}>
              <Link
                href=""
                className="hover:text-[color:var(--goldColor)] text-xs text-neutral-500">
                Mot de passe oublié ?
              </Link>
            </p>
          </div>}
        </div>
      </form>

      <div className="hidden relative flex-[4] lg:block">
        <Image
          style={{ "borderBottomLeftRadius": "60px" }}
          className="object-cover"
          src={"/bg-login.png"}
          alt="login-bg"
          fill></Image>
      </div>
    </div>
  );
};

export default Login;
