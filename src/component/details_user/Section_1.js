// import { Checkbox } from "@material-tailwind/react";
import React from "react";

const Section_1 = () => {
  const Data = [
    { id: 1, title: "Gestion des utilisateurs", value: "defaultChecked" },
    { id: 2, title: "Gestion de contenu", value: "defaultChecked" },
    { id: 3, title: "Direction financière", value: "defaultChecked" },
    { id: 4, title: "Rapports", value: "defaultChecked" },
    { id: 5, title: "Paie", value: "defaultChecked" },
    { id: 6, title: "Gestion des litiges", value: "defaultChecked" },
    { id: 7, title: "Contrôles API", value: "defaultChecked" },
    { id: 8, title: "Gestion des données", value: "defaultChecked" },
    { id: 9, title: "Gestion du référentiel", value: "defaultChecked" },
  ];
  return (
    <div>
      <div className="h-screen pt-14 pr-20 flex justify-start pl-0 mt-[20px]">
        {/* Card start */}
        <div>
          <div className="w-[600px] h-[180px] mx-auto bg-white rounded-lg pb-6 shadow-lg">
            <div className="flex justify-between p-6 text-[#96B0C4] h-[20px]">
              <h4 className="w-2"> Email </h4>
              <span >smith@kpmg.com</span>
              <span className="pr-2 ">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_112_5590)">
                    <path
                      d="M11.6814 -0.000261885C11.7081 0.0649799 11.778 0.0519422 11.8265 0.0759512C11.9807 0.151629 12.1056 0.275859 12.1822 0.429531C12.2588 0.583204 12.2827 0.757792 12.2503 0.926401C12.2179 1.09501 12.131 1.2483 12.0029 1.36265C11.8749 1.47701 11.7128 1.5461 11.5416 1.55928C11.4706 1.5645 11.3986 1.55928 11.3271 1.55928H4.00536C2.57682 1.55928 1.56584 2.5734 1.56584 4.00663V15.9949C1.56584 17.413 2.581 18.4308 3.997 18.4308H16.0051C17.4222 18.4308 18.4374 17.4141 18.4374 15.996C18.4374 13.5161 18.4374 11.0364 18.4374 8.55686C18.4374 8.20403 18.5845 7.93993 18.9108 7.7964C19.214 7.66278 19.4943 7.7228 19.7458 7.93366C19.8784 8.04483 19.9348 8.20246 20 8.35487V16.5957C19.927 16.6479 19.9478 16.7356 19.9327 16.8045C19.5814 18.6438 17.9979 19.9851 16.1268 19.9883C12.039 19.9966 7.95136 19.9966 3.86391 19.9883C1.74799 19.9825 0.0125601 18.2461 0.00734073 16.1322C-0.00309795 12.0382 -0.00309795 7.94393 0.00734073 3.84953C0.0109943 2.13602 1.18482 0.619278 2.831 0.146927C3.03299 0.0889924 3.24855 0.0858665 3.44115 -0.00390625L11.6814 -0.000261885Z"
                      fill="#C1C4C7"
                    />
                    <path
                      d="M5.86605 15.9309C5.50884 15.9245 5.15304 15.8843 4.80339 15.8109C4.46726 15.7384 4.24909 15.5223 4.18855 15.182C3.8232 13.136 4.32426 11.3197 5.77054 9.83058C7.76067 7.78095 9.80195 5.78194 11.8213 3.76101C12.6564 2.9233 13.4915 2.07987 14.3355 1.24999C16.05 -0.433248 18.893 0.285971 19.5491 2.57413C19.856 3.64305 19.6326 4.61856 18.9228 5.47923C18.8475 5.5688 18.7677 5.6545 18.6837 5.73601C15.9098 8.51096 13.1355 11.2863 10.3609 14.0619C9.43451 14.9904 8.34367 15.5995 7.0498 15.8365C6.65912 15.9055 6.26274 15.9372 5.86605 15.9309ZM6.07482 14.3704C7.26118 14.3375 8.32227 13.8907 9.20017 13.0133C11.9974 10.2147 14.795 7.41681 17.5929 4.61959C17.6451 4.56739 17.6936 4.51833 17.7401 4.46301C17.9978 4.16114 18.1308 3.77236 18.1118 3.37588C18.0929 2.97939 17.9235 2.60505 17.6381 2.32914C17.3527 2.05323 16.9729 1.89651 16.576 1.89093C16.1791 1.88534 15.795 2.0313 15.502 2.29907C15.2452 2.53812 15.0046 2.79544 14.752 3.0397C14.6836 3.10547 14.6847 3.14408 14.752 3.20984C14.9086 3.35703 15.0594 3.50944 15.2081 3.66446C15.5213 3.9938 15.526 4.47815 15.2165 4.78401C14.907 5.08986 14.4378 5.08412 14.111 4.77514C13.9597 4.63213 13.8099 4.48702 13.6705 4.33252C13.5891 4.24223 13.5432 4.24641 13.4576 4.33252C11.2613 6.53509 9.0535 8.72669 6.86712 10.9387C6.0409 11.7737 5.64944 12.814 5.63587 13.9878C5.62857 14.4257 5.57272 14.3563 6.07169 14.3704H6.07482Z"
                      fill="#C1C4C7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_112_5590">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>

            <div className="flex justify-between p-4 pr-8 text-[#96B0C4] h-[20px]">
              <h4 className=" "> Mot de Pass </h4>
              <span className="ml-[-15]">**********</span>
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_112_5590)">
                    <path
                      d="M11.6814 -0.000261885C11.7081 0.0649799 11.778 0.0519422 11.8265 0.0759512C11.9807 0.151629 12.1056 0.275859 12.1822 0.429531C12.2588 0.583204 12.2827 0.757792 12.2503 0.926401C12.2179 1.09501 12.131 1.2483 12.0029 1.36265C11.8749 1.47701 11.7128 1.5461 11.5416 1.55928C11.4706 1.5645 11.3986 1.55928 11.3271 1.55928H4.00536C2.57682 1.55928 1.56584 2.5734 1.56584 4.00663V15.9949C1.56584 17.413 2.581 18.4308 3.997 18.4308H16.0051C17.4222 18.4308 18.4374 17.4141 18.4374 15.996C18.4374 13.5161 18.4374 11.0364 18.4374 8.55686C18.4374 8.20403 18.5845 7.93993 18.9108 7.7964C19.214 7.66278 19.4943 7.7228 19.7458 7.93366C19.8784 8.04483 19.9348 8.20246 20 8.35487V16.5957C19.927 16.6479 19.9478 16.7356 19.9327 16.8045C19.5814 18.6438 17.9979 19.9851 16.1268 19.9883C12.039 19.9966 7.95136 19.9966 3.86391 19.9883C1.74799 19.9825 0.0125601 18.2461 0.00734073 16.1322C-0.00309795 12.0382 -0.00309795 7.94393 0.00734073 3.84953C0.0109943 2.13602 1.18482 0.619278 2.831 0.146927C3.03299 0.0889924 3.24855 0.0858665 3.44115 -0.00390625L11.6814 -0.000261885Z"
                      fill="#C1C4C7"
                    />
                    <path
                      d="M5.86605 15.9309C5.50884 15.9245 5.15304 15.8843 4.80339 15.8109C4.46726 15.7384 4.24909 15.5223 4.18855 15.182C3.8232 13.136 4.32426 11.3197 5.77054 9.83058C7.76067 7.78095 9.80195 5.78194 11.8213 3.76101C12.6564 2.9233 13.4915 2.07987 14.3355 1.24999C16.05 -0.433248 18.893 0.285971 19.5491 2.57413C19.856 3.64305 19.6326 4.61856 18.9228 5.47923C18.8475 5.5688 18.7677 5.6545 18.6837 5.73601C15.9098 8.51096 13.1355 11.2863 10.3609 14.0619C9.43451 14.9904 8.34367 15.5995 7.0498 15.8365C6.65912 15.9055 6.26274 15.9372 5.86605 15.9309ZM6.07482 14.3704C7.26118 14.3375 8.32227 13.8907 9.20017 13.0133C11.9974 10.2147 14.795 7.41681 17.5929 4.61959C17.6451 4.56739 17.6936 4.51833 17.7401 4.46301C17.9978 4.16114 18.1308 3.77236 18.1118 3.37588C18.0929 2.97939 17.9235 2.60505 17.6381 2.32914C17.3527 2.05323 16.9729 1.89651 16.576 1.89093C16.1791 1.88534 15.795 2.0313 15.502 2.29907C15.2452 2.53812 15.0046 2.79544 14.752 3.0397C14.6836 3.10547 14.6847 3.14408 14.752 3.20984C14.9086 3.35703 15.0594 3.50944 15.2081 3.66446C15.5213 3.9938 15.526 4.47815 15.2165 4.78401C14.907 5.08986 14.4378 5.08412 14.111 4.77514C13.9597 4.63213 13.8099 4.48702 13.6705 4.33252C13.5891 4.24223 13.5432 4.24641 13.4576 4.33252C11.2613 6.53509 9.0535 8.72669 6.86712 10.9387C6.0409 11.7737 5.64944 12.814 5.63587 13.9878C5.62857 14.4257 5.57272 14.3563 6.07169 14.3704H6.07482Z"
                      fill="#C1C4C7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_112_5590">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>

            <div className="flex justify-between p-5  pr-8 text-[#96B0C4] h-[20px]">
              <h4> Role </h4>
              <span>Administrateur</span>
              <span >
                <svg
                
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_112_5590)">
                    <path
                      d="M11.6814 -0.000261885C11.7081 0.0649799 11.778 0.0519422 11.8265 0.0759512C11.9807 0.151629 12.1056 0.275859 12.1822 0.429531C12.2588 0.583204 12.2827 0.757792 12.2503 0.926401C12.2179 1.09501 12.131 1.2483 12.0029 1.36265C11.8749 1.47701 11.7128 1.5461 11.5416 1.55928C11.4706 1.5645 11.3986 1.55928 11.3271 1.55928H4.00536C2.57682 1.55928 1.56584 2.5734 1.56584 4.00663V15.9949C1.56584 17.413 2.581 18.4308 3.997 18.4308H16.0051C17.4222 18.4308 18.4374 17.4141 18.4374 15.996C18.4374 13.5161 18.4374 11.0364 18.4374 8.55686C18.4374 8.20403 18.5845 7.93993 18.9108 7.7964C19.214 7.66278 19.4943 7.7228 19.7458 7.93366C19.8784 8.04483 19.9348 8.20246 20 8.35487V16.5957C19.927 16.6479 19.9478 16.7356 19.9327 16.8045C19.5814 18.6438 17.9979 19.9851 16.1268 19.9883C12.039 19.9966 7.95136 19.9966 3.86391 19.9883C1.74799 19.9825 0.0125601 18.2461 0.00734073 16.1322C-0.00309795 12.0382 -0.00309795 7.94393 0.00734073 3.84953C0.0109943 2.13602 1.18482 0.619278 2.831 0.146927C3.03299 0.0889924 3.24855 0.0858665 3.44115 -0.00390625L11.6814 -0.000261885Z"
                      fill="#C1C4C7"
                    />
                    <path
                      d="M5.86605 15.9309C5.50884 15.9245 5.15304 15.8843 4.80339 15.8109C4.46726 15.7384 4.24909 15.5223 4.18855 15.182C3.8232 13.136 4.32426 11.3197 5.77054 9.83058C7.76067 7.78095 9.80195 5.78194 11.8213 3.76101C12.6564 2.9233 13.4915 2.07987 14.3355 1.24999C16.05 -0.433248 18.893 0.285971 19.5491 2.57413C19.856 3.64305 19.6326 4.61856 18.9228 5.47923C18.8475 5.5688 18.7677 5.6545 18.6837 5.73601C15.9098 8.51096 13.1355 11.2863 10.3609 14.0619C9.43451 14.9904 8.34367 15.5995 7.0498 15.8365C6.65912 15.9055 6.26274 15.9372 5.86605 15.9309ZM6.07482 14.3704C7.26118 14.3375 8.32227 13.8907 9.20017 13.0133C11.9974 10.2147 14.795 7.41681 17.5929 4.61959C17.6451 4.56739 17.6936 4.51833 17.7401 4.46301C17.9978 4.16114 18.1308 3.77236 18.1118 3.37588C18.0929 2.97939 17.9235 2.60505 17.6381 2.32914C17.3527 2.05323 16.9729 1.89651 16.576 1.89093C16.1791 1.88534 15.795 2.0313 15.502 2.29907C15.2452 2.53812 15.0046 2.79544 14.752 3.0397C14.6836 3.10547 14.6847 3.14408 14.752 3.20984C14.9086 3.35703 15.0594 3.50944 15.2081 3.66446C15.5213 3.9938 15.526 4.47815 15.2165 4.78401C14.907 5.08986 14.4378 5.08412 14.111 4.77514C13.9597 4.63213 13.8099 4.48702 13.6705 4.33252C13.5891 4.24223 13.5432 4.24641 13.4576 4.33252C11.2613 6.53509 9.0535 8.72669 6.86712 10.9387C6.0409 11.7737 5.64944 12.814 5.63587 13.9878C5.62857 14.4257 5.57272 14.3563 6.07169 14.3704H6.07482Z"
                      fill="#C1C4C7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_112_5590">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>

            <div className="flex justify-between p-5 text-[#96B0C4] h-[20px]">
              <h4> Status </h4>
              <span>
                <svg
                  width="57"
                  height="27"
                  viewBox="0 0 57 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="57" height="27" rx="13.5" fill="#05CD99" />
                  <rect
                    x="32"
                    y="2"
                    width="23"
                    height="23"
                    rx="11.5"
                    fill="white"
                  />
                </svg>
              </span>
              <span></span>
            </div>
          </div>

          {
            // dexieme
          }
          <div className="w-[600px] h-[370px] mx-auto bg-white rounded-lg pb-6 shadow-lg mt-4">
            <div>
              <h3 className="text-[#787878] font-medium text-base ml-5">
                Permissions
              </h3>
            </div>

            <div className="flex justify-between p-6 text-[#96B0C4] h-2 text-[14px] pb-0 ">
              <h4>Accès administrateur</h4>
              <div className="flex items-center pr-4 ">
                <input type="checkbox" defaultChecked color="amber" />
                <label className="ml-24 text-[#96B0C4]">Taux sélectionner</label>
              </div>
              <span></span>
            </div>

            {/* Mapping Data */}
            {Data.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex justify-between h-[12px] pb-[9px] p-6 text-[#96B0C4] text-[14px]  "
                >
                
                  <h4 className="w-[152px] ">{item.title}</h4>
                  <div className="flex items-center pl-4  bg-[red] mb-2 mt-3">
                    <input className="" type="checkbox" color="amber" />
                    <label className="ml-2">Lire</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" defaultChecked color="amber" />
                    <label className="ml-2">Écrire</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" defaultChecked color="amber" />
                    <label className="ml-2">Créer</label>
                  </div>
                  <span></span>
                  
                </div>
              );
            })}
          </div>
        </div>

        {/* Card end */}
      </div>
    </div>
  );
};

export default Section_1;
