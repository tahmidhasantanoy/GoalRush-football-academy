import React from "react";
import logo1 from "../../../../../public/Sponsors/logo1.svg";
import logo2 from "../../../../../public/Sponsors/logo2.svg";
import logo3 from "../../../../../public/Sponsors/yahoo.svg";
import logo4 from "../../../../../public/Sponsors/logo4.svg";
import logo5 from "../../../../../public/Sponsors/logo5.svg";
import logo6 from "../../../../../public/Sponsors/logo6.svg";
import logo7 from "../../../../../public/Sponsors/logo7.svg";

const Sponsors = () => {
  return (
    <marquee
      behavior="scroll"
      direction="left"
      scrollamount="7"
      loop="infinite"
      heigth="0%"
    >
      <div className="flex flex-row justify-center items-center space-x-12">
        <img className="w-1/5 h-[150px] max-w-xs .h-auto" src={logo7} alt="logo image" />
        <img className="w-1/5 h-1/6 max-w-xs .h-auto" src={logo1} alt="logo image" />
        <img className="w-1/5 h-[150px] max-w-xs .h-auto" src={logo2} alt="logo image" />
        <img className="w-1/5 h-1/12 max-w-xs .h-auto" src={logo3} alt="logo image" />
        <img className="w-1/5 .h-1/12 max-w-xs h-auto" src={logo4} alt="logo image" />
        <img className="w-1/5 .h-1/12 max-w-xs h-auto" src={logo5} alt="logo image" />
        <img className="w-1/5 h-[100px] max-w-xs .h-auto" src={logo6} alt="logo image" />
        {/*  */}
        <img className="w-1/5 h-[150px] max-w-xs .h-auto" src={logo7} alt="logo image" />
        <img className="w-1/5 h-1/6 max-w-xs .h-auto" src={logo1} alt="logo image" />
        <img className="w-1/5 h-[150px] max-w-xs .h-auto" src={logo2} alt="logo image" />
        <img className="w-1/5 h-1/12 max-w-xs .h-auto" src={logo3} alt="logo image" />
        <img className="w-1/5 .h-1/12 max-w-xs h-auto" src={logo4} alt="logo image" />
        <img className="w-1/5 .h-1/12 max-w-xs h-auto" src={logo5} alt="logo image" />
        <img className="w-1/5 h-[100px] max-w-xs .h-auto" src={logo6} alt="logo image" />
      </div>
    </marquee>
  );
};

export default Sponsors;
