import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { Navbar } from "../components/navbar/Navbar";

export const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar - Hidden on small screens, visible on large screens */}
      <div className="hidden lg:block lg:max-w-[369px] w-full h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 p-4 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
