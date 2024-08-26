import React from "react";
import Banner from "../Carousel/Banner";
import TItlePage from "../../../TItlePage/TItlePage";
import Highlight from "../Highlight/Highlight";
import TopClass from "../TopClass/TopClass";
import TopInstructors from "../TopInstructors/TopInstructors";
import EnhanceSkills from "./EnhanceSkills/EnhanceSkills";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <TItlePage title={"Home"}></TItlePage>
      <Banner />
      <hr className="font-bold" />
      <TopClass />
      <hr className="font-bold" />
      <TopInstructors />
      <hr className="font-bold" />
      <EnhanceSkills />
      <hr className="font-bold" />
      <Highlight />
    </div>
  );
};

export default Home;
