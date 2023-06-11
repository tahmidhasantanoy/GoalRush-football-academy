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
        <div className="card card-compact w-96 bg-teal-950 shadow-2xl">
          <figure>
            <img
              src={item?.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item?.name}</h2>
            <p>{item?.instructorName}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllClasses;
