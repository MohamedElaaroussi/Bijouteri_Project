"use client";

import DetailBio from "@/components/detail/DetailBio";
import DetailCategories from "@/components/detail/DetailCategories";
import DetailImage from "@/components/detail/DetailImage";
import DetailStatus from "@/components/detail/DetailStatus";
import Select from "react-select";
import { colorArr, colorObject } from "@/utils/seed";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import catalogueSchema, { Catalogue } from "@/schema/catalogueSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import HeaderSection from "@/components/ui/header/HeaderSection";
import axios from "axios";

interface ParamsType {
  // Define the properties of the 'params' object
  id: string;
  // Add more properties as needed
}

// Edit or show a catalogue
const DetailCatalogue = ({ params }: { params: ParamsType }) => {
  const [selectedColor, SetSelectedColor] = useState("yellow");
  const changeColorHandler = (color: string) => {
    SetSelectedColor(color);
  };
  // VALIDATE THE catalogue
  const form = useForm<Catalogue>({
    resolver: zodResolver(catalogueSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    clearErrors,
  } = form;
  // SEND the catalogue data TO BACKEND
  const handleFormSubmit: SubmitHandler<Catalogue> = async (data) => {
    console.log(data);
  };
  const [Articles_ID, setArticles_ID] = useState<any[]>([]);
  console.log("-------------");
  console.log(Articles_ID);
  console.log("-------------");

  useEffect(() => {
    const fetchArticlesBy_Id = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/article/${params.id}`,
        );
        if (Array.isArray(response.data)) {
          setArticles_ID(response.data);
        } else {
          setArticles_ID([response.data]);
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de l'article",
          error,
        );
      }
    };

    fetchArticlesBy_Id();
  }, [params.id]);

  return (
    <>
      <HeaderSection pageTitle="Détails d'articles"></HeaderSection>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="flex gap-10">
          <div className="flex flex-col gap-5">
            <DetailImage src="/article.png"></DetailImage>
            <DetailStatus></DetailStatus>
            <DetailCategories></DetailCategories>
          </div>
          <div className="">
            <div className="flex flex-col gap-5">
              <DetailBio register={register} />
              <div className="flex gap-5 rounded-[20px] bg-white px-10 py-8">
                <div className="">
                  <p className="text-sm text-[color:var(--labelText)]">
                    Code bar
                  </p>
                  <input
                    type="text"
                    placeholder="564635443"
                    className="catalogue-input mb-2 px-5 py-3 placeholder:text-black"
                  />
                  <p className="text-sm text-[color:var(--labelText)]">
                    {"Poids d'or"}
                  </p>
                  <input
                    type="text"
                    placeholder="25 g"
                    className="catalogue-input mb-2 px-5 py-3 placeholder:text-black"
                  />
                  <p className="text-sm text-[color:var(--labelText)]">Cout</p>
                  <input
                    type="text"
                    placeholder="150 DH"
                    className="catalogue-input px-5 py-3 placeholder:text-black"
                  />
                </div>
                <div className="w-[200px]">
                  <p className="text-sm text-[color:var(--labelText)]">
                    {"Couleur d'or"}
                  </p>
                  <div className="flex gap-1">
                    {colorArr.map((color) => {
                      return (
                        <div
                          onClick={() => changeColorHandler(color)}
                          key={color}
                          className={`${colorObject[color]} relative mt-[2px] h-[20px] w-[35px] rounded-full`}
                        >
                          {color === selectedColor && (
                            <div className="absolute -right-1 -top-1 flex h-[11px] w-[11px] items-center justify-center rounded-full bg-green-500">
                              <Image
                                src={"/checked.svg"}
                                alt="check mark"
                                width={8}
                                height={4}
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-8">
                    <p className="mb-2 text-sm text-[color:var(--labelText)]">
                      {"Type"}
                    </p>
                    <Controller
                      name="typeArticle"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          options={[
                            { value: "1", label: "Diament" },
                            { value: "2", label: "Gold" },
                          ]}
                          placeholder="Créateur d'article"
                        ></Select>
                      )}
                    />
                  </div>
                </div>
              </div>
              <button className="self-end rounded-3xl bg-[color:var(--goldColor)] px-3 py-2 hover:cursor-pointer">
                <p className="text-sm text-white">
                  Sauvegarder les modifications
                </p>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default DetailCatalogue;
