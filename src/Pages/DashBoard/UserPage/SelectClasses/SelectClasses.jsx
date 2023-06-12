import React from "react";
import useSelectClasses from "../../../../Hooks/useSelectClasses";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const SelectClasses = () => {
  const [selectClass, refetch] = useSelectClasses();
  const [axiosSecure] = useAxiosSecure();
  //   console.log(selectClass);

  if (!Array.isArray(selectClass)) {
    return (
      <>
        <div>
          <div className="flex items-center justify-center pt-20">
            <p>Loading &nbsp; &nbsp;</p>
            <span className="loading loading-dots loading-xs text-yellow-400"></span>
            <span className="loading loading-dots loading-sm text-yellow-400"></span>
            <span className="loading loading-dots loading-md text-yellow-400"></span>
            <span className="loading loading-dots loading-lg text-yellow-400"></span>
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
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="table p-20">
          {/* head */}
          <thead>
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
            <tbody>
              {/* row 1 */}
              <tr key={item?._id}>
                <th>
                  <label className="ml-5">{idx + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div></div>
                  </div>
                </td>
                <td>
                  {item?.instructorName}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {item?.instructorEmail}
                  </span>
                </td>
                <td>{item?.price}</td>
                <td className="pl-12">{item?.availableSeats}</td>
                <th>
                  <button className="btn btn-ghost ">pay</button>
                </th>
                <th>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaTrashAlt />
                  </button>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default SelectClasses;
