import React, { useEffect, useState } from "react";
import useAllClass from "../../Hooks/useAllClass";
import { FaBeer, FaRegCalendar, FaRegCalendarCheck } from "react-icons/fa";
import useInstructor from "../../Hooks/useInstructor";
import useAdmin from "../../Hooks/useAdmin";

const AllClasses = () => {
  const [classData] = useAllClass();
  // console.log(classData);
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();
  const [button, setButton] = useState();

  if (!Array.isArray(classData)) {
    return (
      <>
        <div>
          <div className="flex items-center justify-center pt-20">
            <p>Loading &nbsp; &nbsp;</p>
            <span className="loading loading-dots loading-xs text-yellow-400"></span>
            <span className="loading loading-dots loading-sm text-yellow-400"></span>
            <span className="loading loading-dots loading-md text-yellow-400"></span>
            <span className="loading loading-dots loading-lg text-yellow-400"></span>
          </div>
        </div>
      </>
    );
  }

  if (isInstructor?.instructor || isAdmin?.admin) {
  }

  return (
    <div className="grid gri md:grid-cols-2 pt-28">
      {classData.map((item) => (
        <div
          key={item._id}
          className="card card-compact w-96 bg-[#1a4949] shadow-2xl hover:scale-105 duration-1000 mb-8"
        >
          <p className="mt-5 mb-1 pl-5 text-white font-semibold text-2xl">
            {item?.classname}
          </p>
          <figure>
            <img className="p-3 rounded-3xl" src={item?.image} alt="Shoes" />
          </figure>
          <div className="card-body space-y-2 ml-3">
            <p className="text-2xl">{item?.instructorName}</p>
            <p className="border-b-2 mx-auto ml-0">
              Available Now : {item?.availableSeats} seats
            </p>
            <p className="bg-white mx-auto ml-0 p-1 px-3 rounded-2xl text-black font-semibold">
              ${item?.price}
            </p>
            <div className="card-actions justify-start">
              <button disabled={isInstructor?.instructor || isAdmin?.admin}className="btn btn-sm w-full mt-5 mx-auto ">
                <FaRegCalendarCheck /> Book now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllClasses;
