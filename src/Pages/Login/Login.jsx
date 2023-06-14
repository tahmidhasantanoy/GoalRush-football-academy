import React, { useState } from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { login,googleLogin } = useAuth();
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
    setErr("")

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
    <div className="hero min-h-screen bg-base-200 login-bg">
      <div className="hero-content .flex-col .lg:flex-row-reverse w-6/12 mx-auto">
        <div className="card  w-full .max-w-sm shadow-xl shadow-pink-400 bg-base-100 opacity-80 mt-24 mb-12">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email")}
                type="text"
                placeholder="Enter your email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="Enter secret password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {err && <p className="text-error">{err}</p>}
            <div className="form-control mt-6 w-2/4 mx-auto">
              <button className="btn btn-info bg-info w-full">Login</button>
            </div>
            {/* change */}
            <div className="divider">OR</div>
            <div onClick={handleGoogleSubmit} className="text-center flex items-center justify-center border mx-auto p-3 btn rounded-full">
              {/* <p>Signin with </p> */}
              <FaGoogle className="" />
            </div>
            {/* change */}
            <p className="text-center mt-5">
              Don't have an acoount?
              <span className="text-info underline">
                <Link to={"/signup"}>Create account</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
