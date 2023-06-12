import React from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";

//TODO : provide pk
const stripePromise = loadStripe(import.meta.env.VITE_payment_secret_token);
const PaymentPage = () => {
  //Payment class data
  const { item } = useParams(); //from pay button
  const paymentClassData = JSON.parse(decodeURIComponent(item));
  const classPrice = paymentClassData.price;
  const price = parseFloat(classPrice.toFixed(2));

  return (
    <>
      <div className="w-full p-20">
        <Elements stripe={stripePromise}>
          <CheckoutForm
            paymentClassData={paymentClassData}
            price={price}
          ></CheckoutForm>
        </Elements>
      </div>
    </>
  );
};

export default PaymentPage;
