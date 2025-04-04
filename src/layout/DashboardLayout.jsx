import React from "react";
import DashboardNav from "../components/DashboardNav";
import DashboardSideNav from "../components/DashboardSideNav";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { BsArrowRightShort } from "react-icons/bs";


const DashboardLayout = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn bg-green-600 text-2xl mb-1 text-white drawer-button lg:hidden"
          >
           <BsArrowRightShort />
          </label>
          {/* Drawer content */}
          <div>
            <DashboardNav></DashboardNav>
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-blue-700 text-white min-h-full w-80 p-4">
            {/* Sidebar content here */}
          <DashboardSideNav></DashboardSideNav>
          </ul>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default DashboardLayout;
