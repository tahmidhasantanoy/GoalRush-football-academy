import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import useSpecificClass from "../../../../Hooks/useSpecificClass";
import { Link } from "react-router-dom";

const MyClass = () => {
  const [specificInstrucClass] = useSpecificClass();
  console.log(specificInstrucClass);

  const { user } = useAuth();
  const [insData, setInsData] = useState([]);
  console.log(user?.email);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `http://localhost:5000/all-class/instructor?instructorEmail=${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => setInsData(data))
        .catch((err) => console.log(err.message));
    }
  }, [user?.email]);

  console.log(insData);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {insData.map((data) => (
        <div
          key={data._id}
          className="card w-96 bg-neutral text-neutral-content m-20"
        >
          <div className="card-body items-center text-center">
            <h2 className="card-title">{data.classname}</h2>
            <hr />
            <p>Asking price : ${data.price}</p>
            <p>Available Seats : {data.availableSeats}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <Link to={`/dashboard/updateClass/${data._id}`}>Update</Link>
              </button>
              {/* <button className="btn btn-ghost">Deny</button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyClass;
