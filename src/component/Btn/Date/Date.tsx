import React from 'react'

const Date = () => {
    return (
        <div className="pt-20 ml-[-27px] ">
            <span className="bg-[#FFF] rounded-full flex h-[3rem] px-4 py-4 pt-[13px] gap-2">
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_57_11024)">
                  <path
                    d="M18.9 4.79778V14.7307C18.8359 14.7542 18.8606 14.8159 18.8507 14.8589C18.5459 16.6692 16.984 18.0146 15.0532 17.9996C11.3084 17.9716 7.56359 17.9916 3.81831 17.9916C3.62177 17.9925 3.42533 17.9821 3.22994 17.9605C1.44805 17.7547 0.0133578 16.1613 0.0054668 14.33C-0.00735612 11.2761 -0.00735612 8.22213 0.0054668 5.16795C0.0118783 3.43282 1.29269 1.90105 2.96756 1.57096C3.40699 1.4848 3.84889 1.49882 4.29079 1.50233C4.40324 1.50233 4.43875 1.47679 4.43283 1.35907C4.42247 1.1532 4.42642 0.946813 4.43283 0.740941C4.4378 0.545752 4.51763 0.360261 4.65532 0.223992C4.79301 0.0877234 4.97765 0.0114746 5.1699 0.0114746C5.36215 0.0114746 5.54679 0.0877234 5.68448 0.223992C5.82216 0.360261 5.902 0.545752 5.90697 0.740941C5.9119 0.941303 5.91733 1.14166 5.90697 1.34203C5.89809 1.47777 5.94396 1.50233 6.06972 1.50233C8.32656 1.49765 10.5834 1.49665 12.8402 1.49932C12.8586 1.49806 12.8771 1.49806 12.8955 1.49932C12.9778 1.51234 12.9995 1.47528 12.9976 1.39464C12.9926 1.17624 12.9926 0.957664 12.9976 0.738936C13.0032 0.543731 13.0837 0.358491 13.2219 0.222696C13.36 0.0869005 13.545 0.011294 13.7373 0.0120127C13.9295 0.0127314 14.1139 0.0897111 14.2511 0.226536C14.3883 0.36336 14.4675 0.549222 14.4717 0.744463C14.4808 0.937896 14.4798 1.13168 14.4687 1.325C14.4559 1.48129 14.5181 1.50933 14.6527 1.50181C14.85 1.49129 15.0472 1.4978 15.2445 1.50181C16.0423 1.51021 16.8161 1.7806 17.45 2.27256C18.084 2.76453 18.5443 3.45166 18.7619 4.23125C18.8147 4.41859 18.8206 4.61795 18.9 4.79778ZM9.45695 2.99853C7.56277 2.99853 5.66827 2.99853 3.77343 2.99853C2.44528 2.99853 1.48158 3.97579 1.48109 5.32272C1.48109 8.27105 1.48109 11.2195 1.48109 14.1682C1.48109 15.5136 2.44626 16.4919 3.77392 16.4919H15.1217C16.4622 16.4919 17.4229 15.5171 17.4234 14.1582C17.4234 11.2159 17.4234 8.27355 17.4234 5.33124C17.4234 3.97178 16.4627 2.99903 15.1212 2.99853C13.2333 2.9982 11.3452 2.9982 9.45695 2.99853Z"
                    fill="#787878"
                  />
                  <path
                    d="M9.47069 5.99692C9.71038 5.99692 9.95007 5.99341 10.1898 5.99692C10.2882 5.99433 10.3861 6.01177 10.4777 6.04823C10.5694 6.08469 10.6529 6.13942 10.7234 6.20919C10.7939 6.27896 10.8499 6.36237 10.8882 6.45448C10.9264 6.5466 10.9461 6.64554 10.9461 6.74551C10.9461 6.84548 10.9264 6.94445 10.8882 7.03657C10.8499 7.12868 10.7939 7.21206 10.7234 7.28183C10.6529 7.3516 10.5694 7.40633 10.4777 7.44279C10.3861 7.47925 10.2882 7.49672 10.1898 7.49413C9.69657 7.49981 9.20503 7.49981 8.71513 7.49413C8.61673 7.49672 8.51882 7.47925 8.42716 7.44279C8.33551 7.40633 8.25198 7.3516 8.18148 7.28183C8.11099 7.21206 8.05496 7.12868 8.0167 7.03657C7.97845 6.94445 7.95874 6.84548 7.95874 6.74551C7.95874 6.64554 7.97845 6.5466 8.0167 6.45448C8.05496 6.36237 8.11099 6.27896 8.18148 6.20919C8.25198 6.13942 8.33551 6.08469 8.42716 6.04823C8.51882 6.01177 8.61673 5.99433 8.71513 5.99692C8.96665 5.99341 9.21867 5.99692 9.47069 5.99692Z"
                    fill="#787878"
                  />
                  <path
                    d="M14.4619 7.49609C14.2222 7.49609 13.9825 7.4991 13.7428 7.49609C13.3142 7.48958 12.9912 7.15897 12.9957 6.73671C12.9967 6.63823 13.0169 6.54092 13.0551 6.4504C13.0933 6.35989 13.1488 6.27795 13.2184 6.20932C13.2879 6.14068 13.3702 6.08672 13.4603 6.05051C13.5505 6.01431 13.6469 5.99658 13.7438 5.99837C14.2298 5.99436 14.7152 5.99436 15.2002 5.99837C15.297 5.99658 15.3933 6.01428 15.4833 6.05044C15.5734 6.08659 15.6555 6.14048 15.725 6.20903C15.7944 6.27757 15.8498 6.3594 15.888 6.44979C15.9262 6.54019 15.9464 6.63736 15.9474 6.73571C15.9518 7.15747 15.6283 7.48706 15.1992 7.49357C14.9536 7.49908 14.7075 7.49609 14.4619 7.49609Z"
                    fill="#787878"
                  />
                  <path
                    d="M4.43338 8.9957C4.67997 8.9957 4.92657 8.99219 5.17316 8.9957C5.27156 8.99311 5.36947 9.01055 5.46112 9.04701C5.55277 9.08347 5.63631 9.1382 5.7068 9.20797C5.7773 9.27774 5.83333 9.36115 5.87158 9.45326C5.90984 9.54537 5.92955 9.64432 5.92955 9.74429C5.92955 9.84426 5.90984 9.94323 5.87158 10.0353C5.83333 10.1275 5.7773 10.2108 5.7068 10.2806C5.63631 10.3504 5.55277 10.4051 5.46112 10.4416C5.36947 10.478 5.27156 10.4955 5.17316 10.4929C4.68194 10.4982 4.1904 10.4982 3.69852 10.4929C3.60013 10.4955 3.50221 10.478 3.41056 10.4416C3.31891 10.4051 3.23537 10.3504 3.16488 10.2806C3.09438 10.2108 3.03836 10.1275 3.0001 10.0353C2.96185 9.94323 2.94214 9.84426 2.94214 9.74429C2.94214 9.64432 2.96185 9.54537 3.0001 9.45326C3.03836 9.36115 3.09438 9.27774 3.16488 9.20797C3.23537 9.1382 3.31891 9.08347 3.41056 9.04701C3.50221 9.01055 3.60013 8.99311 3.69852 8.9957C3.94167 8.99219 4.18728 8.9957 4.43338 8.9957Z"
                    fill="#787878"
                  />
                  <path
                    d="M9.45837 10.4948C9.21177 10.4948 8.96518 10.4978 8.72105 10.4948C8.30085 10.4883 7.98127 10.1653 7.97683 9.75201C7.97387 9.33025 8.29789 9.00064 8.72697 8.99713C9.2126 8.99379 9.69806 8.99379 10.1834 8.99713C10.2807 8.99541 10.3773 9.01337 10.4677 9.04996C10.5581 9.08656 10.6404 9.14106 10.7099 9.21029C10.7793 9.27952 10.8345 9.36209 10.8722 9.45321C10.91 9.54432 10.9294 9.64215 10.9296 9.74098C10.933 10.1627 10.609 10.4923 10.1789 10.4968C9.93775 10.4973 9.69658 10.4948 9.45837 10.4948Z"
                    fill="#787878"
                  />
                  <path
                    d="M14.4712 10.4948C14.2246 10.4948 13.9781 10.4983 13.7339 10.4948C13.6355 10.4974 13.5376 10.48 13.446 10.4435C13.3543 10.4071 13.2708 10.3523 13.2003 10.2826C13.1298 10.2128 13.0738 10.1294 13.0355 10.0373C12.9972 9.94519 12.9775 9.84622 12.9775 9.74625C12.9775 9.64628 12.9972 9.54733 13.0355 9.45522C13.0738 9.36311 13.1298 9.2797 13.2003 9.20993C13.2708 9.14016 13.3543 9.08543 13.446 9.04897C13.5376 9.01251 13.6355 8.99507 13.7339 8.99765C14.2271 8.99264 14.7188 8.99264 15.2091 8.99765C15.3075 8.99507 15.4054 9.01251 15.497 9.04897C15.5887 9.08543 15.6722 9.14016 15.7427 9.20993C15.8132 9.2797 15.8692 9.36311 15.9075 9.45522C15.9457 9.54733 15.9654 9.64628 15.9654 9.74625C15.9654 9.84622 15.9457 9.94519 15.9075 10.0373C15.8692 10.1294 15.8132 10.2128 15.7427 10.2826C15.6722 10.3523 15.5887 10.4071 15.497 10.4435C15.4054 10.48 15.3075 10.4974 15.2091 10.4948C14.963 10.4983 14.7169 10.4948 14.4712 10.4948Z"
                    fill="#787878"
                  />
                  <path
                    d="M4.43368 11.9952C4.68027 11.9952 4.92686 11.9917 5.17346 11.9952C5.27186 11.9926 5.36977 12.01 5.46142 12.0465C5.55308 12.083 5.63661 12.1377 5.70711 12.2075C5.7776 12.2772 5.83363 12.3606 5.87188 12.4527C5.91014 12.5449 5.92985 12.6438 5.92985 12.7438C5.92985 12.8437 5.91014 12.9427 5.87188 13.0348C5.83363 13.1269 5.7776 13.2103 5.70711 13.2801C5.63661 13.3499 5.55308 13.4046 5.46142 13.4411C5.36977 13.4775 5.27186 13.495 5.17346 13.4924C4.68027 13.4974 4.18856 13.4974 3.69833 13.4924C3.59644 13.5009 3.49392 13.4878 3.39725 13.454C3.30057 13.4202 3.21185 13.3664 3.13666 13.2961C3.06148 13.2257 3.00147 13.1403 2.96043 13.0452C2.91938 12.9501 2.89819 12.8474 2.89819 12.7435C2.89819 12.6397 2.91938 12.537 2.96043 12.4419C3.00147 12.3468 3.06148 12.2614 3.13666 12.191C3.21185 12.1206 3.30057 12.0669 3.39725 12.0331C3.49392 11.9993 3.59644 11.9862 3.69833 11.9947C3.94246 11.9907 4.18807 11.9952 4.43368 11.9952Z"
                    fill="#787878"
                  />
                  <path
                    d="M9.45988 13.4934C9.21328 13.4934 8.96669 13.4964 8.72009 13.4934C8.29891 13.4869 7.97735 13.1648 7.97439 12.7516C7.97094 12.3293 8.29398 12.0002 8.72355 11.9957C9.20885 11.9917 9.69431 11.9917 10.1799 11.9957C10.2772 11.9935 10.374 12.011 10.4646 12.0472C10.5551 12.0833 10.6377 12.1374 10.7075 12.2063C10.7773 12.2752 10.8328 12.3576 10.871 12.4485C10.9091 12.5394 10.929 12.6372 10.9296 12.736C10.9335 13.1578 10.6095 13.4874 10.1804 13.4929C9.93926 13.4979 9.69957 13.4934 9.45988 13.4934Z"
                    fill="#787878"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_57_11024">
                    <rect width="18.9" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="w-[12rem]">
                Jan 6, 2023 - Jan 22, 2023
                <div />
              </div>
            </span>
          </div>
    )
}

export default Date