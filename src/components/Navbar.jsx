import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context api/AuthProvider";
import useRole from "../hooks/useRole";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { role } = useRole();

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/events"}>Events</NavLink>
      </li>
      <li>
        <NavLink to={"/donate"}>Donate</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
      {role == "Donor" && (
        <li>
          <NavLink to={"/dashboard/myDonations"}>Dashboard</NavLink>
        </li>
      )}
      {role == "Volunteer" && (
        <li>
          <NavLink to={"/dashboard/avaiableEvents"}>Dashboard</NavLink>
        </li>
      )}
      {role == "Admin" && (
        <li>
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
        </li>
      )}
      {user && (
        <>
          <li>
            <NavLink to={"/profile"}>My Profile</NavLink>
          </li>
        </>
      )}
      {/* {user ? (
        <>
          <li>
            <button onClick={() => logOut()}>Log out</button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
          <li>
            <NavLink to={"/login"}>Log In</NavLink>
          </li>
        </>
      )} */}
    </>
  );

  return (
    <div className=" bg-blue-600 text-white">
      <div className="navbar  shadow-sm w-[90%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-blue-600 text-white rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             {links}
            </ul>
          </div>
         <Link to={"/"} className="text-2xl font-bold">Donate</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end">
        {user ? (
        <>
          <>
            <button className="btn btn-sm bg-green-600 text-white font-bold border-none" onClick={() => logOut()}>Log out</button>
          </>
        </>
      ) : (
        <div className="flex items-center gap-2">
          <>
            <Link className="btn btn-sm bg-green-600 text-white font-bold border-none" to={"/register"}>Register</Link>
          </>
          <>
            <Link className="btn btn-sm bg-green-600 text-white font-bold border-none" to={"/login"}>Log In</Link>
          </>
        </div>
      )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
