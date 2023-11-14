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
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { deleteArticle } from "@/api/article";
interface DeleteUserProps {
  articleId: string; // Vous pouvez ajuster le type en fonction de ce que renvoie votre API
  onDelete: (articleId: string) => void;
}

const Delete_Articles: React.FC<DeleteUserProps> = ({
  articleId,
  onDelete,
}) => {
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);

  // Access the client
  const queryClient = useQueryClient();

  // Start Api pour deleter les users
  const handleDeleteUser = async (articleId: string) => {
    try {
      await axios.delete(`http://localhost:3000/api/article/${articleId}`);
      // Mettez à jour la liste des utilisateurs après la suppression
      onDelete(articleId);
      setConfirmationOpen(false);
    } catch (error) {
      console.error("Erreur lors de la suppression de l'utilisateur", error);
    }
  };

  // End Api pour deleter les users

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="">
      <>
        <Button
          onPress={() => {
            onOpen();
            setConfirmationOpen(true);
          }}
          // @ts-ignore
          color="white"
          className="ml-[-22px] w-[30px] "
        >
          <Image
            src="/delete.svg"
            alt="Delete Icon"
            width={20}
            height={20}
            style={{ cursor: "pointer" }}
          />
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
          className="h-[13.4rem]"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex  gap-1"></ModalHeader>
                <ModalBody>
                  <div className="flex justify-center font-inter font-sans text-[22px] font-semibold text-[#787878]">
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
                            handleDeleteUser(articleId);
                            onClose();
                          }}
                          className="font-somibold h-[45px] w-[172px] rounded-full bg-[#D9A528] font-inter font-sans text-[#FFF]"
                        >
                          Je confirme
                        </Button>
                        <Button
                          onPress={onClose}
                          className="font-somibold h-[45px] w-[172px] rounded-full bg-[#D62832] font-inter font-sans text-[#FFF]"
                        >
                          Annuler
                        </Button>
                      </>
                    ) : null}
                  </div>
                </ModalBody>
                <ModalFooter></ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};

export default Delete_Articles;
