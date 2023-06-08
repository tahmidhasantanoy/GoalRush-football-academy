import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/NavBar/NavBar";

const MainLayOut = () => {
  return (
    <div>
      <NavBar />
      <Outlet></Outlet>
      <Footer/>
    </div>
  );
};

export default MainLayOut;
