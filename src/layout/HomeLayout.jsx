import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar, Navbar } from "../components";

function HomeLayout() {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <div className="hidden sm:block sm:w-64">
        <SideBar />
      </div>

      <div className="flex-1 flex flex-col">
        <div className="sm:hidden">
          <Navbar />
        </div>

        <div className="p-4 sm:p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
