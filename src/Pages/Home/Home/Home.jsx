import React from "react";
import Banner from "../Carousel/Banner";
import TitlePage from "../../../TitlePage/TitlePage";
import Highlight from "../Highlight/Highlight";
import TopClass from "../TopClass/TopClass";
import TopInstructors from "../TopInstructors/TopInstructors";
import EnhanceSkills from "./EnhanceSkills/EnhanceSkills";
import Sponsors from "./Sponsors/Sponsors";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <TitlePage title={"Home"}></TitlePage>
      <Banner />
      <hr className="font-bold" />
      <TopClass />
      <hr className="font-bold" />
      <TopInstructors />
      <hr className="font-bold" />
      <EnhanceSkills />
      <hr className="font-bold" />
      <Highlight />
      <hr className="font-bold" />
      <Sponsors />
    </div>
  );
};

export default Home;
