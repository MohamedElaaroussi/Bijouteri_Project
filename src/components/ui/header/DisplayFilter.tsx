
import React, { useState } from "react";
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
import Datepicker from "react-tailwindcss-datepicker";


const DisplayFilter = ({ text, icon }: { text: string; icon: string }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = React.useState("md");

    const sizes = ["4xl"];

    const handleOpen = (size: string) => {
        setSize(size);
        onOpen();
    };
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const handleValueChange = (newValue: any) => {
        console.log("newValue:", newValue);
        setValue(newValue);
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

                            <Datepicker
                                // @ts-ignore
                                value={value} onChange={handleValueChange} />
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
}

export default DisplayFilter;