import React, { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import TitlePage from "../../../../TitlePage/TitlePage";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [payData, setPayData] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://goal-rush-server.vercel.app/payments?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setPayData(data))
        .catch((err) => console.log(err.message));
    }
  }, [user?.email]);

  console.log(payData);
  return (
    <div className="my-10">
      <TitlePage title={"Payment History | Dashboard"}></TitlePage>
      <p className="text-center text-3xl md:text-4xl text-black">Payment History</p>
      <div className="overflow-x-auto my-6 mx-10">
        <table className="table">
          {/* head */}
          <thead className="select_tableHead">
            <tr>
              <th>Class name</th>
              <th>Date & Time</th>
              <th>TranssactionId</th>
              <th>Amount</th>
              <th>Email</th>
            </tr>
          </thead>
          {payData.map((data) => (
            <tbody key={data._id} className="">
              <tr className="text-center">
                <td>{data?.classname ? data?.classname : "No name found"}</td>
                <th>{data.Date}</th>
                <td>{data.transsactionId}</td>
                <td>{data?.amount}</td>
                <td>{data?.email}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
