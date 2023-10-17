import React, { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Details from "@/component/Details_Filter/Details";

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const sizes = ["5xl"];

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3 pt-[5rem] ">
        {sizes.map((size) => (
          <span className="flex w-16 pl-2  pr-[-6rem]  ">
            <Button
            key={size}
              onPress={() => handleOpen(size)}
            className="bg-[#24b4fb] transition-all duration-[ease-in-out] 
            delay-[0.2s] text-base mr-[-35px] pr-2 rounded-[0.9em]
             border-2 border-solid border-[#24b4fb] hover:bg-[#0071e2]">
              <span className="flex justify-center items-center pl-6 gap-2 text-white font-semibold">
              <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_980_2139)">
                <path d="M9.69939 0.000976562C9.80086 0.066274 9.91781 0.0629764 10.0254 0.0972693C10.5395 0.256029 10.9943 0.604509 11.3203 1.08942C11.6463 1.57433 11.8256 2.16899 11.8307 2.78246C11.8368 3.95358 11.8335 5.12518 11.8307 6.29677C11.8307 6.72191 11.5658 7.03383 11.2166 7.03101C10.8673 7.02819 10.6122 6.71487 10.6118 6.28597C10.6118 5.16135 10.6118 4.03674 10.6118 2.91212C10.6118 1.99843 10.0996 1.40887 9.30777 1.40887C8.14418 1.40887 6.98073 1.40887 5.81742 1.40887C5.02603 1.40887 4.51337 2.0003 4.51337 2.91446C4.51337 4.04519 4.51541 5.17545 4.51337 6.30618C4.51337 6.81165 4.11727 7.14892 3.71343 6.99672C3.47707 6.90793 3.29817 6.65613 3.29735 6.3677C3.29369 5.12 3.27209 3.87137 3.3055 2.62508C3.33851 1.3957 4.16373 0.326521 5.20533 0.06862C5.26075 0.0549968 5.32758 0.0686127 5.36834 0.00237577L9.69939 0.000976562Z" fill="#787878"/>
                <path d="M12.9909 9.84247C13.1657 10.9478 12.9151 11.9047 12.3075 12.7475C12.1082 13.0247 11.8641 13.244 11.6049 13.4428C10.9073 13.9764 10.2129 14.5152 9.51318 15.0451C9.47238 15.071 9.43905 15.1101 9.41732 15.1577C9.3956 15.2052 9.38642 15.259 9.39093 15.3124C9.39419 15.7559 9.41905 16.1998 9.27642 16.6306C9.01194 17.4292 8.34199 17.9858 7.60276 17.9962C7.18628 18.0018 6.76939 18.0009 6.35292 17.9962C6.27136 17.9983 6.19027 17.9814 6.11456 17.9463C6.03884 17.9113 5.97007 17.8589 5.91241 17.7924C5.85474 17.7259 5.80937 17.6466 5.77904 17.5593C5.74871 17.472 5.73405 17.3785 5.73594 17.2845C5.73268 16.6165 5.73268 15.9486 5.73594 15.2809C5.73909 15.2357 5.7308 15.1904 5.71207 15.1504C5.69334 15.1105 5.66497 15.0777 5.6304 15.0559C4.91263 14.5085 4.19554 13.9579 3.47913 13.4042C2.5769 12.704 2.10948 11.7259 2.07688 10.4701C2.07234 10.2942 2.09159 10.1186 2.13393 9.94956C2.15512 9.86595 2.13638 9.83777 2.05814 9.84059C1.88535 9.84716 1.71256 9.84294 1.53978 9.84059C1.13227 9.84059 0.854749 9.55309 0.857194 9.13218C0.859639 8.71878 1.1343 8.43457 1.53367 8.43457H7.60072C9.60786 8.43457 11.615 8.43457 13.6221 8.43457C14.0753 8.43457 14.3732 8.87757 14.2428 9.35109C14.2045 9.49144 14.1287 9.61423 14.0263 9.7019C13.9238 9.78957 13.7999 9.83763 13.6723 9.83919C13.4473 9.84623 13.224 9.84247 12.9909 9.84247ZM7.56405 9.84247C6.32982 9.84247 5.09547 9.84247 3.86097 9.84247C3.50888 9.84247 3.28475 10.1004 3.2986 10.5034C3.32428 11.2461 3.61565 11.8188 4.15031 12.2312C4.95596 12.8508 5.75835 13.4766 6.57053 14.0859C6.83989 14.2883 6.96948 14.5397 6.95889 14.9136C6.94422 15.4303 6.95889 15.9442 6.95278 16.4596C6.95278 16.5686 6.9756 16.6005 7.06973 16.5939C7.22703 16.5841 7.38474 16.5939 7.54204 16.5911C7.91451 16.5864 8.17124 16.29 8.17409 15.8597C8.17654 15.5262 8.18102 15.1921 8.17409 14.8586C8.16635 14.5354 8.27882 14.3043 8.51314 14.1263C9.35181 13.4899 10.1871 12.8479 11.0189 12.2002C11.5218 11.8084 11.7932 11.2522 11.8311 10.556C11.8564 10.0994 11.6363 9.84387 11.2378 9.84387L7.56405 9.84247Z" fill="#787878"/>
                <path d="M7.56476 4.21857C7.16866 4.21857 6.77255 4.21857 6.37645 4.21857C6.00643 4.21857 5.73543 3.91745 5.73584 3.51392C5.73625 3.11039 6.00684 2.81209 6.37645 2.80927C7.16866 2.80739 7.96086 2.80739 8.75307 2.80927C9.12309 2.80927 9.39368 3.10945 9.39368 3.51392C9.39368 3.91839 9.12309 4.21481 8.75307 4.21857C8.35697 4.21998 7.96086 4.21857 7.56476 4.21857Z" fill="#787878"/>
                <path d="M7.56282 7.03057C7.17201 7.03057 6.7808 7.03057 6.38959 7.03057C6.00815 7.03057 5.73512 6.73274 5.73757 6.32592C5.74001 5.91911 6.01182 5.62645 6.3957 5.62598C7.17785 5.62598 7.95987 5.62598 8.74175 5.62598C9.124 5.62598 9.39663 5.92287 9.39377 6.33062C9.39092 6.73838 9.11992 7.02962 8.73564 7.03103C8.34443 7.0315 7.95362 7.03057 7.56282 7.03057Z" fill="#787878"/>
                </g>
                <defs>
                <clipPath id="clip0_980_2139">
                <rect width="13.4161" height="18" fill="white" transform="translate(0.857178)"/>
                </clipPath>
                </defs>
              </svg> 
                filtrer
              </span>
            </Button>
          </span>
        ))}
      </div>
      <Modal size={size} isOpen={isOpen} onClose={onClose}>
        <ModalContent className="w-[50rem] px-6 py-6 pl-5">
          {(onClose) => (
            <div className="r-6">
              <Details />
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
