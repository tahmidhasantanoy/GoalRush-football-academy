import React, { useContext } from "react";
import registrationImg from "../../../public/Authenticaion/Reg-pic.jpg";
import "./SignUp.css";
import { useForm } from "react-hook-form";
import TItlePage from "../../TItlePage/TItlePage";
import useAuth from "../../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, user } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((res) => {
        const user = res.user;

        //Update user profile
        updateProfile(user, {
          displayName: data.name,
          photoURL: data.PhotoUrl,
        })
          .then((res) => {
            // user info saved to DB
            const newUserData = {
              name: data.name,
              email: data.email,
              image: data.PhotoUrl,
            };
            console.log(newUserData);
            fetch("https://goal-rush-server.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(newUserData),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Sign Up is Successfull",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              })
              .catch((err) => console.log(err.message));
          })
          .catch((err) => console.log(err.message));
      })
      .catch((err) => console.log(err.message));
    reset();
  };

  //TODO : input border color,btn color,btn size
  return (
    <div className=".hero min-h-min reg-bg py-28">
      <TItlePage title={"Registration"}></TItlePage>
      <p className="text-center text-3xl font-semibold mb-3 text-white">
        Create new account.
      </p>

      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className=".text-center w-full lg:text-left">
          <img
            className=".opacity-70 h-[1190px] rounded-md"
            src={registrationImg}
            alt=""
          />
        </div>
        <div className="card w-full shadow-2xl bg-base-100 opacity-80 lg:ml-16 mr-5">
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
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="text"
                placeholder="abc@gmail.com"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
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
                className="input input-bordered"
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
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Confirm Password</span>
              </label>
              <input
                {...register("Confirm-password")}
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Photo Url</span>
              </label>
              <input
                {...register("PhotoUrl")}
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
            <div className="form-control mt-4">
              <input
                className="btn btn-info w-1/2 mx-auto hover:text-white"
                type="submit"
                value="Sign In"
              />
            </div>
            <p className="text-center mt-5">
              Already have an acoount? 
              <span className="text-info underline">
                <Link to={"/login"}> login</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
