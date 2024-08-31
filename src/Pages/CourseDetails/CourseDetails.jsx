import React from "react";
import HeroSection from "./HeroSection ";
import CourseInfo from "./CourseInfo";
import FAQ from "./FAQ";
import CountDown from "./CountDown";
import Curriculum from "./Curirculum";

const CourseDetails = () => {
  return (
    <>
      <HeroSection />
      <CountDown />
      <CourseInfo />
      <Curriculum />
      <hr className="py-3" />
      <FAQ />
    </>
  );
};

export default CourseDetails;
