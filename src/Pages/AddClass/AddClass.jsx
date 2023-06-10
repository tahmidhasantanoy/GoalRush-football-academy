import React from "react";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

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
  console.log(user);

  const img_hosting_token = import.meta.env.VITE_Image_Hosting_Token;

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    console.log(data.file[0]);
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
            };

            axiosSecure.post("/all-class", newClassData).then((res) => {
              if (res.data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `New class is added`,
                  showConfirmButton: false,
                  timer: 1500,
                });
                // reset();
              }
            });
          }
        })
        .catch((err) => console.log(err.message));
    }
  };

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  return (
    <div className="p-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Class name
          </label>
          <input
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
            placeholder="Enter the class name"
            required
            defaultValue={user?.displayName}
            // defaultValue={user?.DisplayName}
            readOnly
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
            placeholder="goalrush@gmail.com"
            required
            defaultValue={user?.email}
            // defaultValue={user?.DisplayName}
            readOnly
          />
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Available seats
            </label>
            <input
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddClass;
