import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  FaBook,
  FaBookMedical,
  FaHistory,
  FaHome,
  FaSwatchbook,
} from "react-icons/fa";
import useGeneralUser from "../../../Hooks/UseGeneralUser";
import useInstructor from "../../../Hooks/useInstructor";
import useAdmin from "../../../Hooks/useAdmin";
import TitlePage from "../../../TitlePage/TitlePage";

const DashBoardPage = () => {
  const [isGeneralUser] = useGeneralUser();
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer lg:drawer-open">
      <TitlePage title={"Dashboard"}></TitlePage>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          // htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          // htmlFor="my-drawer-2"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 h-full bg-sky-950 pt-16 pl-12 text-white space-y-1">
          {/* Sidebar content here */}
          {isGeneralUser?.generalUser && (
            <>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "bg-[#C7FFD8] text-sky-800 btn" : ""
                  }
                >
                  <FaHome /> Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/select-classes"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#C7FFD8] text-sky-800 hover:bg-[#FFDC7F]"
                      : ""
                  }
                >
                  <FaSwatchbook /> Selected classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/enroll-class"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#C7FFD8] text-sky-800 hover:bg-[#FFDC7F]"
                      : ""
                  }
                >
                  <FaBook /> Enrolled classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/payment-history"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#C7FFD8] text-sky-800 hover:bg-[#FFDC7F]"
                      : ""
                  }
                >
                  <FaHistory /> Payment history
                </NavLink>
              </li>
            </>
          )}

          <div className="space-y-1">
            {isInstructor?.instructor && (
              <>
                <li>
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#C7FFD8] text-sky-800 hover:bg-[#FFDC7F]"
                        : ""
                    }
                  >
                    <FaHome /> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/addclass"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#C7FFD8] text-sky-800 hover:bg-[#FFDC7F]"
                        : ""
                    }
                  >
                    <FaBookMedical />
                    Add class
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/myclass"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#C7FFD8] text-sky-800 hover:bg-[#FFDC7F]"
                        : ""
                    }
                  >
                    <FaBook />
                    My class
                  </NavLink>
                </li>
              </>
            )}
          </div>

          <div>
            {isAdmin?.admin && (
              <>
                <li>
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#C7FFD8] text-sky-800 hover:bg-[#FFDC7F]"
                        : ""
                    }
                  >
                    <FaHome /> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/manage-class"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#C7FFD8] text-sky-800 hover:bg-[#FFDC7F]"
                        : ""
                    }
                  >
                    <FaSwatchbook />
                    Manage Class
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/manage-users"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#C7FFD8] text-sky-800 hover:bg-[#FFDC7F]"
                        : ""
                    }
                  >
                    <FaBook />
                    Manage Users
                  </NavLink>
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
