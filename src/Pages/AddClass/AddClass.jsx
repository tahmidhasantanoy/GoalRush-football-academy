import React from "react";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import TitlePage from "../../TitlePage/TitlePage";

//TODO : only instructor see this
const AddClass = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  // console.log(user);

  const img_hosting_token = import.meta.env.VITE_Image_Hosting_Token;

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    // console.log(data.file[0]);
    // console.log(data);

    //Hosting image yo imgbb
    if (data.file[0]) {
      const formData = new FormData();
      formData.append("image", data.file[0]);

      fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgRes) => {
          if (imgRes.success) {
            // console.log(imgRes.data.display_url);
            const imgURL = imgRes.data.display_url;
            const {
              classname,
              instructorEmail,
              instructorName,
              availableSeats,
              price,
            } = data;

            const newClassData = {
              classname,
              instructorName,
              instructorEmail,
              availableSeats: parseInt(availableSeats),
              price: parseFloat(price),
              image: imgURL,
              status: "pending",
            };

            // console.log(newClassData);

            axiosSecure.post("/all-class", newClassData).then((res) => {
              if (res.data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `New class is added`,
                  showConfirmButton: false,
                  timer: 1500,
                });
                reset();
              }
            });
          }
        })
        .catch((err) => console.log(err.message));
    }
  };

  if (loading) {
    return (
      <>
        <div className="flex">
          <span className="loading loading-dots loading-xs text-yellow-400"></span>
          <span className="loading loading-dots loading-sm text-yellow-400"></span>
          <span className="loading loading-dots loading-md text-yellow-400"></span>
          <span className="loading loading-dots loading-lg text-yellow-400"></span>
        </div>
      </>
    );
  }

  return (
    <div className="py-10 px-10 md:px-20 lg:px-20">
      {/* new  */}
      <TitlePage title={"Add Class | Dashboard"} />
      <p className="text-4xl text-black text-center mt-10 .border-b-2">
        Add a class {user?.displayName}{" "}
      </p>
      <hr className="" />
      <div className="flex min-h-screen bg-gray-100">
        <div className="m-auto max-w-lg w-full px-0 md:px-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
              type="button"
              className="relative w-full flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-900 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#FFFFFF"
              >
                <g>
                  <rect fill="none" height="24" width="24"></rect>
                </g>
                <g>
                  <g>
                    <path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"></path>
                  </g>
                </g>
              </svg>
              <span className="pl-2 mx-1">Create new class here</span>
            </button>

            <div className="mt-5 bg-white rounded-lg shadow">
              <div className="flex">
                <div className="flex-1 py-5 pl-5 overflow-hidden">
                  <svg
                    className="inline align-text-top mb-6"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g>
                      <path
                        d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z"
                        fill="none"
                      ></path>
                      <path d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z"></path>
                      <circle cx="7.04807" cy="6.97256" r="2.5"></circle>
                    </g>
                  </svg>
                  <h1 className="inline text-2xl font-semibold leading-none">
                    Trainer
                  </h1>
                </div>
              </div>
              <div className="px-2 md:px-5 lg:px-5 pb-5">
                {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Class name
                </label> */}
                <input
                  {...register("classname")}
                  type="text"
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  placeholder="Enter the className name"
                  required
                />
                {/*  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Instructor name
                </label> */}
                <input
                  {...register("instructorName")}
                  type="text"
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  placeholder="Enter the className name"
                  required
                  defaultValue={user?.displayName}
                  readOnly
                />
                {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Instructor email
                </label> */}
                <input
                  {...register("instructorEmail")}
                  type="email"
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  placeholder="goalrush@gmail.com"
                  required
                  defaultValue={user?.email}
                  readOnly
                />
                <div>
                  <label className="label">
                    <span className="text-black font-semibold">
                      Choose image for className :
                    </span>
                  </label>
                  <input
                    {...register("file", { required: true })}
                    type="file"
                    className="file-input file-input-bordered .max-w-xs text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  />
                </div>
                <div className="flex flex-wrap -mx-2">
                  <div className="w-1/2 px-2">
                    {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Available seats
                    </label> */}
                    <input
                      {...register("availableSeats")}
                      type="number"
                      className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      placeholder="Enter seat number"
                      required
                    />
                  </div>
                  <div className="w-1/2 px-2">
                    {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Price
                    </label> */}
                    <input
                      {...register("price")}
                      type="number"
                      className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      placeholder="Enter className price"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center pt-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-black bg-gray-300 border-none rounded-md focus:ring-transparent"
                  />
                  <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 pb-5 md:pb-5">
                    I agree with the{" "}
                    <a
                      href=""
                      className="text-blue-600 hover:underline dark:text-blue-500"
                    >
                      terms and conditions
                    </a>
                    .
                  </label>
                </div>
              </div>

              <hr className="mt-4" />
              <div className="flex flex-row-reverse p-3 space-x-3 space-x-reverse">
                {/*  <button
                  type="button"
                  className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900 transition duration-300 transform active:scale-95 ease-in-out"
                > */}
                <button
                  type="submit" /* submit */
                  className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900 transition duration-300 transform active:scale-95 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#FFFFFF"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path
                      d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                      opacity=".3"
                    ></path>
                    <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V8l-6-5zm0 16H5V5h11.17L19 7.83V19zm-7-2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm-7-7h9V6H6v4z"></path>
                  </svg>
                  <span className="pl-2 mx-1">Create</span>
                </button>
                <button
                  type="button"
                  className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-700 transition duration-300 transform active:scale-95 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#FFFFFF"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13H7v-2h10v2z"></path>
                  </svg>
                  <span className="pl-2 mx-1">Cancel</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* new */}
    </div>
  );
};

export default AddClass;
