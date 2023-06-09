import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Pic1 from "../../../../public/Banner/Pic-01.jpg";
import Pic2 from "../../../../public/Banner/Pic-02.jpg";
import Pic3 from "../../../../public/Banner/Pic-03.jpg";
import Pic4 from "../../../../public/Banner/Pic-04.webp";
import Pic5 from "../../../../public/Banner/Pic-05.webp";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={Pic1} />
      </div>
      <div>
        <img src={Pic2} />
      </div>
      <div>
        <img src={Pic3} />
      </div>
      <div>
        <img src={Pic4} />
      </div>
      <div>
        <img src={Pic5} />
      </div>
    </Carousel>
  );
};

export default Banner;
