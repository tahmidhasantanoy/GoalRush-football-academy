import React, { useState } from "react";
import useAllClass from "../../../../Hooks/useAllClass";
import { FaCaretRight } from "react-icons/fa";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const ManageClass = () => {
  const [classData, refetch] = useAllClass();
  const [feedback, setFeedback] = useState(false);
  const [id, setId] = useState("");
  const [axiosSecure] = useAxiosSecure();
  // console.log(classData);

  const handleAcceptClass = (data) => {
    // console.log(data);

    fetch(`https://goal-rush-server.vercel.app/all-class/accept/${data._id}`, {
      method: "PATCH",
      headers: {
        "conent-type": "applicatio.json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
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
    // console.log(data);
    setFeedback(true);
    setId(data._id);

    fetch(`https://goal-rush-server.vercel.app/all-class/deny/${data._id}`, {
      method: "PATCH",
      headers: {
        "conent-type": "applicatio.json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
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

  const handleFeedback = (event) => {
    event.preventDefault();
    const feedData = event.target.value;
    // const feedback = JSON.stringify(feedData)
    // console.log(feedback,id);

    axiosSecure.put(`/all-class/classFeedback/${id}`, feedData).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        Swal.fire({
          position: "top-middle",
          icon: "success",
          title: `Feeedback send`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
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
              <div className="mr-32 justify-start my-5">
                <div className="flex items-center mb-1">
                  <FaCaretRight className="pr-2" />
                  <p className="text-start">{data.instructorName}</p>
                </div>
                <div className="flex items-center mb-1">
                  <FaCaretRight className="pr-2" />
                  <p className="text-start">{data.instructorEmail}</p>
                </div>
                <div className="flex items-center mb-1">
                  <FaCaretRight className="pr-2" />
                  <p className="text-start">Price : ${data.price}</p>
                </div>
                <div className="flex items-center mb-1">
                  <FaCaretRight className="pr-2" />
                  <p className="text-start">Available Seats : {data.availableSeats}</p>
                </div>
              </div>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleAcceptClass(data)}
                  className="btn btn-info"
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
              <form>
                <input
                  disabled={!feedback}
                  type="text"
                  name="feedback"
                  placeholder="Feedback for the class"
                  className="input input-bordered input-info w-full max-w-xs"
                  onBlur={handleFeedback}
                />
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageClass;
