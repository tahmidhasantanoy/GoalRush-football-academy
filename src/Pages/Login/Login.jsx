import React, { useState } from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import TitlePage from "../../TitlePage/TitlePage";

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
    <div className="hero min-h-screen p-0 m-0 login-bg">
      <TitlePage title={"Login"}></TitlePage>
      <div className="hero-content w-6/12 mx-auto p-0 my-24 login_body">
        <div className="card w-full shadow-xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=".card-body my-10 mx-28 py-0"
          >
            {/* <div className="form-control py-0 m-0">
                <label className="label py-0">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email")}
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
              </div> */}
            <div className="form-control m-0 p-0">
              <label className="label m-0 p-0">
                <span className="label-text text-black font-medium">Email</span>
              </label>
              <input
                {...register("email")}
                type="text"
                placeholder="Enter your email"
                className=".input input-bordered w-1/2 md:w-full lg:w-full"
                required
              />
            </div>
            {/*               <div className="form-control m-0 p-0">
                <label className="label m-0 p-0">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Enter secret password"
                  className=".input input-bordered w-full"
                  required
                />
                {err && <p className="text-error ml-4 text-sm">{err}</p>}
                <label className="label mt-0 py-0">
                  <a href="" className="label-text-alt link link-hover mt-0">
                    Forgot password?
                  </a>
                </label>
              </div> */}
            <div className="form-control p-0 m-0">
              <label className="label m-0 p-0">
                <span className="label-text text-black font-medium">
                  Password
                </span>
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="Enter secret password"
                className=".input input-bordered w-1/2 md:w-full lg:w-full"
              />
              {err && <p className="text-error ml-4 text-sm">{err}</p>}
              <label className="label mt-0 py-0">
                <a
                  href=""
                  className="label-text-alt text-black link link-hover mt-0"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control w-1/2 md:w-6/12 lg:w-8/12 mx-auto">
              <button className="btn btn-primary normal-case">Login</button>
            </div>
            <p className="text-center text-black mt-1 text-sm">
              Don't have an acoount?
              <span className="text-red-500 hover:underline hover:font-bold duration-300">
                &nbsp;
                <Link to={"/signup"}>Create account</Link>
              </span>
            </p>
            <div className="divider m-0 py-4">OR</div>
            <div className="flex justify-center">
              <div
                onClick={handleGoogleSubmit}
                className=" w-1/2 md:w-8/12 mt-3 .mx-auto btn btn-outline hover:text-info"
              >
                <div className="flex items-center">
                  <p>Signin with </p>
                  <FaGoogle className="ml-2" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
