import {
  Modal,
  Button,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";

const ModalCustom = ({ isOpen, onOpenChange, description, handleDelete }) => {
  return (
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
              <div className="flex justify-center text-[22px] font-semibold text-[#787878]">
                {"Confirmez-vous la suppression ?"}
              </div>
              <div className="ml-[4rem] h-[53px] w-[285px] text-center text-[14px] font-normal text-[#787878]">
                {description}
              </div>
              <div className="flex flex-row justify-center gap-6 text-center">
                <>
                  <Button
                    onClick={() => {
                      handleDelete();
                      onClose();
                    }}
                    className="h-[45px] w-[172px] rounded-full bg-[#D9A528] font-semibold text-[#FFF]"
                  >
                    Je confirme
                  </Button>
                  <Button
                    onPress={onClose}
                    className="h-[45px] w-[172px] rounded-full bg-[#D62832] font-semibold text-[#FFF]"
                  >
                    Annuler
                  </Button>
                </>
              </div>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalCustom;
