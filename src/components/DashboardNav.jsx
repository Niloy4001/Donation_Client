import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context api/AuthProvider";

const DashboardNav = () => {
  const {user, logOut } = useContext(AuthContext);
  return (
    <div className="bg-blue-600 text-white">
      <div className="navbar  shadow-sm">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-sm  bg-green-600 border-none text-white">
            Go to Home
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 ">
            {user ? (
              <>
                <li>
                  <button className="btn btn-sm  bg-green-600 border-none text-white" onClick={() => logOut()}>Log out</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className="btn btn-sm  bg-green-600 border-none text-white" to={"/login"}>Log In</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
