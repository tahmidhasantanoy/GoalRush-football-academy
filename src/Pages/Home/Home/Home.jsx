import React from "react";
import Banner from "../Carousel/Banner";
import TItlePage from "../../../TItlePage/TItlePage";
import Highlight from "../Highlight/Highlight";
import TopClass from "../TopClass/TopClass";
import TopInstructors from "../TopInstructors/TopInstructors";

const Home = () => {
  return (
    <div>
      <TItlePage title={"Home"}></TItlePage>
      <Banner />
      <TopClass/>
      <TopInstructors/>
      <Highlight/>
    </div>
  );
};

export default Home;
