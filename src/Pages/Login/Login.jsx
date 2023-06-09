import React from "react";
import "./login.css"

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200 login-bg">
      <div className="hero-content .flex-col .lg:flex-row-reverse w-6/12 mx-auto">
        {/* <div className="text-center lg:text-left"> */}
          {/* <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p> */}
        {/* </div> */}
        <div className="card  w-full .max-w-sm shadow-xl shadow-pink-400 bg-base-100 opacity-70 my-24">
          <div className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 w-2/4 mx-auto">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
