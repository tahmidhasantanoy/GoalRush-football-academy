import React from "react";
import { Link, useRouteError } from "react-router-dom";
import logo from "../../../public/icons/logo.png";
import "./Error.css"

const Error = () => {
  const { error } = useRouteError();
  return (
    <div className=" rounded-lg border-red-100 err-bg">
      <section className="flex items-center h-screen p-16   text-gray-900">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className=".max-w-md text-center">
            <div className="mb-8">
              {/* <span className="sr-only w-2/4">Error</span> */}

              <img className="w-8/12" src={logo} alt="" />
            </div>
            <div>
              <p className="text-2xl  font-semibold md:text-3xl text-error mb-8">
                <div className="flex items-center justify-center">
                  Sorry ...
                  <div className="swap-off">😭</div>
                  <br />
                </div>
                {error?.message}
              </p>
              <Link
                to="/"
                className="btn hover:btn-wide hover:text-white duration-1000 rounded-lg"
              >
                Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
