import React, { useContext } from "react";
import registrationImg from "../../../public/Authenticaion/Reg-pic.jpg";
import "./SignUp.css";
import { useForm } from "react-hook-form";
import TitlePage from "../../TitlePage/TitlePage";
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

  //TODO : .inputborder color,btn color,btn size
  return (
    <div className=".hero flex justify-center min-h-min reg-bg">
      <TitlePage title={"Registration"}></TitlePage>
      <div className="hero-content flex-col lg:flex-row-reverse .my-14">
        {" "}
        {/*  */}
        <div className=".text-center w-full lg:text-left">
          <img
            className="h-[580px] rounded-md"
            src={registrationImg}
            alt="Image"
          />
        </div>
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
  );
};

export default SignUp;
