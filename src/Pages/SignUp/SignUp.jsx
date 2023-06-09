import React from "react";
import registrationImg from "../../../public/Authenticaion/Reg-pic.jpg";
import "./SignUp.css";

const SignUp = () => {

    //TODO : input border color,btn color,btn size
  return (
    <div className=".hero min-h-screen .bg-base-200 reg-bg py-20">
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
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="text"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="url"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
