import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import useGeneralUser from "../../Hooks/UseGeneralUser";
import logo from "../../../public/Logo/logo.png";

const NavBar = () => {
  const { user, logout } = useAuth();

  const [isGeneralUser] = useGeneralUser();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  console.log(isAdmin);
  console.log(isInstructor);
  // console.log(isGeneralUser);

  const handleLogout = () => {
    logout()
      .then()
      .catch((err) => console.log(err.message));
  };

  const menu = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-cyan-400 hover:text-cyan-600 border-b-2 border-red-500 transition-all duration-500"
              : "text-white font-semibold hover:text-cyan-300 text-[16px]"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructors"
          className={({ isActive }) =>
            isActive
              ? "text-cyan-400 hover:text-cyan-600 border-b-2 border-red-500 transition-all duration-500"
              : "text-white font-semibold hover:text-cyan-300 text-[16px]"
          }
        >
          Trainer
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allclasses"
          className={({ isActive }) =>
            isActive
              ? "text-cyan-400 hover:text-cyan-600 border-b-2 border-red-500 transition-all duration-500"
              : "text-white font-semibold hover:text-cyan-400 text-[16px]"
          }
        >
          Classes
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 hover:text-cyan-600 border-b-2 border-red-500 transition-all duration-500"
                : "text-white font-semibold hover:text-cyan-400 text-[16px]"
            }
          >
            DashBoard
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    // TODO : active route will  added
    <div className="flex justify-center">
      <div className="navbar fixed z-10 bg-black bg-opacity-60 text-black font-semibold p-0 w-11/12 rounded-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu .menu-compact dropdown-content mt-3 p-2 shadow .bg-base-100 .rounded-box .w-52"
            >
              {menu}
            </ul>
          </div>
          <div className="btn btn-ghost normal-case text-xl ">
            <Link to={"/"}>
              <img
                className="w-12 h-12 -rotate-180 hover:scale-125 transition-all duration-500"
                src={logo}
              ></img>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=".menu space-x-6 menu-horizontal text-white px-1">
            {menu}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end pr-4">
              <label tabIndex={0} className="btn btn-info btn-circle avatar">
                <div className=" rounded-full">
                  <img title={user?.displayName} src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>

                <li onClick={handleLogout}>
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          ) : (
            <div className="pr-4">
              <Link to={"/login"}>
                <button className="btn-info font-normal">Login</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
