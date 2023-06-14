import { FaCaretRight } from "react-icons/fa";
import useTopInstrctor from "../../../Hooks/useTopInstrctor";

const TopInstructors = () => {
  const [topInstructorData] = useTopInstrctor();
  console.log(topInstructorData);

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
    <div className="mx-auto my-12">
      <h3 className="text-white text-start font-bold text-4xl pt-12 ml-12">
        Our top Instructors!
      </h3>
      <div className=" flex flex-col items-center .p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center mx-auto ">
          {topInstructorData.map((instructor) => (
            <div
              key={instructor._id}
              className="card w-96 bg-base-200 shadow-xl m-8"
            >
              <figure className="px-10 pt-10">
                <img
                  src={instructor.image}
                  alt="instructor image"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body .items-center text-start">
                <div className="flex items-center mb-1">
                  <FaCaretRight className="pr-2" />
                  <p className="card-title">Name : {instructor.name}</p>
                </div>
                <div className="flex items-center mb-1">
                  <FaCaretRight className="pr-2" />
                  <p className="">Email : {instructor.email}</p>
                </div>
                {/* <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopInstructors;
