import React from 'react';
import Header from "@/component/Header/Header"
import Section1 from "@/component/section1/Section1"
import User_Info from "@/component/User/user_info"
import Detail_1 from "@/component/details_user/detail_1"
// import {Paginate} from "@/component/Paginate/Paginate.js"
import "../component/Header/style.css"
import "../component/section1/style.css"
import "../component/User/style.css"
import "../component/Header/style.css"
import "./globals.css"



const layout = () => {
  return (
    <div className="container">
      
      <Header />
      <Section1 />
      <User_Info />
          
        {
          // <Detail_1/>
        }
    </div>
  );
}

export default layout;
