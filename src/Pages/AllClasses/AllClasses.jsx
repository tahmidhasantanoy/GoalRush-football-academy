import React, { useEffect, useState } from "react";
import useAllClass from "../../Hooks/useAllClass";
import {
  FaBeer,
  FaCaretRight,
  FaRegCalendar,
  FaRegCalendarCheck,
} from "react-icons/fa";
import useInstructor from "../../Hooks/useInstructor";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import TitlePage from "../../TitlePage/TitlePage";

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
          <TitlePage title={"All Class"}></TitlePage>
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
      fetch("https://goal-rush-server.vercel.app/all-class/selected", {
        method: "POST",

        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addClass),
      })
        .then((res) => res.json())
        .then((item) => {
          // console.log(item);
          if (item.insertedId) {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 my-16 px-0 md:px-2 lg:px-6">
      {classData.map((item) => (
        <div
          key={item._id}
          className="rounded overflow-hidden shadow-xl bg-base-100 hover:bg-base-300 duration-500 border-blue-800 border-2 m-8 classCard"
        >
          <img
            className="h-[200px] w-[500px]"
            src={item.image}
            alt="Class image"
          />
          <div class="px-6">
            <p class="font-bold text-xl mt-4 .mb-2">{item.classname}</p>
          </div>
          <div className="px-6 pt-4 pb-2 flex flex-col mt-6 mb-4">
            <span className="inline-block bg-gray-200 hover:bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <div className="flex items-center mb-1">
                <FaCaretRight className="pr-2" />
                <p>Instructor : {item.instructorName}</p>
              </div>
            </span>
            <span className="inline-block bg-gray-200 hover:bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <div className="flex items-center mb-1">
                <FaCaretRight className="pr-2 " />
                <p>Email : {item.instructorEmail}</p>
              </div>
            </span>
            <span className="inline-block bg-gray-200 hover:bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <div className="flex items-center mb-1">
                <FaCaretRight className="pr-2" />
                <p>Price : ${item.price}</p>
              </div>
            </span>
            <div className="mt-4">
              <hr className="font-bold" />
              <div className="flex flex-row sm:flex-col md:flex-row items-center justify-between">
                <div className="flex flex-row justify-center items-center sm:flex-col md:flex-row space-y-2">
                  {/* new */}
                  <button
                    onClick={() => handleAddClass(item)}
                    disabled={isInstructor?.instructor || isAdmin?.admin}
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
                    {item.price}
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

export default AllClasses;
