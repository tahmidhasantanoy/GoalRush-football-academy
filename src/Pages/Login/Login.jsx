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
    <>
      <div className=".hero flex justify-center min-h-min reg-bg">
        <TitlePage title={"Registration"}></TitlePage>
        <div className="hero-content flex-col lg:flex-row-reverse .my-14">
          {" "}
          {/*  */}
          {/* <div className=".text-center w-full lg:text-left">
            <img
              className="h-[580px] rounded-md"
              src={registrationImg}
              alt="Image"
            />
          </div> */}
          <div className="card w-full shadow-2xl lg:ml-16 .mr-5 py-4 px-0 my-4 md:my-6 lg:my-20 reg_body  ">
            <p className="text-center text-2xl md:text-3xl font-semibold py-6 text-white">
              Create new account.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=".card-body m-0 p-0 mx-auto"
            >
              <div className="form-control m-0 p-0">
                <label className="label m-0 p-0">
                  <span className="label-text text-black">Name</span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Enter your full name"
                  className=".input input-bordered w-full .md:w-full"
                  required
                />
              </div>
              <div className="form-control m-0 p-0">
                <label className="label m-0 p-0">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="text"
                  placeholder="abc@gmail.com"
                  className=".input input-bordered w-full .md:w-full"
                  required
                />
              </div>
              <div className="form-control m-0 p-0">
                <label className="label m-0 p-0">
                  <span className="label-text text-black">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 10,
                    pattern:
                      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                  })}
                  type="password"
                  placeholder="At least 6 characters"
                  className=".input input-bordered w-full .md:w-full"
                />
                {errors.password?.type === "required" && (
                  <p className="text-error" role="alert">
                    First name is required
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-error" role="alert">
                    Criteria not fullfill
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-error" role="alert">
                    Minimun length is 6
                  </p>
                )}
              </div>
              <div className="form-control m-0 p-0">
                {/* <label className="label m-0 p-0">
                <span className="label-text text-black">Confirm Password</span>
              </label>
              <input
                {...register("Confirm-password")}
                type="password"
                placeholder="Confirm Password"
                className=".input input-bordered w-4/5 md:w-full"
              /> */}
                <label className=".label flex justify-end m-0 p-0">
                  <a
                    href="#"
                    className="flex justify-end m-0 p-0 label-text text-red-400 link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control m-0 p-0">
                {/*  <label className="label">
                <span className="label-text text-black">Photo Url</span>
              </label>
              <input
                {...register("PhotoUrl")}
                type="url"
                placeholder="Enter your photo url"
                className=".inputinput-bordered w-4/5 md:w-full"
              /> */}
              </div>
              <div className="form-control mt-4">
                <input
                  className="btn btn-info w-1/2 md:w-full mx-auto hover:text-white normal-case"
                  type="submit"
                  value="Sign In"
                />
              </div>
              <p className="text-center">
                Already have an acoount?
                <span className="text-info hover:underline">
                  <Link to={"/login"}> Login</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
      {/* login */}
      <div className="hero min-h-screen bg-base-200 login-bg p-0 m-0">
        <TitlePage title={"Login"}></TitlePage>
        <div className="hero-content w-6/12 mx-auto p-0 m-0">
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
                  <FaGoogle className="ml-2" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
