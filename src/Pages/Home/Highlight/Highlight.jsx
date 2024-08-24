import React from "react";
import pic1 from "../../../../public/Highlight/h1.jpeg";
import pic2 from "../../../../public/Highlight/h2.jpeg";
import pic3 from "../../../../public/Highlight/h4.jpeg";
import { FaTag } from "react-icons/fa";

const Highlight = () => {
  return (
    <div className="mb-20">
      <h3 className="text-white text-center font-bold text-4xl py-12">
        Why player choose GoalRush
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center">
        {/* 1 */}
        <div className=" flex flex-col items-center p-5">
          <div className="card w-96 bg-base-300 hover:bg-black duration-500 shadow-2xl">
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
          <div className="card w-96 bg-base-300 hover:bg-black duration-500 shadow-2xl">
            <figure>
              <img src={pic2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex items-center">
                <FaTag />
                <h2 className="card-title ml-2 hover:text-info">1.32 acres football ground</h2>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className=" flex flex-col items-center p-5">
          <div className="card w-96 bg-base-300 hover:bg-black duration-500 shadow-2xl">
            <figure>
              <img src={pic3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex items-center">
                <FaTag />
                <h2 className="card-title ml-2 hover:text-info">8+ years experince trainer</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
