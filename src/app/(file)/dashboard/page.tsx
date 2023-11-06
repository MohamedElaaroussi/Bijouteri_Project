import Header_Dashboard from "@/components/Dashboard/Header_Dashboard";
import Section1_dashboard from "@/components/Dashboard/Section1_dashboard";
import Statistiqueè_Dashboard from "@/components/Dashboard/Statistiqueè_Dashboard";
import React from "react";

const Dashboard = () => {
  return(
        <div>
            <Header_Dashboard/>
            <Section1_dashboard />
            <div>
              <div>
                <Statistiqueè_Dashboard/>
              </div>
              <div></div>
            </div>
        </div>
)};

export default Dashboard;
