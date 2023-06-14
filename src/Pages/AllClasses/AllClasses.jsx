import React, { useEffect, useState } from "react";
import useAllClass from "../../Hooks/useAllClass";
import { FaBeer, FaRegCalendar, FaRegCalendarCheck } from "react-icons/fa";
import useInstructor from "../../Hooks/useInstructor";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const AllClasses = () => {
  const [classData] = useAllClass();
  // console.log(classData);
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleAddClass = (addItem) => {
    // console.log(addItem);
    const {
      _id,
      image,
      classname,
      instructorName,
      instructorEmail,
      price,
      availableSeats,
    } = addItem;

    const addClass = {
      classId: _id,
      image,
      classname,
      instructorName,
      instructorEmail,
      price: parseFloat(price),
      availableSeats: parseInt(availableSeats),
    };

    if (user?.email) {
      console.log(user.email);

      //Let's do simply
      fetch("http://localhost:5000/all-class/selected", {
        method: "POST",

        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addClass),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: "top-middle",
              icon: "success",
              title: "class added successfully",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        })
        .catch((err) => console.log(err.message));
    } else {
      Swal.fire("Please! Login first");
      navigate("/login", { state: { from: location } });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 pt-28 justify-center">
      {classData.map((item) => (
        <div
          key={item._id}
          className="card card-compact w-[400px] bg-[#1a4949] shadow-2xl hover:scale-105 duration-1000 mb-8 mx-auto"
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
              <button
                onClick={() => handleAddClass(item)}
                disabled={isInstructor?.instructor || isAdmin?.admin}
                className="btn btn-sm w-full mt-5 mx-auto btn-info "
              >
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
