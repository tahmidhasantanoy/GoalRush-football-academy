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
    <div className="">
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


      <div className="flex justify-center ">
        <div
          className="bg-[#1F316F] text-black flex flex-col space-y-4 justify-center items-center rounded-2xl border-2 border-blue-300 py-8 px-8 mt-10 my-6 z-50 relative"
          style={{ zIndex: 50 }}
        >
          <p className="text-[#F9DBBA]  bg-[#5B99C2] px-4 py-2 rounded-2xl text-3xl">
            provide valid information
          </p>
          <p>
            card number :{" "}
            <span className="text-white">4242 4242 4242 4242</span>
          </p>
          <p>
            Month : <span className="text-white">12</span> Year :{" "}
            <span className="text-white">33</span> CVC :{" "}
            <span className="text-white"> 123</span> ZIP :{" "}
            <span className="text-white">12345</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
