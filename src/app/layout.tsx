import React from "react";

// import {Paginate} from "@/component/Paginate/Paginate.js"
import "../component/Header/style.css";
import "../component/section1/style.css";
import "../component/User/style.css";
import "../component/Header/style.css";
import "./globals.css";
import {Providers} from "./providers";

const layout = ({children}: { children: React.ReactNode }) => {
  return (
    <html lang="en" className='bg-white'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
    
  );
};

export default layout;
