import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import TitlePage from "../../../../TitlePage/TitlePage";

const UpdateClass = () => {
  // const [id,setId] = useState("")
  const classData = useLoaderData();
  console.log(classData);

  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const {
    availableSeats,
    instructorName,
    instructorEmail,
    classname,
    price,
    image,
  } = classData;

  console.log(image);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const img_hosting_token = import.meta.env.VITE_Image_Hosting_Token;

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    console.log(data);

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
            console.log(imgRes.data.display_url);
            const imgURL = imgRes.data.display_url;
            const {
              _id,
              classname,
              instructorEmail,
              instructorName,
              availableSeats,
              price,
            } = data;

            console.log(
              classname,
              instructorEmail,
              instructorName,
              availableSeats,
              price
            ); //undefiend

            const updateClassData = {
              classname,
              instructorName,
              instructorEmail,
              availableSeats: parseInt(availableSeats),
              price: parseFloat(price),
              image: imgURL,
              status: "pending",
            };

            axiosSecure
              .put(`/all-class/${classData._id}`, updateClassData)
              .then((res) => {
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

  return (
    <>
      {/* new */}
      <div className="flex min-h-screen bg-gray-100 px-10">
        <TitlePage title={"Update Class | Dashboard"}></TitlePage>
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
              <span className="pl-2 mx-1">Update your previous class</span>
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
                  defaultValue={classname}
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
                  defaultValue={instructorName}
                  type="text"
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  placeholder="Enter the instructor name"
                  required
                  readOnly
                />
                {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Instructor email
                </label> */}
                <input
                  {...register("instructorEmail")}
                  defaultValue={instructorEmail}
                  type="email"
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  placeholder="goalrush@gmail.com"
                  required
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
                      defaultValue={availableSeats}
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
                      defaultValue={price}
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
                  type="button" /* submit */
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
                  <span className="pl-2 mx-1">Update</span>
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
                  <span className="pl-2 mx-1">save</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* new */}
      <div className="p-20">
        <p className="text-center text-white text-2xl">Update {classname}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Class name
            </label>
            <input
              defaultValue={classname}
              {...register("classname")}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter the class name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Instructor name
            </label>
            <input
              {...register("instructorName")}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ensure istructor name"
              required
              // defaultValue={user?.displayName}
              // readOnly
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Instructor email
            </label>
            <input
              {...register("instructorEmail")}
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ensure instructor email"
              required
              // defaultValue={user?.email}
              // readOnly
            />
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Available seats
              </label>
              <input
                defaultValue={availableSeats}
                {...register("availableSeats")}
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter available seat"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Price
              </label>
              <input
                defaultValue={price}
                {...register("price")}
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter class price"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="text-white">Choose class image</span>
              </label>
              <input
                //   defaultValue={image}
                {...register("file", { required: true })}
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateClass;
