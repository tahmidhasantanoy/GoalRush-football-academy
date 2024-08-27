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
    <div className="my-20">
      <TitlePage title={"Payment History | Dashboard"}></TitlePage>
        <p className="text-center text-2xl text-white">Payment History</p>
      <div className="overflow-x-auto my-6">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Class name</th>
              <th>Date & Time</th>
              <th>TranssactionId</th>
              <th>Amount</th>
              <th>Email</th>
            </tr>
          </thead>
          {payData.map((data) => (
            <tbody key={data._id}>
              <tr className="hover">
                <td>{data?.classname ? data?.classname : "No name"}</td>
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
