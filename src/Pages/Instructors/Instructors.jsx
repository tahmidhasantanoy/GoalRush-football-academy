import useInstructorCollection from "../../Hooks/useInstructorCollection";

const Instructors = () => {
  const [instructors, refetch] = useInstructorCollection();

  if (!Array.isArray(instructors)) {
    return <p>Loading...</p>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-20">
      {instructors.map((instructor) => (
        <div key={instructor._id}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={instructor?.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{instructor?.name}</h2>
              <p>{instructor?.email}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instructors;
