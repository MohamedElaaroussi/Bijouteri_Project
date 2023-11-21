"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import loginSchema, { Login } from "@/schema/loginSchema";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ResetPassword from "@/components/reset-password/ResetPassword";
import { toast } from "react-toastify";
import { Spinner } from "@nextui-org/react";

const Login = (): JSX.Element | undefined => {
  const [showResetPasswordInput, setShowResetPasswordInput] = useState(false);
  const { status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
    setIsLoading((prev) => !prev);
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    }).then((res) => {
      setIsLoading((prev) => !prev);
      if (res?.error) {
        toast.error(
          "Les informations d'identification fournies ne sont pas correctes",
        );
      }
    });
  };

  //
  const showResetHandler = () => {
    clearErrors();
    setShowResetPasswordInput((prev) => true);
  };

  useEffect((): any => {
    if (status === "authenticated") {
      return router.push("/dashboard");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="mt-[8rem] text-center">
        <Spinner label="Loading..." color="warning" />
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="flex h-screen overflow-x-hidden">
        <form className="flex-[5]" onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="flex h-screen flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <Image
                src={"/logo.svg"}
                width={300}
                height={300}
                alt="logo"
                className="mb-2"
              ></Image>
              <p className="text-md font-normal text-neutral-500">
                Content de vous revoir
              </p>
            </div>

            {/* if the user forget the password then show the reset input component */}
            {showResetPasswordInput ? (
              <ResetPassword
                setShowResetPasswordInput={setShowResetPasswordInput}
              />
            ) : (
              <div className="my-10">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <Image
                      src={"/user-icon.svg"}
                      width={10}
                      height={10}
                      alt="user"
                    ></Image>
                    <input
                      {...register("email")}
                      placeholder="Identifiant ou adresse e-mail"
                      className={`border-none p-3 text-neutral-600 outline-none placeholder:text-xs ${
                        errors.email ? "text-red-600" : ""
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-xs italic text-red-500">
                      {errors.email?.message}
                    </p>
                  )}
                  <hr />

                  <div className="flex gap-2">
                    <Image
                      src={"/lock.svg"}
                      width={10}
                      height={10}
                      alt="lock"
                    ></Image>
                    <input
                      {...register("password")}
                      className={`border-none p-3 outline-none placeholder:text-xs  ${
                        errors.email ? "text-red-600" : ""
                      }`}
                      type="password"
                      placeholder="Mot de passe"
                    />
                  </div>
                  {errors.password && (
                    <p className="mt-2 text-xs italic text-red-500">
                      {errors.password?.message}
                    </p>
                  )}
                  <hr className="mb-5" />
                </div>

                <button
                  disabled={isLoading}
                  className="w-full rounded-[10px] bg-[color:var(--goldColor)] p-2 text-sm text-white hover:bg-[color:var(--softGoldColor)]"
                >
                  {isLoading ? <Spinner color="white" /> : "Se Connecter"}
                </button>
                <div className="my-4 flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="rounded-[5px] border border-gray-200"
                  />
                  <span className="text-xs font-normal leading-7 text-neutral-500">
                    Se souvenir de moi
                  </span>
                </div>

                <p className="mt-10 text-center" onClick={showResetHandler}>
                  <Link
                    href=""
                    className="text-xs text-neutral-500 hover:text-[color:var(--goldColor)]"
                  >
                    Mot de passe oublié ?
                  </Link>
                </p>
              </div>
            )}
          </div>
        </form>

        <div className="relative hidden flex-[4] lg:block">
          <Image
            style={{ borderBottomLeftRadius: "60px" }}
            className="object-cover"
            src={"/bg-login.png"}
            alt="login-bg"
            fill
          ></Image>
        </div>
      </div>
    );
  }
};

export default Login;
