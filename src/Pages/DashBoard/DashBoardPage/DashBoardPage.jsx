import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaBeer,
  FaBook,
  FaBookMedical,
  FaHistory,
  FaHome,
  FaSwatchbook,
} from "react-icons/fa";
import useGeneralUser from "../../../Hooks/UseGeneralUser";
import useInstructor from "../../../Hooks/useInstructor";
import useAdmin from "../../../Hooks/useAdmin";

const DashBoardPage = () => {
  const [isGeneralUser] = useGeneralUser();
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center ">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-sky-950 .text-base-content pt-16 pl-12 text-white space-y-1">
          {/* Sidebar content here */}
          {isGeneralUser?.generalUser && (
            <>
              <li>
                <Link to={"/"}>
                  <FaHome /> Home
                </Link>
              </li>
              <li>
                <Link to={"/dashboard/select-classes"}>
                  <FaSwatchbook />
                  Selected classes
                </Link>
              </li>
              <li>
                <Link>
                  <FaBook />
                  Enrolled classes
                </Link>
              </li>
              <li>
                <Link to={"/dashboard/payment-history"}>
                  <FaHistory />
                  Payment history
                </Link>
              </li>
            </>
          )}
          <div className="space-y-1">
            {isInstructor?.instructor && (
              <>
                <li>
                  <Link to={"/"}>
                    <FaHome /> Home
                  </Link>
                </li>
                <li>
                  <Link to={"/dashboard/addclass"}>
                    <FaBookMedical />
                    Add class
                  </Link>
                </li>
                <li>
                  <Link to={"/dashboard/myclass"}>
                    <FaBook />
                    My class
                  </Link>
                </li>
              </>
            )}
          </div>

          <div>
            {isAdmin?.admin && (
              <>
                <li>
                  <Link to={"/"}>
                    <FaHome /> Home
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaSwatchbook />
                    All class
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaBook />
                    Enrolled classes
                  </Link>
                </li>
              </>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashBoardPage;
