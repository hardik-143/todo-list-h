import React from "react";
import { useAppContext } from "../AppContext";
import "../scss/sidebar.scss";
import { FaRegTrashAlt } from "react-icons/fa";
const Sidebar = () => {
  const { sideBarOpen, setsideBarOpen } = useAppContext();
  return (
    <div className="sidebar-wrapper">
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
      <div className={`sidebar ${sideBarOpen ? "open" : ""}`}>
        <div className="inner">
          <button className="s-btn">
            <FaRegTrashAlt />
            <span>Trash</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
