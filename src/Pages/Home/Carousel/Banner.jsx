import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


import Pic1 from "../../../../public/Banner/ban11.jpeg";
import Pic2 from "../../../../public/Banner/ban2.jpeg";
import Pic3 from "../../../../public/Banner/ban3.jpeg";
import Pic4 from "../../../../public/Banner/ban1.jpeg";
import Pic5 from "../../../../public/Banner/ban6.jpeg"

const Banner = () => {
  return (
    <div>
      <Carousel autoPlay infiniteLoop className="text-center">
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
    </div>
  );
};

export default Banner;
