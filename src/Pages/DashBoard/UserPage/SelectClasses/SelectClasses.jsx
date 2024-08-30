import React from "react";
import useSelectClasses from "../../../../Hooks/useSelectClasses";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import "./SelectClasses.css";
import TitlePage from "../../../../TitlePage/TitlePage";
import useAuth from "../../../../Hooks/useAuth";

const SelectClasses = () => {
  const [selectClass, refetch] = useSelectClasses();
  const [axiosSecure] = useAxiosSecure();
  console.log(selectClass);

  /* For test if i fount or not */
  const { user } = useAuth();
  const email = user?.email;
  console.log(email, user);

  if (!Array.isArray(selectClass)) {
    return (
      <>
        <div>
          <div className="flex items-center justify-center pt-20">
            <p>Loading &nbsp; &nbsp;</p>
            <span className="loading loading-dots loading-xs text-yellow-400"></span>
            <span className="loading loading-dots loading-sm text-[#f5f821]"></span>
            <span className="loading loading-dots loading-md text-[#f3f66e]"></span>
            <span className="loading loading-dots loading-lg text-[#f3f59c]"></span>
          </div>
        </div>
      </>
    );
  }

  const handleDelete = (deleteClass) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this class!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/all-class/selected/${deleteClass._id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire("Deleted!", "This class has been deleted.", "success");
              refetch();
            }
          });
      }
    });
  };

  return (
    <div className="w-10/12">
      <TitlePage title={"Selected Classes | Dashboard"}></TitlePage>
      <div className="overflow-x-auto">
        <p className="text-center text-3xl md:text-4xl py-5">
          Selected classes for {user?.displayName}
        </p>
        <table className="table">
          {/* head */}
          <thead className="select_tableHead">
            <tr>
              <th className="border-b-2 text-white">
                <label>Class No.</label>
              </th>
              <th className="border-b-2 m-5 text-white">Class Image</th>
              <th className="border-b-2 m-5 text-white">
                Instructor Name & Email
              </th>
              <th className="border-b-2 m-5 text-white">Price</th>
              <th className="border-b-2 m-5 text-white">available seats</th>
              <th className="border-b-2 m-5 text-white">Payment</th>
              <th className="border-b-2 m-5 text-white">Actions</th>
            </tr>
          </thead>
          {selectClass.map((item, idx) => (
            <>
              <tbody key={item?._id} className="select_tableData">
                {/* row 1 */}
                <tr className="text-center">
                  <th className="bg-base-300 text-center">
                    <label>{idx + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 text-center">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </td>
                  <td className="bg-base-300 text-center">
                    {item?.instructorName}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {item?.instructorEmail}
                    </span>
                  </td>
                  <td>{item?.price}</td>
                  <td className="text-center bg-base-300">
                    {item?.availableSeats}
                  </td>
                  <th>
                    {/* only change here  */}
                    <Link
                      to={`/dashboard/payment/${encodeURIComponent(
                        JSON.stringify(item)
                      )}`}
                    >
                      <button className="btn-outline hover:btn-success">
                        pay
                      </button>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn-error btn-xs"
                    >
                      <FaTrashAlt />
                    </button>
                  </th>
                </tr>
              </tbody>
            </>
          ))}
        </table>
      </div>
    </div>
  );
};

export default SelectClasses;
