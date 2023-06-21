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
        <div
            className="hero min-h-screen"
            style={{backgroundImage : `url(${Pic1})`}}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
          {/* <img src={Pic1} /> */}
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
