import useInstructorCollection from "../../Hooks/useInstructorCollection";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Instructors = () => {
  const [instructors, refetch] = useInstructorCollection();

  if (!Array.isArray(instructors)) {
    return (
      <>
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
      </>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-28 gap-12">
      {instructors.map((instructor) => (
        <div key={instructor._id} className="group">
          <div className="card w-80 bg-base-300 shadow-xl mx-auto flex flex-row">
            <div>
              <figure className="pl-10 pr-4 pt-10">
                <img
                  src={instructor?.image}
                  alt="Instructor image"
                  className="rounded-xl"
                />
              </figure>
              <div className=".card-body flex flex-col items-center text-center py-6 pl-10 pr-4">
                <h2 className="card-title">{instructor?.name}</h2>
                <p>{instructor?.email}</p>
                <div className="card-actions">
                  <button className="btn btn-info btn-sm mt-4 ">
                    see classes
                  </button>
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
  );
};

export default Instructors;
