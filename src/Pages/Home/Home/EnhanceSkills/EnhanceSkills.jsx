import React, { useEffect, useState } from "react";
import skillImg from "../../../../../public/EnhanceSkills/223.png";
import { Link } from "react-router-dom";

const EnhanceSkills = () => {
  const [time, setTime] = useState();

  const timeFunction = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const interval = setInterval(timeFunction, 1000);

    return () => clearInterval(interval);
  }, [time]);

  if (time == undefined) return;

  const day = String(time.getDay()).padStart(2, 0);
  const hour = String(time.getHours()).padStart(2, 0);
  const minite = String(time.getMinutes()).padStart(2, 0);
  const seconds = String(time.getSeconds()).padStart(2, 0);

  return (
    <div className="bg-black flex sm:flex-col-reverse lg:flex-row justify-evenly items-center text-white rounded-lg p-4 lg:p-0">
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-left">
            Enhance Your <br />
            Football Skills.
          </h1>
        </div>
        <div className="flex flex-row space-x-6 text-left">
          <div className="flex flex-col">
            <p className="">Day</p>
            <p className="text-2xl">{day}</p>
          </div>
          <div className="flex flex-col">
            <p>Hours</p>
            <p className="text-2xl">{hour}</p>
          </div>
          <div className="flex flex-col">
            <p>Mins</p>
            <p className="text-2xl">{minite}</p>
          </div>
          <div className="flex flex-col">
            <p>Seconds</p>
            <p className="text-2xl">{seconds}</p>
          </div>
        </div>
        <div className="flex sm:justify-center lg:justify-start">
          <Link to={`/allclasses`}>
            <button className="btn btn-md bg-green-600 hover:bg-green-700 normal-case text-white px-4 py-2 rounded-lg w-auto">
              Enroll now
            </button>
          </Link>
        </div>
      </div>
      <div>
        <img className="w-[450px] p-0 m-8" src={skillImg} alt="Image" />
      </div>
    </div>
  );
};

export default EnhanceSkills;
