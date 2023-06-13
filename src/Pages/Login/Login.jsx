import React from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    login(data.email, data.password)
      .then((res) => {
        const user = res.user;
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
                placeholder="email"
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
              <button className="btn btn-primary w-full">Login</button>
            </div>
            <p className="text-center mt-5">
              Don't have an acoount? 
              <span>
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
