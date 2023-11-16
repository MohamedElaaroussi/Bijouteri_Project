import axios from "axios";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
<<<<<<< HEAD
  
} from "@nextui-org/react";

import React, {  useState, useMemo } from 'react';

=======
} from "@nextui-org/react";
>>>>>>> cd86eaf299dccf9aff2c1c69f77848f93f852995

import React, { useState, useMemo } from "react";

interface DeleteUserProps {
  catalogueId: string;
  onDelete: (catalogueId: string) => void;
  setDeleteCatalogueIcon: boolean;
}

const Delete_Catalogue: React.FC<DeleteUserProps> = ({
  catalogueId,
  onDelete,
  setDeleteCatalogueIcon,
}) => {
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);

  // End Api pour deleter les users

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const modalContent = useMemo(() => {
    // Start Api pour deleter les users
    const handleDeleteUser = async (catalogueId: string) => {
      try {
        await axios.delete(
          `http://localhost:3000/api/catalogue/${catalogueId}`,
        );
        onDelete(catalogueId);
        setConfirmationOpen(false);
      } catch (error) {
        console.error("Erreur lors de la suppression de l'utilisateur", error);
      }
    };
    return (
      <>
        <ModalHeader className="flex gap-1"></ModalHeader>
        <ModalBody>
          <div className="flex justify-center text-[22px] font-semibold text-[#787878]">
            {isConfirmationOpen
              ? "Confirmez-vous la suppression ?"
              : "Cliquez à nouveau pour confirmer la suppression"}
          </div>
          <div className="ml-[4rem] h-[53px] w-[285px] text-center text-[14px] font-normal text-[#787878]">
            {isConfirmationOpen
              ? "Si vous confirmez, votre dossier sera définitivement effacé"
              : "Veuillez cliquer à nouveau pour confirmer la suppression"}
          </div>
          <div className="flex flex-row justify-center gap-6 text-center">
            {isConfirmationOpen ? (
              <>
                <Button
                  onClick={() => {
                    handleDeleteUser(catalogueId);
                    //@ts-ignore
                    onOpenChange(false);
                    //@ts-ignore
                    setDeleteCatalogueIcon(true);
                  }}
                  className="font-somibold h-[45px] w-[172px] rounded-full bg-[#D9A528] text-[#FFF]"
                >
                  Je confirme
                </Button>
                <Button
                  onPress={() =>
                    //@ts-ignore
                    onOpenChange(false)
                  }
                  className="font-somibold h-[45px] w-[172px] rounded-full bg-[#D62832] text-[#FFF]"
                >
                  Annuler
                </Button>
              </>
            ) : null}
          </div>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </>
    );
  }, [
    isConfirmationOpen,
    catalogueId,
    onOpenChange,
    onDelete,
    setDeleteCatalogueIcon,
  ]);

  return (
    <div className="">
      <button
        onClick={() => {
          onOpen();
          setConfirmationOpen(true);
        }}
        //@ts-ignore
        color="white"
        className="pt-3"
      >
        <Image
          src="/delete.svg"
          alt="delete icon"
          width={15}
          height={15}
          className="hover:cursor-pointer"
        />
      </button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        className="h-[13.4rem]"
      >
        <ModalContent>{(onClose) => modalContent}</ModalContent>
      </Modal>
    </div>
  );
};

export default Delete_Catalogue;
