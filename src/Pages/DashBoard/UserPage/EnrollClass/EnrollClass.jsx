import React, { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import TitlePage from "../../../../TitlePage/TitlePage";

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
      <p className="text-3xl md:text-4xl text-black text-center font-semibold mb-5">
        Enroll class
      </p>
      <div className="overflow-x-auto mx-10">
        <table className="table">
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
                    <div className="font-bold">{data.classInfo.classname}</div>
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
      </div>
    </div>
  );
};

export default EnrollClass;
