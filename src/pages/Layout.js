import React from "react";
import { Outlet } from "react-router-dom";
import { useAppContext } from "../AppContext";
import Sidebar from "../components/Sidebar";
import useWindowDimensions from "../hooks/useWindowdimensions";
const Layout = () => {
  const { sideBarOpen, setsideBarOpen } = useAppContext();
  const { width } = useWindowDimensions();
  return (
    <div className="app">
      {/* <Sidebar /> */}
      <div
        className={`main-wrapper ${
          sideBarOpen && width > 992 ? "sidebarOpened  " : ""
        } ${width > 992 ? "padding-left-55" : ""}`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
