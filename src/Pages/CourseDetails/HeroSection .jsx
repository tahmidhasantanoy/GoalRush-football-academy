import { Link } from "react-router-dom";
import TitlePage from "../../TitlePage/TitlePage";

const HeroSection = () => (
  <div className="bg-gradient-to-b from-blue-100 to-indigo-700 text-white py-16 px-4 sm:py-28 sm:px-8 rounded-b-3xl">
    <TitlePage title={"Details"}></TitlePage>
    <div className="container mx-auto text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        GoalRush Football Academy
      </h1>
      <p className="text-lg sm:text-xl mb-6">
        Train with top coaches and elevate your football skills to the next
        level. Our academy offers comprehensive training programs, from basic
        techniques to advanced strategies, all designed to prepare you for
        competitive play.
      </p>
      <div>
        <Link to={`/allclasses`}>
          <button className="btn-square btn-md bg-white w-2/3 sm:w-1/6 text-blue-800 normal-case">
            Enroll Now
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default HeroSection;
