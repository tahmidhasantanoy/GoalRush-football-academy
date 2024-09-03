import React from "react";
import useTopClasses from "../../../Hooks/useTopClasses";
import { FaCaretRight } from "react-icons/fa";
import useInstructor from "../../../Hooks/useInstructor";
import useAdmin from "../../../Hooks/useAdmin";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import "./TopClass.css";
import { Link, useNavigate } from "react-router-dom";

const TopClass = () => {
  const [topClassData] = useTopClasses();
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();
  const { user } = useAuth();
  const navigate = useNavigate();
  // console.log(topClassData);

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
      user_email: user?.email,
      price: parseFloat(price),
      availableSeats: parseInt(availableSeats),
    };

    if (user?.email) {
      // console.log(user.email);

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

  if (!Array.isArray(topClassData)) {
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
    <div>
      <h3 className="text-black text-center font-bold text-3xl md:text-4xl py-2 pt-4  md:py-6 lg:py-8">
        Our top classes!
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 .px-12 .pb-12">
        {topClassData.map((data) => (
          <div
            key={data._id}
            className="rounded overflow-hidden shadow-xl bg-base-100 hover:bg-base-300 duration-500 border-blue-800 border-2 classCard m-8"
          >
            <img className="h-[200px] w-[500px]" src={data.image} alt="River" />
            <div className="px-6">
              <p className="font-bold text-xl mt-4 .mb-2">{data.classname}</p>
            </div>
            <div className="px-6 pt-4 pb-2 flex flex-col mt-6 mb-4">
              <span className="inline-block bg-gray-200 hover:bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <div className="flex items-center mb-1">
                  <FaCaretRight className="pr-2" />
                  <p>Instructor : {data.instructorName}</p>
                </div>
              </span>
              <span className="inline-block bg-gray-200 hover:bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <div className="flex items-center mb-1">
                  <FaCaretRight className="pr-2 " />
                  <p>Email : {data.instructorEmail}</p>
                </div>
              </span>
              <span className="inline-block bg-gray-200 hover:bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <div className="flex items-center mb-1">
                  <FaCaretRight className="pr-2" />
                  <p>Price : ${data.price}</p>
                </div>
              </span>
              <div className="mt-4">
                <hr className="font-bold" />
                <div className="flex flex-row sm:flex-col md:flex-row items-center justify-between">
                  <div className="flex flex-row sm:flex-col md:flex-row space-y-2">
                    {/* new */}

                    <button
                      onClick={() => handleAddClass(data)}
                      disabled={isInstructor?.instructor || isAdmin?.admin}
                      className="btn-info normal-case"
                    >
                      Book now
                    </button>
                    <span className="font-bold">
                      {" "}
                      <sup>$</sup>
                      {data.price}
                    </span>
                  </div>{" "}
                  {/* want to add outline button but doesn't work */}
                  <Link to={`/course-details`}>
                    <button className="btn-outline bg-transparent border-2 border-info normal-case">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopClass;
