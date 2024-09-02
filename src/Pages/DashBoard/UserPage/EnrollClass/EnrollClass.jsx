import React, { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import TitlePage from "../../../../TitlePage/TitlePage";
import search from "../../../../../public/Animation/search.json";
import Lottie from "lottie-react";

const EnrollClass = () => {
  const [enroll, setEnroll] = useState([]);
  const { user } = useAuth();

  
  useEffect(() => {
    if (user?.email) {
      fetch(`https://goal-rush-server.vercel.app/payments?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setEnroll(data))
        .catch((err) => console.log(err.message));
    }
  }, [user?.email]);

  //   console.log(enroll);

  return (
    <div className="mt-28 mb-12">
      <TitlePage title={"Enroll Classes | Dashboard"}></TitlePage>
      <p className="text-3xl md:text-4xl text-black text-center font-medium mb-5">
        Enrolled class of {user?.displayName}
      </p>
      <div className=".overflow-x-auto">
        {enroll.length == 0 ? (
          <div className="flex items-center justify-center h-64 relative">
            <Lottie animationData={search} className="absolute" />
            <p className="absolute text-4xl top-1/2 transform -translate-y-1/2">
              No enrollment found.
            </p>
          </div>
        ) : (
          <table className="table overflow-x-auto mx-10">
            <thead className="select_tableHead">
              <tr>
                <th>
                  <label>Class No.</label>
                </th>
                <th>Name</th>
                <th>Class Name & Price</th>
                <th>Instructor Name & Email</th>
                <th>Available Seats</th>
              </tr>
            </thead>
            {enroll.map((data, idx) => (
              <tbody key={idx} className="select_tableData">
                <tr className="text-center">
                  <th>
                    <label>{idx + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={data.classInfo.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">
                        {data.classInfo.classname}
                      </div>
                      <div className="text-sm opacity-50">
                        {data.classInfo.price}
                      </div>
                    </div>
                  </td>
                  <td>
                    {data.classInfo.instructorName}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {data.classInfo.instructorEmail}
                    </span>
                  </td>
                  <td>
                    <p className="ml-8">{data.classInfo.availableSeats}</p>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        )}
      </div>
    </div>
  );
};

export default EnrollClass;
