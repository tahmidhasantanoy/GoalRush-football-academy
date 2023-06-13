import React from "react";
import useAlluser from "../../../../Hooks/useAlluser";
import {
  FaUserAstronaut,
  FaUserEdit,
  FaUserSecret,
  FaUserTie,
} from "react-icons/fa";

const ManageUsers = () => {
  const [usersData] = useAlluser();
  console.log(usersData);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
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
              {/* row 1 */}
              <tr>
                <th>
                  <label>{idx + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user.image}
                          alt="No image found"
                        />
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
                <td>
                  <FaUserEdit className="w-40 pr-16" />
                </td>
                <td>
                  <FaUserAstronaut className="w-40 pr-20" />
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
