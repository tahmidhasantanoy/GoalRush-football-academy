import { FaCaretRight } from "react-icons/fa";
import useTopInstrctor from "../../../Hooks/useTopInstrctor";
import { Link } from "react-router-dom";

const TopInstructors = () => {
  const [topInstructorData] = useTopInstrctor();
  // console.log(topInstructorData);

  if (!Array.isArray(topInstructorData)) {
    return (
      <>
        <div>
          <div className="flex items-center justify-center pt-20">
            <p>Loading &nbsp;</p>
            <span className="loading loading-dots loading-xs text-yellow-400"></span>
            <span className="loading loading-dots loading-sm text-yellow-400"></span>
            <span className="loading loading-dots loading-md text-yellow-400"></span>
            <span className="loading loading-dots loading-lg text-yellow-400"></span>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="mx-auto my-6">
      <h3 className="text-black text-center font-bold text-3xl md:text-4xl py-8 ">
        Our top Instructors!
      </h3>
      <div className=" flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 sm:gap-4 md:gap-4 lg:gap-8 mb-4 justify-center mx-auto m-2 lg:m-8">
          {topInstructorData.slice(0, 3).map((instructor, idx) => (
            <div
              key={idx}
              className="w-72 lg:w-96 bg-base-300 hover:bg-white hover:border-[.8px] hover:border-cyan-500 rounded-lg hover:scale-95 transition-all duration-500 mb-6"
            >
              <div className="flex-col">
                <div className="bg-[#d4dbf8] mx-4 my-3 rounded-2xl">
                  <figure className="md:px-5 lg:px-10 md:py-2 lg:py-5 .pt-10">
                    <img
                      src={instructor.image}
                      alt="instructor image"
                      className="object-cover w-[350px] h-[200px] rounded-xl sm:shrink-0 lg:shrink-1 .md:h-[200px] lg: .md:w-[200px]"
                    />
                  </figure>
                  <h1 className="text-2xl md:text-3xl text-center font-bold">
                    GoalRush Trainer!
                  </h1>
                  <div>&nbsp;</div>
                </div>
                <div className="card-body text-start">
                  <div className="flex items-center mb-1 hover:font-mono duration-500 transition-all hover:scale-105">
                    <FaCaretRight className="pr-2" />
                    <p className="">Name : {instructor.name}</p>
                  </div>
                  <div className="flex items-center mb-1 ">
                    <FaCaretRight className="pr-2" />
                    <p className="">Email : {instructor.email}</p>
                  </div>
                  {/* <button className="btn-info normal-case">See Classes</button> */}
                  <Link to={`/instructor-all-class/${instructor?.email}`}>
                    <button className="btn-info normal-case w-full">
                      see classes
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopInstructors;
