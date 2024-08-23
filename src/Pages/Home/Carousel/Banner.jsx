import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Banner.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import Pic1 from "../../../../public/Banner/ban11.jpeg";
import Pic2 from "../../../../public/Banner/ban2.jpeg";
import Pic3 from "../../../../public/Banner/ban3.jpeg";
import Pic4 from "../../../../public/Banner/ban1.jpeg";
import Pic5 from "../../../../public/Banner/ban6.jpeg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
  return (
    <>
      <div>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={4000}
        >
          <div
            className="hero min-h-screen rounded-xl"
            style={{ backgroundImage: `url(${Pic1})`, alignItems: "normal" }}
          >
            <div className="hero-overlay bg-opacity-5 image-gradient"></div>
            <div className=" text-start">
              <div className="max-w-5xl sm:ml-12">
                <h1 className="mb-5 text-3xl font-bold text-white">
                  Join with <span className="text-info">GoalRush</span> <br />{" "}
                  Enjoy Every Moment of Football
                </h1>
                <p className="mb-5 w-4/6 text-md">
                  Football is a thrilling, unifying, and passion-filled sport that teaches teamwork, valuable life lessons, and promotes physical and mental well-being. Its cultural significance and global appeal make it an incredibly important and attractive game.
                </p>
                <button className="btn btn-primary text-white hover:text-black hover:bg-cyan-600">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div
            className="hero min-h-screen rounded-xl"
            style={{ backgroundImage: `url(${Pic2})`, alignItems: "normal" }}
          >
            <div className="hero-overlay bg-opacity-5 image-gradient"></div>
            <div className=" text-start">
              <div className="max-w-5xl sm:ml-12">
                <h1 className="mb-5 text-3xl font-bold text-white">
                  Join with <span className="text-info">GoalRush</span> <br />{" "}
                  Enjoy Every Moment of Football
                </h1>
                <p className="mb-5 w-4/6 text-md">
                  Football is a thrilling, unifying, and passion-filled sport that teaches teamwork, valuable life lessons, and promotes physical and mental well-being. Its cultural significance and global appeal make it an incredibly important and attractive game.
                </p>
                <button className="btn btn-primary text-white hover:text-black hover:bg-cyan-600">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div
            className="hero min-h-screen rounded-xl"
            style={{ backgroundImage: `url(${Pic3})`, alignItems: "normal" }}
          >
            <div className="hero-overlay bg-opacity-5 image-gradient"></div>
            <div className=" text-start">
              <div className="max-w-5xl sm:ml-12">
                <h1 className="mb-5 text-3xl font-bold text-white">
                  Join with <span className="text-info">GoalRush</span> <br />{" "}
                  Enjoy Every Moment of Football
                </h1>
                <p className="mb-5 w-4/6 text-md">
                  Football is a thrilling, unifying, and passion-filled sport that teaches teamwork, valuable life lessons, and promotes physical and mental well-being. Its cultural significance and global appeal make it an incredibly important and attractive game.
                </p>
                <button className="btn btn-primary text-white hover:text-black hover:bg-cyan-600">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div
            className="hero min-h-screen rounded-xl"
            style={{ backgroundImage: `url(${Pic4})`, alignItems: "normal" }}
          >
            <div className="hero-overlay bg-opacity-5 image-gradient"></div>
            <div className=" text-start">
              <div className="max-w-5xl sm:ml-12">
                <h1 className="mb-5 text-3xl font-bold text-white">
                  Join with <span className="text-info">GoalRush</span> <br />{" "}
                  Enjoy Every Moment of Football
                </h1>
                <p className="mb-5 w-4/6 text-md">
                  Football is a thrilling, unifying, and passion-filled sport that teaches teamwork, valuable life lessons, and promotes physical and mental well-being. Its cultural significance and global appeal make it an incredibly important and attractive game.
                </p>
                <button className="btn btn-primary text-white hover:text-black hover:bg-cyan-600">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div
            className="hero min-h-screen rounded-xl"
            style={{ backgroundImage: `url(${Pic5})`, alignItems: "normal" }}
          >
            <div className="hero-overlay bg-opacity-5 image-gradient"></div>
            <div className=" text-start">
              <div className="max-w-5xl sm:ml-12">
                <h1 className="mb-5 text-3xl font-bold text-white">
                  Join with <span className="text-info">GoalRush</span> <br />{" "}
                  Enjoy Every Moment of Football
                </h1>
                <p className="mb-5 w-4/6 text-md">
                  Football is a thrilling, unifying, and passion-filled sport that teaches teamwork, valuable life lessons, and promotes physical and mental well-being. Its cultural significance and global appeal make it an incredibly important and attractive game.
                </p>
                <button className="btn btn-primary text-white hover:text-black hover:bg-cyan-600">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </AutoplaySlider>
      </div>
    </>
  );
};

export default Banner;
