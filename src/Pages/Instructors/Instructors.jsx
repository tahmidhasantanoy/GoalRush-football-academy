import { useState } from "react";
import useInstructorCollection from "../../Hooks/useInstructorCollection";
import { FaFacebookF, FaSearch } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import TitlePage from "../../TitlePage/TitlePage";

const Instructors = () => {
  const [instructors, refetch] = useInstructorCollection();
  const [filterItem, setFilterItem] = useState("");
  console.log(instructors);

  const searchItems = instructors?.filter(
    (instructor) =>
      !filterItem ||
      instructor?.name?.toLowerCase().includes(filterItem.toLowerCase())
  );

  const handleClear = () => setFilterItem("");

  if (!Array.isArray(instructors)) {
    return (
      <div className="flex items-center justify-center pt-20">
        <p>Loading &nbsp;</p>
        <span className="loading loading-dots loading-xs text-yellow-400"></span>
        <span className="loading loading-dots loading-sm text-yellow-400"></span>
        <span className="loading loading-dots loading-md text-yellow-400"></span>
        <span className="loading loading-dots loading-lg text-yellow-400"></span>
      </div>
    );
  }
  return (
    <div className="mt-28 my-12">
      <div className="flex justify-center items-center m-0 p-0">
        <TitlePage title={"All Instructor"}></TitlePage>
        <div className="relative w-2/5">
          <input
            value={filterItem}
            onChange={(e) => setFilterItem(e.target.value)}
            className="w-full py-3 px-4 pl-10 border border-gray-300 rounded-3xl shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            type="text"
            placeholder="Search for classes..."
          />
          {filterItem && (
            <p className="text-center font-bold">
              Search for : <span className="text-error">{filterItem}</span>
            </p>
          )}
          <button className="absolute btn-outline left-0 top-[8px] px-4 flex items-cente text-white rounded-l-lg hover:bg-white hover:bg-opacity-10 hover:shadow-none focus:outline-none transition-all duration-300">
            <FaSearch className="w-4 h-8 btn-outline hover:btn-outline hover:bg-transparent transition-all duration-300" />
          </button>

          {/* new */}
          {filterItem && (
            <button
              onClick={handleClear}
              className="absolute right-2 top-2 btn-outline hover:rounded-full text-gray-500 hover:text-black hover:bg-white focus:outline-none transition-all duration-300"
            >
              <IoMdClose className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 py-10 gap-2 md:gap-6">
        {searchItems.map((instructor) => (
          <div key={instructor._id} className="group">
            <div className="card w-80 bg-base-300 shadow-xl mx-auto flex flex-row">
              <div>
                <figure className="pl-10 pr-4 pt-10">
                  <img
                    src={instructor?.image}
                    alt="Instructor image"
                    className="object-cover w-[350px] h-[200px] rounded-xl"
                  />
                </figure>
                <div className=".card-body flex flex-col items-center text-center py-6 pl-10 pr-4">
                  <h2 className="card-title">{instructor?.name}</h2>
                  <p>{instructor?.email}</p>
                  <div className="card-actions">
                    <Link to={`/instructor-all-class/${instructor?.email}`}>
                      <button className="btn btn-info btn-sm mt-4 ">
                        see classes
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity space-y-2 p-2">
                <FaFacebookF className="hover:scale-105 hover:text-info" />
                <FaYoutube className="hover:scale-105 hover:text-info" />
                <FaTwitter className="hover:scale-105 hover:text-info" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
