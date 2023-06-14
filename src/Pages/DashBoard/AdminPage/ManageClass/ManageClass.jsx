import React from "react";
import useAllClass from "../../../../Hooks/useAllClass";
import { FaCaretRight } from "react-icons/fa";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";

const ManageClass = () => {
  const [classData, refetch] = useAllClass();
  console.log(classData);

  const handleAcceptClass = (data) => {
    console.log(data);

    fetch(`http://localhost:5000/all-class/accept/${data._id}`, {
      method: "PATCH",
      headers: {
        "conent-type": "applicatio.json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount && data.acknowledged === true) {
          refetch();
          Swal.fire({
            position: "top-middle",
            icon: "success",
            title: "Status change successflly",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire("Aleady accept");
        }
      })
      .catch((err) => console.log(err.message));
  };

  const handleDenyClass = (data) => {
    console.log(data);

    fetch(`http://localhost:5000/all-class/deny/${data._id}`, {
      method: "PATCH",
      headers: {
        "conent-type": "applicatio.json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount && data.acknowledged === true) {
          refetch();
          Swal.fire({
            position: "top-middle",
            icon: "success",
            title: "Status change successflly",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire("Aleady deny");
        }
      })
      .catch((err) => console.log(err.message));
  };



  if (!Array.isArray(classData)) {
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
    <div className="mt-28 mb-20">
      <Fade cascade damping={0.1}>
        <p className="text-center text-white text-2xl font-semibold">
          All Classes of GoalRush
        </p>
      </Fade>

      <hr className="w-2/4 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2">
        {classData.map((data) => (
          <div key={data._id} className="card w-96 bg-teal-950 shadow-xl m-12">
            <figure className="px-10 pt-10">
              <img src={data.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center ">
              <h2 className="card-title text-white">{data.classname}</h2>
              <div className="mr-36 justify-start my-5">
                <div className="flex items-center">
                  <FaCaretRight className="pr-2" />
                  <p className="">{data.instructorName}</p>
                </div>
                <div className="flex items-center">
                  <FaCaretRight className="pr-2" />
                  <p className="">{data.instructorEmail}</p>
                </div>
                <div className="flex items-center">
                  <FaCaretRight className="pr-2" />
                  <p className="">Price : ${data.price}</p>
                </div>
                <div className="flex items-center">
                  <FaCaretRight className="pr-2" />
                  <p className="">Available Seats : {data.availableSeats}</p>
                </div>
              </div>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleAcceptClass(data)}
                  className="btn btn-primary"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleDenyClass(data)}
                  className="btn btn-ghost"
                >
                  Deny
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageClass;
