import Image from "next/image";
import React, { ReactNode, SetStateAction } from "react";
import CatalogueModalContent from "./CatalogueModalContent";

const Modal = ({
    setCloseModal,
}: {
    setCloseModal: React.Dispatch<SetStateAction<boolean>>;
}): ReactNode => {
    return (
        <>
            <div
                className="absolute bg-white top-1/2 left-1/2 z-50 p-6 rounded-[20px]"
                style={{ transform: "translate(-50%, -50%)" }}>
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-medium">Ajouter un catalogue</h1>
                    <div className="hover:cursor-pointer" onClick={() => setCloseModal((prev) => false)}>
                        <Image
                            src={"/close.svg"}
                            alt="close modal"
                            className=""
                            width={20}
                            height={20}
                        />
                    </div>
                </div>

                <CatalogueModalContent />
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
};

export default Modal;
