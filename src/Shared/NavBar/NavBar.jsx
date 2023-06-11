import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";

const NavBar = () => {
  const { user, logout } = useAuth();
  // console.log(user.photoURL);


  const [isAdmin] = useAdmin()
  console.log(isAdmin);

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
        <Link>Instructor</Link>
      </li>
      <li>
        <Link>Classes</Link>
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
      <div className="navbar fixed z-10  bg-black bg-opacity-20 max-w-screen-xl text-white font-semibold">
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
          <a className="btn btn-ghost normal-case text-xl ">GoalRush</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-20 rounded-full">
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
            <div>
              <Link to={"/login"}>
                <button>Login</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
