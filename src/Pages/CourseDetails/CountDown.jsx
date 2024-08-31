import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [counter, setCounter] = useState(60); // Initial seconds value

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="my-10 space-y-6">
      <p className="flex justify-center font-bold font-mono text-2xl md:text-3xl lg:text-4xl text-center">
        Next Batch Schedule
      </p>
      <div className="flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="inline-flex flex-col items-center">
          <div className="grid grid-flow-col gap-3 sm:gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-4xl sm:text-5xl">
                <span style={{ "--value": 7 }}></span>
              </span>
              <span className="text-sm sm:text-base">days</span>
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-4xl sm:text-5xl">
                <span style={{ "--value": 10 }}></span>
              </span>
              <span className="text-sm sm:text-base">hours</span>
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-4xl sm:text-5xl">
                <span style={{ "--value": 24 }}></span>
              </span>
              <span className="text-sm sm:text-base">min</span>
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-4xl sm:text-5xl">
                <span style={{ "--value": `${counter}` }}></span>
              </span>
              <span className="text-sm sm:text-base">sec</span>
            </div>
          </div>
          <sub className="font-mono text-xl sm:text-2xl font-semibold mt-2">
            &nbsp;Day's to go
          </sub>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
