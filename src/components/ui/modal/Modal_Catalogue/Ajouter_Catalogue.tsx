"use client";
import Image from "next/image";
import React, { ReactNode, useRef, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { any, boolean, number } from "zod";
import { colorArr, colorObject } from "@/utils/seed";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Ajouter_Catalogue = ({
  label,
  setCheck,
}: {
  label: string;
  setCheck: boolean;
}): ReactNode => {
  // const [ApiPassed, setApiPassed] = useState<boolean>()

  const [catalogueName, setCatalogueName] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const PostData = async () => {
    setFormSubmitted(true);

    if (catalogueName && status && description && selectedImage) {
      try {
        const imageData = await convertImageToBase64(selectedImage);
        const jsonData = {
          catalogue: catalogueName,
          status: status,
          description: description,
          img: imageData,
        };

        const response = await axios.post(
          "http://localhost:3000/api/catalogue",
          jsonData,
        );
        console.log("Réponse du serveur :", response.data);
        notify();
        setSelectedImage(null);
        // @ts-ignore
        onClose();
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de l'insertion des données",
          error,
        );
      }
    }
  };

  const convertImageToBase64 = (image: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result?.toString().split(",")[1] || "";
        resolve(base64String);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(image);
    });
  };

  const notify = () =>
    toast.success("Information ajouter avec success !", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const sizes = ["4xl"];
  const [selectedColor, SetSelectedColor] = useState("yellow");
  const changeColorHandler = (color: string) => {
    SetSelectedColor(color);
  };

  const handleOpen = (size: string) => {
    setSize(size);
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <Button
            key={size}
            className="mt-[12px] h-[45px] rounded-3xl bg-[color:var(--goldColor)] 
                        p-3 outline-none hover:cursor-pointer"
            onPress={() => handleOpen(size)}
          >
            <div
              className="flex items-center 
                        justify-center gap-2 "
            >
              <Image
                src={"/ajouter.svg"}
                alt="export logo"
                width={15}
                height={15}
              ></Image>
              <span className="text-sm font-normal text-white">{label}</span>
            </div>
          </Button>
        ))}
      </div>
      <Modal
        // @ts-ignore
        size={size}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className="text-[22px] font-semibold text-[#4D4D4D]">
                  {"Ajouter un catalogue"}
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="flex gap-10">
                  <div>
                    <div className="flex gap-10 pt-2 ">
                      <div>
                        <input
                          type="text"
                          id="first_name"
                          className=" font-somibold block w-[15rem] rounded-lg border border-gray-300 bg-white 
                            p-2.5 text-[14px] text-[#C1C4C7] focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Nom du catalogue"
                          required
                          value={catalogueName}
                          onChange={(e) => setCatalogueName(e.target.value)}
                        />
                        {formSubmitted && !catalogueName && (
                          <span className="fas fa-exclamation	text-[12px] text-red-500">
                            {"! Required"}
                          </span>
                        )}
                      </div>

                      <div>
                        <select
                          className="text-Input w-[15rem] rounded-lg border border-gray-300 p-2.5
                                                        font-inter text-base text-[#C1C4C7]"
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                        >
                          <option selected disabled>
                            Status
                          </option>
                          <option value="Activer">Activer</option>
                          <option value="Désactiver">Désactiver</option>
                        </select>
                        {formSubmitted && !status && (
                          <span className="fas fa-exclamation	text-[12px] text-red-500">
                            {"! Required"}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="mt-6">
                      <textarea
                        className="block h-[115px] w-[32.5rem] rounded-lg border border-[#E9EFF4] bg-white bg-white 
                                                    p-2.5 text-sm text-gray-900"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      {formSubmitted && !description && (
                        <span className="fas fa-exclamation	text-[12px] text-red-500">
                          {"! Required"}
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="flex w-full items-center justify-center">
                      <label
                        className="border-[#E9EFF4)] ml-6 flex max-h-[40rem] max-w-[250px]  cursor-pointer flex-col
                                             items-center justify-center
                    rounded-lg border-2 border-dashed bg-white "
                      >
                        {selectedImage ? (
                          <Image
                            src={URL.createObjectURL(selectedImage)}
                            alt="Selected Image"
                            width={150}
                            height={150}
                          />
                        ) : (
                          <span className="h-[211px] w-[250px]  pt-[30%]">
                            <Image
                              src={"/Icons_Plus.svg"}
                              width={30}
                              className="w-auto pl-[45%] "
                              height={30}
                              alt="Ajouter image"
                            />
                            <p className="ml-2 mt-2 text-center text-xs text-gray-500 dark:text-gray-400">
                              Ajouter image
                            </p>
                          </span>
                        )}
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                          onChange={(e) =>
                            //@ts-ignore
                            setSelectedImage(e.target.files?.[0])
                          }
                        />
                        {formSubmitted && !selectedImage && (
                          <span className="fas fa-exclamation	text-[12px] text-red-500">
                            {"! Required"}
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
              </ModalBody>

              <ModalFooter>
                {/* Add a <span> to indicate required field */}
                {selectedImage && status && catalogueName && description ? (
                  <button
                    type="reset"
                    color="warning"
                    className="h-[45px] w-[200px] rounded-full bg-[#D9A528] text-white"
                    onClick={() => {
                      PostData();
                      notify();
                      setSelectedImage(null);
                      //@ts-ignore
                      setCheck(true);
                      onClose();
                    }}
                  >
                    Ajouter
                  </button>
                ) : (
                  ""
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Ajouter_Catalogue;
