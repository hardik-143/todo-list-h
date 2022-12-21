import React from "react";
import { useAppContext } from "../AppContext";
import "../scss/navbar.scss";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const { sideBarOpen, setsideBarOpen } = useAppContext();
  return (
    <nav>
      <div className="left">
        <button className="menu-btn">
          <div
            id="menu"
            className={`${sideBarOpen ? "open" : ""}`}
            onClick={() => setsideBarOpen(!sideBarOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <Sidebar />
    </nav>
  );
};

export default Navbar;
