import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import useSpecificClass from "../../../../Hooks/useSpecificClass";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";

const MyClass = () => {
  const [specificInstrucClass] = useSpecificClass();
  console.log(specificInstrucClass);

  const { user } = useAuth();
  const [insData, setInsData] = useState([]);
  console.log(user?.email);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://goal-rush-server.vercel.app/all-class/instructor?instructorEmail=${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => setInsData(data))
        .catch((err) => console.log(err.message));
    }
  }, [user?.email]);

  console.log(insData);

  return (
    <div>
      <p className="text-4xl text-white text-center mt-20 .border-b-2">{user?.displayName} all classes</p>
      <hr className="w-2/4 mx-auto"/>
      <div className="grid grid-cols-1 md:grid-cols-2 my-20">

{insData.map((data) => (
  <div
    key={data._id}
    className="card w-96 bg-neutral text-neutral-content mx-12 mb-12 "
  >
    <div className="card-body items-center text-center">
      <h2 className="card-title text-white border-b-2">
        {data.classname}
      </h2>
      <hr />
      <div className="mr-36 justify-start my-5">
        <div className="flex items-center mb-1">
          <FaCaretRight className="pr-2" />
          <p className="text-start">Asking price : ${data.price}</p>
        </div>
        <div className="flex items-center mb-1">
          <FaCaretRight className="pr-2" />
          <p className="text-start">Available Seats : {data.availableSeats}</p>
        </div>
        <div className="flex items-center">
          <FaCaretRight className="pr-2" />
          <p className="text-start">Status : {data.status}</p>
        </div>
      </div>

      <div className="card-actions justify-end">
        <button className="btn btn-primary btn-md">
          <Link to={`/dashboard/updateClass/${data._id}`}>Update</Link>
        </button>
      </div>
    </div>
  </div>
))}
</div>
    </div>
  );
};

export default MyClass;
