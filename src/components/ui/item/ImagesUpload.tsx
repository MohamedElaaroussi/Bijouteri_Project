import Image from 'next/image';
import React, { useState } from 'react'

const ImagesUpload = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [selectedColor, SetSelectedColor] = useState("yellow");
    const changeColorHandler = (color: string) => {
        SetSelectedColor(color);
    };
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
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
    return (
        <div>
            <div className='mt-5'>
                <div className="flex w-full items-center justify-center">
                    <label
                        className="border-[#E9EFF4)] ml-6 flex max-h-[40rem] max-w-[250px]  cursor-pointer flex-col
                          items-center justify-center rounded-lg border-2 border-dashed bg-white "
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
    )
}

export default ImagesUpload
