import React from "react";
import pic1 from "../../../../public/Highlight/h1.jpeg";
import pic2 from "../../../../public/Highlight/h2.jpeg";
import pic3 from "../../../../public/Highlight/h4.jpeg";
import { FaTag } from "react-icons/fa";

const Highlight = () => {
  return (
    <div className="mb-8">
      <h3 className=" text-black text-center font-bold text-3xl md:text-4xl pt-10 md:pt-20 pb-2 md:pb-6">
        GoalRush Academy Facilities.
      </h3>
      <div className="bg-gradient-to-t from-blue-50 to-slate-50  grid grid-cols-1 lg:grid-cols-3 justify-center">
        {/* 1 */}
        <div className=" flex flex-col items-center p-5">
          <div className="card w-72 md:w-96 bg-base-300 hover:bg-black duration-500 shadow-2xl">
            <figure>
              <img src={pic1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex items-center">
                <FaTag />
                <h2 className="card-title ml-2 hover:text-info">
                  All facilities Provide from indor
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className=" flex flex-col items-center p-5">
          <div className="card w-72 md:w-96 bg-base-300 hover:bg-black duration-500 shadow-2xl">
            <figure>
              <img src={pic2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex items-center">
                <FaTag />
                <h2 className="card-title ml-2 hover:text-info">
                  1.32 acres football ground
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className=" flex flex-col items-center p-5">
          <div className="card w-72 md:w-96 bg-base-300 hover:bg-black duration-500 shadow-2xl">
            <figure>
              <img src={pic3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex items-center">
                <FaTag />
                <h2 className="card-title ml-2 hover:text-info">
                  8+ years experince trainer
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
