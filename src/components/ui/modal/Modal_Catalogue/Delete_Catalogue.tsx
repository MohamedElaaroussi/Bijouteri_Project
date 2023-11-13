import axios from 'axios';
import Image from 'next/image';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

import React, { useEffect, useState, useMemo } from 'react';



interface DeleteUserProps {
  catalogueId: string;
  onDelete: (catalogueId: string) => void;
}

const Delete_Catalogue: React.FC<DeleteUserProps> = ({ catalogueId, onDelete }) => {
  
  
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);

  // Start Api pour deleter les users
  const handleDeleteUser = async (catalogueId: string) => {
    try {
      await axios.delete(`http://localhost:3000/api/catalogue/${catalogueId}`);
      onDelete(catalogueId);
      setConfirmationOpen(false);

      


    } catch (error) {
      console.error("Erreur lors de la suppression de l'utilisateur", error);
    }
  };

  // End Api pour deleter les users

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const modalContent = useMemo(() => {
    return (
      <>
        <ModalHeader className="flex gap-1"></ModalHeader>
        <ModalBody>
          <div className='flex justify-center text-[#787878] text-[22px] font-semibold font-sans font-inter'>
            {isConfirmationOpen ? "Confirmez-vous la suppression ?" : "Cliquez à nouveau pour confirmer la suppression"}
          </div>
          <div className='text-center text-[14px] text-[#787878] font-normal ml-[4rem] w-[285px] h-[53px]'>
            {isConfirmationOpen ? "Si vous confirmez, votre dossier sera définitivement effacé" : "Veuillez cliquer à nouveau pour confirmer la suppression"}
          </div>
          <div className='flex flex-row justify-center gap-6 text-center'>
            {isConfirmationOpen ? (
              <>
                <Button
                  onClick={() => {
                    handleDeleteUser(catalogueId);
                    //@ts-ignore
                    onOpenChange(false);
                  }}
                  className="rounded-full bg-[#D9A528] w-[172px] h-[45px] text-[#FFF] font-somibold font-sans font-inter"
                >
                  Je confirme
                </Button>
                <Button
                  onPress={() =>
                    //@ts-ignore
                    onOpenChange(false)}
                  className="rounded-full bg-[#D62832] w-[172px] h-[45px] text-[#FFF] font-somibold font-sans font-inter"
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
  }, [isConfirmationOpen, catalogueId, onOpenChange, handleDeleteUser]);

  return (
    <div className=''>
      <>
        <button onClick={() => { onOpen(); setConfirmationOpen(true); }}
          //@ts-ignore
          color="white"
          className='pt-3'>
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
          className='h-[13.4rem]'
        >
          <ModalContent>
            {(onClose) => modalContent}
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};

export default Delete_Catalogue;
