
import React from "react";
import Image from "next/image";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";


const DisplayFilter = ({ text, icon }: { text: string; icon: string }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = React.useState("md");
  
    const sizes = ["4xl"];
  
    const handleOpen = (size: string) => {
      setSize(size);
      onOpen();
    };
  
        return (
            <div >
                {sizes.map((size) => (
                    <Button
                        key={size}
                        onPress={() => handleOpen(size)}
                        className="hover:cursor-pointer flex items-center bg-white rounded-[60px] h-[45px] mt-[8px]
                         border-[1px] p-3 border-[var(--borderColor)] gap-2"
                    >
                        <div className="hover:cursor-pointer flex items-center bg-white
                          p-3 border-[var(--borderColor)] gap-2">
                            <div className="hover:cursor-pointer flex items-center bg-white rounded-[60px]  gap-2">
                                <Image src={icon} alt="date" width={"13"} height={"13"}></Image>
                                <p className="text-xs text-[var(--textColor)] font-medium">{text}</p>
                            </div>
                        </div>
                    </Button>
                ))}

                <Modal 
                // @ts-ignore
                size={size} isOpen={isOpen} onClose={onClose}>
                    <ModalContent>
                        
                        <ModalBody>
                            <div>
                                <div className="flex gap-10 pt-8 ">
                                    <div>
                                        <input
                                            type="text"
                                            id="first_name"
                                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5"
                                            placeholder="ID"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            id="first_name"
                                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5"
                                            placeholder="Clients"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <select className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5">
                                            <option selected>Etat</option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="FR">France</option>
                                            <option value="DE">Germany</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex gap-10 pt-8 pb-8">
                                    <div>
                                        <input
                                            type="date"
                                            id="first_name"
                                            value={"date"}
                                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            id="first_name"
                                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[11rem] p-2.5"
                                            placeholder="Poids D’or total"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <select className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[11rem] p-2.5">
                                            <option selected>Etat</option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="FR">France</option>
                                            <option value="DE">Germany</option>
                                        </select>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            className="text-white bg-[#D9A528] from-purple-600 to-blue-500 rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                        >
                                            Recherche
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </div>
        );
    }

export default DisplayFilter;