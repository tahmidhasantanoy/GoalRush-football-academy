import React from "react";
import { useLoaderData } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import { FaCaretRight } from "react-icons/fa";

const InstructorAllClass = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const InstructorAllClass = useLoaderData();

  if (!Array.isArray(InstructorAllClass)) {
    return (
      <div className="flex items-center justify-center pt-20">
        <p>Loading &nbsp;</p>
        <span className="loading loading-dots loading-xs text-yellow-400"></span>
        <span className="loading loading-dots loading-sm text-yellow-400"></span>
        <span className="loading loading-dots loading-md text-yellow-400"></span>
        <span className="loading loading-dots loading-lg text-yellow-400"></span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 my-16 px-0 md:px-2 lg:px-6">
      {InstructorAllClass.map((classes) => (
        <div
          key={classes._id}
          className="rounded overflow-hidden shadow-xl bg-base-100 hover:bg-base-300 duration-500 border-blue-800 border-2 m-8 classCard"
        >
          <img
            className="h-[200px] w-[500px]"
            src={classes.image}
            alt="Class image"
          />
          <div className="px-6">
            <p className="font-bold text-xl mt-4 .mb-2">{classes.classname}</p>
          </div>
          <div className="px-6 pt-4 pb-2 flex flex-col mt-6 mb-4">
            <span className="inline-block bg-gray-200 hover:bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <div className="flex items-center mb-1">
                <FaCaretRight className="pr-2" />
                <p>Instructor : {classes.instructorName}</p>
              </div>
            </span>
            <span className="inline-block bg-gray-200 hover:bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <div className="flex items-center mb-1">
                <FaCaretRight className="pr-2 " />
                <p>Email : {classes.instructorEmail}</p>
              </div>
            </span>
            <span className="inline-block bg-gray-200 hover:bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <div className="flex items-center mb-1">
                <FaCaretRight className="pr-2" />
                <p>Price : ${classes.price}</p>
              </div>
            </span>
            <div className="mt-4">
              <hr className="font-bold" />
              <div className="flex flex-row sm:flex-col md:flex-row items-center justify-between">
                <div className="flex flex-row justify-center items-center sm:flex-col md:flex-row space-y-2">
                  {/* new */}
                  <button
                    onClick={() => handleAddClass(classes)}
                    disabled={isInstructor || isAdmin}
                    className="btn-info normal-case"
                  >
                    {/* <FaRegCalendarCheck /> */}
                    Book now
                  </button>
                  {/* <button className="btn-info normal-case">Enroll now</button>{" "} */}
                  {/* new */}
                  <span className="font-bold">
                    {" "}
                    <sup>$</sup>
                    {classes.price}
                  </span>
                </div>{" "}
                {/* want to add outline button but doesn't work */}
                <button className="btn-outline bg-transparent border-2 border-info normal-case">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstructorAllClass;
