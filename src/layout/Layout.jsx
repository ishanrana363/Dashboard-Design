import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { Navbar } from "../components/navbar/Navbar";

export const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar - Fixed on large screens */}
      <div className="hidden  lg:block lg:w-[280px] fixed left-0 top-0 h-full  bg-white ">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:ml-[280px]">
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 lg:left-[280px] right-0 bg-white shadow-md z-50">
          <Navbar />
        </div>

        {/* Scrollable Page Content */}
        <div className="flex-1 bg-[#ebf8ff]   overflow-auto lg:p-8 mt-[100px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
