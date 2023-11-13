"use client"
import Image from 'next/image'
import React, { ReactNode, useRef, useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { any, boolean, number } from 'zod';
import { colorArr, colorObject } from '@/utils/seed';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Ajouter_Catalogue = ({ label, setCheck }: { label: string, setCheck: boolean }): ReactNode => {
    // const [ApiPassed, setApiPassed] = useState<boolean>()
    const [catalogueName, setCatalogueName] = useState('');
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Track whether the form has been submitted
    // console.log("Nom catalogue " + catalogueName + " Staus" + status + "description" + description)
    // console.log("/n Image " + selectedImage)
    const PostData = async () => {
        setFormSubmitted(true);

        if (catalogueName && status && description) {
            const formData = new FormData();
            const jsonData = {
                catalogue: catalogueName,
                status: status,
                description: description,
                img: "base64"
            };
            // const imageBlob = new Blob([imageBytes], { type: 'image/jpeg' }); // Assurez-vous de spécifier le type correct

            // formData.append('json_data', JSON.stringify(jsonData));

            // if (selectedImage) {
            //     formData.append('image', selectedImage);
            // }

            try {
                const response = await axios.post('http://localhost:3000/api/catalogue', jsonData);

                // Traitez la réponse ici (par exemple, affichez un message de succès).
                console.log('Réponse du serveur :', response.data);
                notify(); // Affichez un toast pour indiquer que l'information a été ajoutée avec succès.
                setSelectedImage(null);
                //@ts-ignore
                setCheck(true);
                onClose();
            } catch (error) {
                console.error("Une erreur s'est produite lors de l'insertion des données", error);
                // Traitez les erreurs ici (par exemple, affichez un message d'erreur).
            }
        }
    };

    const notify = () => toast.success('Information ajouter avec success !', {
        position: toast.POSITION.BOTTOM_RIGHT
    });





    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = React.useState('md')

    const sizes = ["4xl"];
    const [selectedColor, SetSelectedColor] = useState("yellow");
    const changeColorHandler = (color: string) => {
        SetSelectedColor(color);
    };


    const handleOpen = (size: string) => {
        setSize(size)
        onOpen();
    }

    return (
        <>
            <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                    <Button key={size} className='h-[45px] mt-[12px] p-3 bg-[color:var(--goldColor)] 
                        rounded-3xl hover:cursor-pointer outline-none'
                        onPress={() => handleOpen(size)}>
                        <div className='flex justify-center 
                        items-center gap-2 '>
                            <Image src={"/ajouter.svg"} alt='export logo' width={15} height={15}></Image>
                            <span className='text-white text-sm font-normal'>{label}</span>
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
                                <div className='text-[22px] text-[#4D4D4D] font-semibold'>
                                    {"Ajouter un catalogue"}
                                </div>
                            </ModalHeader>
                            <ModalBody>
                                <div className='flex gap-10'>
                                    <div>
                                        <div className="flex gap-10 pt-2 ">
                                            <div>
                                                <input
                                                    type="text"
                                                    id="first_name"
                                                    className=" bg-white border border-gray-300 text-[#C1C4C7] text-[14px] font-somibold rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5"
                                                    placeholder="Nom du catalogue"
                                                    required
                                                    value={catalogueName}
                                                    onChange={(e) => setCatalogueName(e.target.value)}
                                                />
                                                {formSubmitted && !catalogueName && (
                                                    <span className="fas fa-exclamation	text-red-500 text-[12px]">{"! Required"}</span>
                                                )}
                                            </div>

                                            <div>
                                                <select
                                                    className="border border-gray-300 text-[#C1C4C7] rounded-lg text-Input font-inter
                                                        text-base w-[15rem] p-2.5"
                                                    value={status}
                                                    onChange={(e) => setStatus(e.target.value)}
                                                >
                                                    <option selected disabled>Status</option>
                                                    <option value="Activer">Activer</option>
                                                    <option value="Désactiver">Désactiver</option>
                                                </select>
                                                {formSubmitted && !status && (
                                                    <span className="fas fa-exclamation	text-red-500 text-[12px]">{"! Required"}</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className='mt-6'>
                                            <textarea
                                                className="block p-2.5 w-[32.5rem] h-[115px] text-sm text-gray-900 bg-white rounded-lg 
                                                    border border-[#E9EFF4] bg-white"
                                                placeholder="Description"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                            />
                                            {formSubmitted && !description && (
                                                <span className="fas fa-exclamation	text-red-500 text-[12px]">{"! Required"}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-center w-full">
                                            <label className="flex flex-col items-center justify-center max-w-[250px]  max-h-[40rem] ml-6
                                             border-2 border-[#E9EFF4)]
                    border-dashed rounded-lg cursor-pointer bg-white ">
                                                {selectedImage ? (
                                                    <img src={URL.createObjectURL(selectedImage)} alt='Selected Image' width={150} height={150} />
                                                ) : (
                                                    <span className='w-[250px] h-[211px]  pt-[30%]'>
                                                        <Image src={"/Icons_Plus.svg"} width={30}
                                                            className='w-auto pl-[45%] '
                                                            height={30} alt='Ajouter image' />
                                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center ml-2">Ajouter image</p>
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
                                                    <span className="fas fa-exclamation	text-red-500 text-[12px]">{"! Required"}</span>
                                                )}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>

                            <ModalFooter>

                                {/* Add a <span> to indicate required field */}
                                {(selectedImage && status && catalogueName && description) ? (
                                    <button
                                        type='reset'
                                        color="warning"
                                        className='bg-[#D9A528] w-[200px] h-[45px] text-white rounded-full'
                                        onClick={() => {
                                            PostData();
                                            notify();
                                            setSelectedImage(null)
                                            //@ts-ignore
                                            setCheck(true);
                                            onClose();
                                        }}

                                    >
                                        Ajouter
                                    </button>
                                ) : ("")}

                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal >
        </>
    )
}

export default Ajouter_Catalogue



