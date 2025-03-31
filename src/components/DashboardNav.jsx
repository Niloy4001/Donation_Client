import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context api/AuthProvider";

const DashboardNav = () => {
  const {user, logOut } = useContext(AuthContext);
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-xl">
            Go to Home
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 ">
            {user ? (
              <>
                <li>
                  <button onClick={() => logOut()}>Log out</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to={"/login"}>Log In</NavLink>
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
