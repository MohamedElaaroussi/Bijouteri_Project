import Header from "@/component/Header/Header";
import Section1 from "@/component/section1/Section1";
import User_Info from "@/component/User/user_info";
import Detail_1 from "@/component/details_user/detail_1";
import Index_Article from "@/Articles/Index_Article";

export default async function Home() {
  return (
    <div className="container">
      { 
      // User Info
      }
      {/* <Header />
      <Section1 />
      <User_Info /> */}
      {
        // <Detail_1/>
      }
      {
        <Index_Article/>
      }
    </div>
  );
}
