import React from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import Footer from "../../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayOut = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <NavBar />
      <Outlet></Outlet>
      <Footer/>
    </div>
  );
};

export default MainLayOut;
