import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import "./CheckoutForm.css";

const CheckoutForm = ({ paymentClassData, price }) => {
  console.log(paymentClassData.classId);
  const deleteClassId = paymentClassData.classId
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
      //TODO : next

      const payment = {
        Date: new Date(),
        transsactionId,
        email: user?.email,
        amount: price,
        classId: paymentClassData._id,
        selectClassId : paymentClassData.classId,
        className: paymentClassData.className,
        OrderStatus : "Pending"
      };

      axiosSecure.post(`/payments/${deleteClassId}`, payment).then((res) => {
    //   axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
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
      <form onSubmit={handleSubmit}>
        <CardElement
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
          className="btn btn-outline btn-sm btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {CardErr && <p className="text-error">{CardErr}</p>}
      {transsactionId && (
        <p className="text-success">Payment Success with{transsactionId}</p>
      )}
    </>
  );
};

export default CheckoutForm;
