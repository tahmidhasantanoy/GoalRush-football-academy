import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import "./CheckoutForm.css";

const CheckoutForm = ({ paymentClassData, price }) => {
  console.log(paymentClassData.classId);
  const deleteClassId = paymentClassData.classId;
  const stripe = useStripe();
  const elements = useElements();
  const [CardErr, SetCardErr] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();
  const [processing, setProcessing] = useState(false);
  const [transsactionId, setTranssactionId] = useState("");

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    console.log("card", card);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error found", error);
      SetCardErr(error.message);
    } else {
      SetCardErr("");
      console.log("paymentMethod", paymentMethod);
    }

    setProcessing(true);
    const { paymentIntent, error: confirmedErr } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayname || "anonymous",
          },
        },
      });

    if (confirmedErr) {
      console.log(confirmedErr);
      SetCardErr(confirmedErr);
    }
    console.log("paymentIntent", paymentIntent); //8:05

    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      console.log("transsectionId", paymentIntent.id);
      const transsactionId = paymentIntent.id;
      setTranssactionId(paymentIntent.id);

      const payment = {
        Date: new Date(),
        transsactionId,
        email: user?.email,
        amount: price,
        classId: paymentClassData._id,
        selectClassId: paymentClassData.classId, //selectClassId
        className: paymentClassData.classname,
        OrderStatus: "Pending",
        classInfo: paymentClassData,
      };

      axiosSecure.post(`/payments/${deleteClassId}`, payment).then((res) => {
        //   axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertResult.insertedId) {
          console.log(94, res.data.insertResult.insertedId);
          Swal.fire({
            position: "top-middle",
            icon: "success",
            title: "Payment Successfull",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };
  return (
    <>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="">
          <CardElement
            className="w-[400px] md:w-[500px]"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="btn-primary normal-case"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay for enroll
          </button>
        </form>
      </div>
      <div className="">
        {CardErr && <p className="text-error">{CardErr}</p>}
        {transsactionId && (
          <p className="text-success">
            Payment Success with{" "}
            <span className="text-error">{transsactionId}</span>
          </p>
        )}
      </div>

      <div className="bg-red-400 text-black flex flex-col space-y-4 justify-center items-center w-[770px] h-[250px] rounded-2xl border-2 border-blue-300 my-10">
        <p className="text-zinc-700 text-3xl underline">
          Please give a valid card number & date
        </p>
        <p>
          card number : <span className="text-white">4242 4242 4242 4242</span>
        </p>
        <p>
          Month : <span className="text-white">12</span> Year :{" "}
          <span className="text-white">33</span> CVC :{" "}
          <span className="text-white"> 123</span> ZIP :{" "}
          <span className="text-white">12345</span>
        </p>
      </div>
    </>
  );
};

export default CheckoutForm;
