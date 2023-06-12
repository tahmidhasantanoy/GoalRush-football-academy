import React, { useEffect } from "react";
import useAllClass from "../../Hooks/useAllClass";

const AllClasses = () => {
  // 162
  // useEffect(() => {

  // },[])

  const [classData] = useAllClass();
  console.log(classData);

  if (!Array.isArray(classData)) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid gri md:grid-cols-2 pt-28">
      {classData.map((item) => (
        <div className="card card-compact w-96 bg-[#1a4949] shadow-2xl hover:scale-105 duration-1000 mb-8">
          <p className="mt-5 mb-1 pl-5 text-white font-semibold text-2xl">
            {item?.classname}
          </p>
          <figure>
            <img className="p-3 rounded-3xl" src={item?.image} alt="Shoes" />
          </figure>
          <div className="card-body space-y-2 ml-3">
            <p className="text-2xl">{item?.instructorName}</p>
            <p className="border-b-2 mx-auto ml-0">Available Now : {item?.availableSeats} seats</p>
            <p className="bg-white mx-auto ml-0 p-1 px-3 rounded-2xl text-black font-semibold">
              ${item?.price}
            </p>
            <div className="card-actions justify-start">
            <button className="btn btn-sm w-full mt-5 mx-auto">Book now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllClasses;
