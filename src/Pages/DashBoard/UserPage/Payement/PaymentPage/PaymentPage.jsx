import React from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import TitlePage from "../../../../../TitlePage/TitlePage";
import "./Payment.css";

//TODO : provide pk
const stripePromise = loadStripe(import.meta.env.VITE_payment_secret_token);
const PaymentPage = () => {
  //Payment class data
  const { item } = useParams(); //from pay button
  const paymentClassData = JSON.parse(decodeURIComponent(item));
  const classPrice = paymentClassData.price;
  const price = parseFloat(classPrice.toFixed(2));

  return (
    <div className=".my-10">
      <p className="text-black text-2xl md:text-4xl text-center">
        Pay for selected class
      </p>

      <div className="w-[800px] h-[250px] my-8 payment mx-20">
        <TitlePage title={"Payment | Dashboard"}></TitlePage>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            className="w-auto"
            paymentClassData={paymentClassData}
            price={price}
          ></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default PaymentPage;
