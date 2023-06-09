import React from "react";
import registrationImg from "../../../public/Authenticaion/Reg-pic.jpg";
import "./SignUp.css";
import { useForm } from "react-hook-form";
import TItlePage from "../../TItlePage/TItlePage";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  //TODO : input border color,btn color,btn size
  return (
    <div className=".hero min-h-screen .bg-base-200 reg-bg py-20">
      <TItlePage title={"Registration"}></TItlePage>
      <p className="text-center text-3xl font-semibold mb-3 text-white">
        Create new account.
      </p>

      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className=".text-center w-full lg:text-left .ml-5">
          <img
            className=".opacity-70 h-[620px] rounded-md"
            src={registrationImg}
            alt=""
          />
        </div>
        <div className="card .flex-shrink-0 w-full .max-w-sm shadow-2xl bg-base-100 opacity-80 lg:ml-16 mr-5">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                {...register("email")}
                type="text"
                placeholder="abc@gmail.com"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                {...register("password")}
                type="text"
                placeholder="At least 6 characters"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Confirm Password</span>
              </label>
              <input
                {...register("Confirm-password")}
                type="text"
                placeholder="Confirm Password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Photo Url</span>
              </label>
              <input
                {...register("Photo url")}
                type="url"
                placeholder="Enter your photo url"
                className="input input-bordered"
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text text-white-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary w-1/2 mx-auto">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
