import React from "react";
import useAlluser from "../../../../Hooks/useAlluser";
import { FaUserAstronaut, FaUserEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [usersData, refetch] = useAlluser();
  console.log(usersData);

  const handleMakeAdmin = (user) => {
    // console.log(user);

    fetch(`https://goal-rush-server.vercel.app/users/${user._id}`, {
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
            title: "Made admin successflly",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire("Aleady admin");
        }
      })
      .catch((err) => console.log(err.message));
  };

  const handleMakeInstructor = (user) => {
    fetch(`https://goal-rush-server.vercel.app/users/instructor/${user._id}`, {
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
            title: "Made instructor successflly",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire("Aleady Instructor");
        }
      })
      .catch((err) => console.log(err.message));
  };

  if (!Array.isArray(usersData)) {
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
    <div className="my-20 mt-28">
      <p className="text-center text-white text-2xl font-semibold ">All user of GoalRush</p>
      <hr className="w-2/4 mx-auto mb-12"/>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>User no.</label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Instructor</th>
              <th>Make Admin</th>
              <th></th>
            </tr>
          </thead>
          {usersData.map((user, idx) => (
            <tbody>
              <tr>
                <th>
                  <label>{idx + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.image} alt="No image found" />
                      </div>
                    </div>
                    <div></div>
                  </div>
                </td>
                <td>
                  <span className="ml-2">{user.name}</span>
                  <br />
                  <span className="badge badge-ghost badge-sm ml-0">
                    {user.email}
                  </span>
                </td>
                <td onClick={() => handleMakeInstructor(user)}>
                  <FaUserEdit className="w-40 pr-16 btn-ghost" />
                </td>
                <td onClick={() => handleMakeAdmin(user)}>
                  <FaUserAstronaut className="w-40 pr-20 btn-ghost" />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
