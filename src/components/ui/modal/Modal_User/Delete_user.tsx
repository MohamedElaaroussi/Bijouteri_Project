import axios from 'axios';
import Image from 'next/image';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";

import { useRouter } from 'next/router';
import { useState } from 'react';

interface DeleteUserProps {
    userId: string; // Vous pouvez ajuster le type en fonction de ce que renvoie votre API
    onDelete: (userId: string) => void;
    setcheck:boolean
}

const Delete_user: React.FC<DeleteUserProps> = ({ userId, onDelete,setcheck }) => {
    const [isConfirmationOpen, setConfirmationOpen] = useState(false);

    // Start Api pour deleter les users
    const handleDeleteUser = async (userId: string) => {
        try {
            await axios.delete(`http://localhost:3000/api/user/${userId}`);
            // Mettez à jour la liste des utilisateurs après la suppression
            onDelete(userId);
            setConfirmationOpen(false);
            //@ts-ignore
            setcheck(true) 
                
        } catch (error) {
            console.error("Erreur lors de la suppression de l'utilisateur", error);
        }
    };

    

    // End Api pour deleter les users

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div className=''>
            <>
                <Button onPress={() => { onOpen(); setConfirmationOpen(true); }}
                    // @ts-ignore
                    color="white" 
                    className='ml-[-22px] w-[30px] '>
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
                    className='h-[13.4rem]'
                >
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex  gap-1"></ModalHeader>
                                <ModalBody>
                                    <div className='flex justify-center text-[#787878] text-[22px] font-semibold font-sans font-inter'>
                                        {isConfirmationOpen
                                            ? "Confirmez-vous la suppression ?"
                                            : "Cliquez à nouveau pour confirmer la suppression"
                                        }
                                    </div>
                                    <div className='text-center text-[14px] text-[#787878] font-normal ml-[4rem] w-[285px] h-[53px]'>
                                        {isConfirmationOpen
                                            ? "Si vous confirmez, votre dossier sera définitivement effacé"
                                            : "Veuillez cliquer à nouveau pour confirmer la suppression"
                                        }
                                    </div>
                                    <div className='flex flex-row justify-center gap-6 text-center'>
                                        {isConfirmationOpen ? (
                                            <>
                                                <Button
                                                    onClick={() => {
                                                        handleDeleteUser(userId);
                                                        onClose();
                                                    }}
                                                    className="rounded-full bg-[#D9A528] w-[172px] h-[45px] text-[#FFF] font-somibold font-sans font-inter">
                                                    Je confirme
                                                </Button>
                                                <Button onPress={onClose}
                                                    className="rounded-full bg-[#D62832] w-[172px] h-[45px] text-[#FFF] font-somibold font-sans font-inter">
                                                    Annuler
                                                </Button>
                                            </>
                                        ) : null}
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </>
        </div>
    );
}

export default Delete_user