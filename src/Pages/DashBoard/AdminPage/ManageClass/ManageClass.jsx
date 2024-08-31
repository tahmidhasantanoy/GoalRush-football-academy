import React, { useState } from "react";
import useAllClass from "../../../../Hooks/useAllClass";
import { FaCaretRight, FaPlusCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import TitlePage from "../../../../TitlePage/TitlePage";
import SeeMoreButton from "../../../../components/ui/SeeMoreButton/SeeMoreButton";

const ManageClass = () => {
  const [classData, refetch] = useAllClass();
  const [feedback, setFeedback] = useState(false);
  const [id, setId] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [visibleItem, setVisibleItem] = useState(6);
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
    const feedBackData = event.target.value;

    if (feedBackData == undefined) return;
    // const feedback = JSON.stringify(feedData)
    // console.log(feedback,id);

    axiosSecure
      .put(`/all-class/classFeedback/${id}`, feedBackData)
      .then((res) => {
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

  const handleSeeMore = () => setVisibleItem((prevItem) => prevItem + 6);

  return (
    <div className="mt-28 mb-20">
      <TitlePage title={"Manage Class | Dashboard"}></TitlePage>
      <Fade cascade damping={0.1}>
        <p className="text-center text-black text-2xl font-semibold">
          All Classes of GoalRush
        </p>
      </Fade>

      <hr className="w-1/2 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {classData.slice(0, visibleItem).map((data) => (
          <div
            key={data._id}
            className="rounded overflow-hidden shadow-xl bg-base-100 hover:bg-base-300 duration-500 border-blue-800 border-2 classCard px-8 pt-8 pb-4 m-12"
          >
            <img className="h-[200px] w-[500px]" src={data.image} alt="River" />
            <div className="px-6">
              <p className="font-bold text-xl mt-4">{data.classname}</p>
            </div>
            <div className="px-6 flex flex-col mt-6 mb-4">
              <div className="flex items-center bg-gray-200 hover:bg-white rounded-full px-3 text-sm font-semibold text-gray-700 py-2 mb-2">
                <FaCaretRight className="pr-2" />
                <p>Instructor : {data.instructorName}</p>
              </div>
              <div className="flex items-center bg-gray-200 hover:bg-white rounded-full px-3 text-sm font-semibold text-gray-700 py-2 mb-2">
                <FaCaretRight className="pr-2 " />
                <p>Email : {data.instructorEmail}</p>
              </div>
              <div className="flex items-center bg-gray-200 hover:bg-white rounded-full px-3 text-sm font-semibold text-gray-700 py-2 mb-2">
                <FaCaretRight className="pr-2" />
                <p>Price : ${data.price}</p>
              </div>
              <div className="flex items-center bg-gray-200 hover:bg-white rounded-full px-3 text-sm font-semibold text-gray-700 py-2 mb-2">
                <FaCaretRight className="pr-2" />
                <p>Available seat number : {data.availableSeats}</p>
              </div>
              <div className="mt-4">
                <hr className="font-bold" />
                <div className="card-actions flex justify-end">
                  <button
                    onClick={() => handleAcceptClass(data)}
                    className="btn-info normal-case"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleDenyClass(data)}
                    className="btn-ghost normal-case"
                  >
                    Deny
                  </button>
                </div>
                <div>
                  <form className="flex items-center m-0 py-3 relative">
                    <textarea
                      disabled={!feedback}
                      type="text"
                      name="feedback"
                      placeholder="Feedback for the class"
                      className="w-full .max-w-xs rounded-xl"
                    />
                    <button
                      className="absolute btn-outline hover:btn-outline right-0 top-2"
                      onClick={handleFeedback}
                    >
                      {" "}
                      <FaPlusCircle
                        disabled={!feedback}
                        className="text-black bg-white "
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleItem < classData.length && (
        <SeeMoreButton onClick={handleSeeMore}>See more</SeeMoreButton>
      )}
    </div>
  );
};

export default ManageClass;
