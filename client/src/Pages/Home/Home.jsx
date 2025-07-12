import React from "react";

import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";
import CollapseCardFeatures from "../../components/Features/Features";
const Home = ({ slideIn }) => {
  return (
    <div>    
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} />
      <div className="home-container-2">
        <HomeMainbar />
        <RightSidebar />
      </div>

    </div>
    <div className="mt-16"> {/* Adjust spacing as needed */}
      <CollapseCardFeatures />
    </div></div>
  );
};

export default Home;
