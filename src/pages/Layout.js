import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const Layout = () => {
  return (
    <div className="main-wrapper">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
