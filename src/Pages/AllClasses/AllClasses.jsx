import React, { useEffect, useState } from "react";
import useAllClass from "../../Hooks/useAllClass";
import {
  FaBeer,
  FaCaretRight,
  FaRegCalendar,
  FaRegCalendarCheck,
  FaSearch,
} from "react-icons/fa";
import useInstructor from "../../Hooks/useInstructor";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import TitlePage from "../../TitlePage/TitlePage";
import { IoMdClose } from "react-icons/io"; // Importing a close icon for the cancel button

const AllClasses = () => {
  const [classData] = useAllClass();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [filterItem, setFilterItem] = useState("");

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

  const searchItems = classData?.filter(
    (classItem) =>
      !filterItem ||
      classItem?.classname?.toLowerCase().includes(filterItem.toLowerCase())
  );

  const handleClear = () => setFilterItem("");

  const handleAddClass = (addItem) => {
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
      user_email: user?.email,
      price: parseFloat(price),
      availableSeats: parseInt(availableSeats),
    };

    if (user?.email) {
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
              title: "Class added successfully",
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
    <div className="mt-32 my-16 px-0 md:px-2 lg:px-6">
      <div className="flex justify-center items-center m-0 p-0">
        <div className="relative w-2/5">
          <input
            value={filterItem}
            onChange={(e) => setFilterItem(e.target.value)}
            className="w-full py-3 px-4 pl-10 border border-gray-300 rounded-3xl shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            type="text"
            placeholder="Search for classes..."
          />
          <button className="absolute btn-outline left-0 top-[8px] px-4 flex items-cente text-white rounded-l-lg hover:bg-white hover:bg-opacity-10 hover:shadow-none focus:outline-none transition-all duration-300">
            <FaSearch className="w-4 h-8 btn-outline hover:btn-outline hover:bg-transparent transition-all duration-300" />
          </button>

          {/* new */}
          {filterItem && (
            <button
              onClick={handleClear}
              className="absolute right-2 top-2 btn-outline hover:rounded-full text-gray-500 hover:text-black hover:bg-white focus:outline-none transition-all duration-300"
            >
              <IoMdClose className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 .mt-20 .my-16 px-0 md:px-2 lg:px-6">
        {searchItems.map((item) => (
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
                      Book now
                    </button>
                    <span className="font-bold">
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
    </div>
  );
};

export default AllClasses;
