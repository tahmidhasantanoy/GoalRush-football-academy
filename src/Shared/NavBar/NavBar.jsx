import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import useGeneralUser from "../../Hooks/UseGeneralUser";

const NavBar = () => {
  const { user, logout } = useAuth();

  const [isGeneralUser] = useGeneralUser();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  console.log(isAdmin);
  console.log(isGeneralUser);
  console.log(isInstructor);

  const handleLogout = () => {
    logout()
      .then()
      .catch((err) => console.log(err.message));
  };

  const menu = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link to={"/instructors"}>Instructor</Link>
      </li>
      <li>
        <Link to={"/allclasses"}>Classes</Link>
      </li>
      {user && (
        <li>
          <Link to={"dashboard"}>DashBoard</Link>
        </li>
      )}
    </>
  );
  return (
    // TODO : header will be attractive menu
    <>
      <div className="navbar fixed z-10  bg-black bg-opacity-20 text-white font-semibold p-0 w-11/12">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <p className="btn btn-ghost normal-case text-xl ">
            <Link to={"/"}>GoalRush</Link>
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
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
                <button className="btn-info">Login</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
