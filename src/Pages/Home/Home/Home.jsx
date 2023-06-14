import React from "react";
import Banner from "../Carousel/Banner";
import TItlePage from "../../../TItlePage/TItlePage";
import Highlight from "../Highlight/Highlight";
import TopClass from "../TopClass/TopClass";

const Home = () => {
  return (
    <div>
      <TItlePage title={"Home"}></TItlePage>
      <Banner />
      <TopClass/>
      <Highlight/>
    </div>
  );
};

export default Home;
