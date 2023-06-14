import React from "react";
import Banner from "../Carousel/Banner";
import TItlePage from "../../../TItlePage/TItlePage";
import Highlight from "../Highlight/Highlight";

const Home = () => {
  return (
    <div>
      <TItlePage title={"Home"}></TItlePage>
      <Banner />
      <Highlight/>
    </div>
  );
};

export default Home;
