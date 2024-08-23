import React, { useState } from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { login, googleLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [err, setErr] = useState("");

  const from = location.state?.from?.pathname || "/";

  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    setErr("");

    login(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        reset();
        navigate(from, { replace: true });
      })
      .catch((err) => setErr("Email or password is not valid"));
  };

  const handleGoogleSubmit = () => {
    googleLogin()
      .then((res) => {
        const user = res.user;
        // setDisplayName(user.displayName);
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="hero min-h-screen bg-base-200 login-bg p-0 m-0">
      <div className="hero-content w-6/12 mx-auto p-0 m-0">
        {/* change  */}
        {/* <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="divider">OR</div>
            <div
              onClick={handleGoogleSubmit}
              className="text-center flex items-center justify-center border mx-auto p-3 btn rounded-full"
            >
              <FaGoogle className="" />
            </div>
            <p className="text-center mt-5">
              Don't have an acoount?
              <span className="text-info underline">
                <Link to={"/signup"}>Create account</Link>
              </span>
            </p>
          </div>
        </div> */}

        {/* change  */}
        <div className="card  w-full shadow-xl shadow-pink-400 bg-base-100 opacity-80 mt-24 mb-12">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body py-0">
            <div className="form-control py-0 m-0">
              <label className="label py-0">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email")}
                type="text"
                placeholder="Enter your email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control p-0 m-0">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="Enter secret password"
                className="input input-bordered"
              />
              {err && <p className="text-error ml-4 text-sm">{err}</p>}
              <label className="label mt-0 py-0">
                <a href="#" className="label-text-alt link link-hover mt-0">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control w-2/4 md:w-10/12 mx-auto mt-3">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-center mt-1 text-sm">
              Don't have an acoount?
              <span className="text-orange-600">
                &nbsp;
                <Link to={"/signup"}>Create account</Link>
              </span>
            </p>
            <div className="divider">OR</div>
            <div
              onClick={handleGoogleSubmit}
              className="w-2/4 md:w-10/12 mt-3 mx-auto btn btn-outline hover:text-info "
            >
              <div className="flex items-center">
              <p>Signin with </p>
              <FaGoogle className="ml-2"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
