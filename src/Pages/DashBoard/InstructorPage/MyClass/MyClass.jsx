import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import useSpecificClass from "../../../../Hooks/useSpecificClass";
import { Link } from "react-router-dom";
import { FaCaretRight, FaSearch } from "react-icons/fa";
import TitlePage from "../../../../TitlePage/TitlePage";
import SeeMoreButton from "../../../../components/ui/SeeMoreButton/SeeMoreButton";
import { IoMdClose } from "react-icons/io";

const MyClass = () => {
  const [specificInstrucClass] = useSpecificClass();
  const [filterItem, setFilterItem] = useState("");
  const [visibleItem, setVisibleItem] = useState(6);
  console.log(specificInstrucClass);

  const { user } = useAuth();
  const [insClassData, setInsData] = useState([]);
  // console.log(user?.email);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://goal-rush-server.vercel.app/all-class/instructor?instructorEmail=${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => setInsData(data))
        .catch((err) => console.log(err.message));
    }
  }, [user?.email]);

  const searchItems = insClassData?.filter(
    (insSingleClass) =>
      !filterItem ||
      insSingleClass?.classname
        ?.toLowerCase()
        .includes(filterItem.toLowerCase())
  );

  const handleClear = () => setFilterItem("");

  const handleSeeMore = () => {
    setVisibleItem((prevVisibleClass) => prevVisibleClass + 6);
  };

  console.log(insClassData);

  return (
    <div className="my-20">
      <TitlePage title={"My Class | Dashboard"} />
      <p className="text-3xl md:text-4xl text-black text-center my-4">
        {user?.displayName}'s all classes.
      </p>
      <hr className="w-2/4 mx-auto" />
      <div>
        <div className="flex justify-center items-center m-0 p-0">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-2 lg:gap-4 my-10">
          {searchItems.slice(0, visibleItem).map((data) => (
            <div
              key={data._id}
              className="card w-80 md:w-72 lg:w-72 xl:w-96 bg-neutral text-neutral-content mx-3 my-4 group"
            >
              <div className="card-body items-center text-center">
                <h2 className="card-title text-white border-b-2">
                  {data.classname}
                </h2>
                <hr />
                <div className="mr-6 lg:mr-8 xl:mr-20 justify-start my-2 lg:my-5">
                  <div className="flex items-center mb-1">
                    <FaCaretRight className="pr-2" />
                    <p className="text-start">Asking price : ${data.price}</p>
                  </div>
                  <div className="flex items-center mb-1">
                    <FaCaretRight className="pr-2" />
                    <p className="text-start">
                      Available Seats : {data.availableSeats}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <FaCaretRight className="pr-2" />
                    <p className="text-start">Status : {data.status}</p>
                  </div>
                </div>

                <div className="card-actions justify-end opacity-0 group-hover:opacity-100 duration-500 transition-opacity">
                  <button className="btn-primary btn-md">
                    <Link to={`/dashboard/updateClass/${data._id}`}>
                      Update
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {visibleItem < insClassData.length && (
        <SeeMoreButton onClick={handleSeeMore}>See More</SeeMoreButton>
      )}
    </div>
  );
};

export default MyClass;
