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
import Typewriter from "typewriter-effect";
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
  return (
    <div className="custom-slider py-[77px] md:py-0 mb-0 md:mb-5 lg:mb-10">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={4000}
        className="awssld__arrow"
        cssModule
      >
        <div className="relative">
          <img src={Pic1} alt="Banner 5" />
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-50 text-white p-4 pl-12">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 inline-flex">
              <span className="text-info">Football</span> &nbsp; is &nbsp;
              <Typewriter
                options={{
                  strings: ["Life"],
                  autoStart: true,
                  loop: true,
                  cursor: "_",
                  delay: 100,
                }}
              />
            </h1>{" "}
            <p className="mb-4 w-full md:w-1/2 overflow-hidden text-left text-style">
              "The difference between a successful person and others is not a
              lack of strength, not a lack of knowledge, but rather a lack in
              will."
            </p>
            <button className="btn-info text-white duration-500 hover:text-black normal-case">
              See Course
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={Pic2} alt="Banner 5" />
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-50 text-white p-4 pl-12">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 inline-flex">
              <span className="text-info">Football</span> &nbsp; is &nbsp;
              <Typewriter
                options={{
                  strings: ["Love"],
                  autoStart: true,
                  loop: true,
                  cursor: "_",
                  delay: 100,
                }}
              />
            </h1>{" "}
            <p className="mb-4 w-full md:w-1/2 overflow-hidden text-left">
              "Success is no accident. It’s the result of preparation, hard
              work,and learning from failure. In football, just like in life,
              you must be willing to make sacrifices to achieve your goals."
            </p>
            <button className="btn-info text-white duration-500 hover:text-black normal-case">
              See Course
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={Pic3} alt="Banner 5" />
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-50 text-white p-4 pl-12">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 inline-flex">
              <span className="text-info">Football</span> &nbsp; is &nbsp;
              <Typewriter
                options={{
                  strings: ["Fantasy"],
                  autoStart: true,
                  loop: true,
                  cursor: "_",
                  delay: 100,
                }}
              />
            </h1>{" "}
            <p className="mb-4 w-full md:w-1/2 overflow-hidden text-left">
              "In football, as in life, the best teams are those that work
              together, trust each other, and play for one another. Individual
              talent may win a match, but teamwork and intelligence win
              championships."
            </p>
            <button className="btn-info text-white duration-500 hover:text-black normal-case">
              See Course
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={Pic4} alt="Banner 5" />
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-50 text-white p-4 pl-12">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 inline-flex">
              <span className="text-info">Football</span> &nbsp; is &nbsp;
              <Typewriter
                options={{
                  strings: ["Fun"],
                  autoStart: true,
                  loop: true,
                  cursor: "_",
                  delay: 100,
                }}
              />
            </h1>{" "}
            <p className="mb-4 w-full md:w-1/2 overflow-hidden text-left">
              "Football is like life—it requires perseverance, self-denial, hard
              work, sacrifice, dedication, and respect for authority."
            </p>
            <button className="btn-info text-white duration-500 hover:text-black normal-case">
              See Course
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={Pic5} alt="Banner 5" />
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-50 text-white p-8">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 inline-flex">
              <span className="text-info">Football</span> &nbsp; is &nbsp;
              <Typewriter
                options={{
                  strings: ["Lesson"],
                  autoStart: true,
                  loop: true,
                  cursor: "_",
                  delay: 100,
                }}
              />
            </h1>{" "}
            <p className="mb-4 w-full md:w-1/2 overflow-hidden text-left">
              "The road to victory is never easy, but with determination,
              teamwork, and a never-give-up attitude, any obstacle can be
              overcome. Football teaches us that no matter the odds, the fight
              within us can turn the game around."
            </p>
            <button className="btn-info text-white duration-500 hover:text-black normal-case">
              See Course
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={Pic4} alt="Banner 5" />
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-50 text-white p-4 pl-12">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 inline-flex">
              <span className="text-info">Football</span> &nbsp; is &nbsp;
              <Typewriter
                options={{
                  strings: ["Fun"],
                  autoStart: true,
                  loop: true,
                  cursor: "_",
                  delay: 100,
                }}
              />
            </h1>{" "}
            <p className="mb-4 w-full md:w-1/2 overflow-hidden text-left">
              "Football is like life—it requires perseverance, self-denial, hard
              work, sacrifice, dedication, and respect for authority."
            </p>
            <button className="btn-info text-white duration-500 hover:text-black normal-case">
              See Course
            </button>
          </div>
        </div>
      </AutoplaySlider>
    </div>
  );
};

export default Banner;
