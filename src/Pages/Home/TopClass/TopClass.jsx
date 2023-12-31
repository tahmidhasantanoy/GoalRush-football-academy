import React from "react";
import useTopClasses from "../../../Hooks/useTopClasses";
import { FaCaretRight } from "react-icons/fa";

const TopClass = () => {
  const [topClassData] = useTopClasses();

  if (!Array.isArray(topClassData)) {
    return (
      <>
        <div>
          <div className="flex items-center justify-center pt-20">
            <p>Loading &nbsp;</p>
            <span className="loading loading-dots loading-xs text-yellow-400"></span>
            <span className="loading loading-dots loading-sm text-yellow-400"></span>
            <span className="loading loading-dots loading-md text-yellow-400"></span>
            <span className="loading loading-dots loading-lg text-yellow-400"></span>
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <h3 className="text-white text-start font-bold text-4xl pt-12 ml-20">
        Our top classes!
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 px-12 pb-12">
        {topClassData.map((data) => (
          <div
            key={data._id}
            className="rounded overflow-hidden shadow-xl bg-base-200 m-8"
          >
            <img className="h-[280px] w-[500px]" src={data.image} alt="River" />
            <div class="px-6 ">
              <div class="font-bold text-xl mt-10 mb-2">{data.classname}</div>
            </div>
            <div className="px-6 pt-4 pb-2 flex flex-col mt-6 mb-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <div className="flex items-center mb-1">
                  <FaCaretRight className="pr-2" />
                  <p>Instructor : {data.instructorName}</p>
                </div>
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <div className="flex items-center mb-1">
                  <FaCaretRight className="pr-2" />
                  <p>Email : {data.instructorEmail}</p>
                </div>
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <div className="flex items-center mb-1">
                  <FaCaretRight className="pr-2" />
                  <p>Price : ${data.price}</p>
                </div>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopClass;
