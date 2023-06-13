import React from "react";
import useAlluser from "../../../../Hooks/useAlluser";
import { FaUserAstronaut, FaUserEdit, FaUserSecret, FaUserTie } from "react-icons/fa";

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
            <tbody key={user._id}>
              <tr>
                <th>{idx + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><FaUserEdit className="w-40 pr-16"/></td>
                <td><FaUserAstronaut className="w-40 pr-20"/></td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
