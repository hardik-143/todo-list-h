import React from "react";
import { useAppContext } from "../AppContext";
import "../scss/sidebar.scss";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { BiArchiveIn, BiTask } from "react-icons/bi";
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
          <Link to={"/"} onClick={()=>setsideBarOpen(false)}>
            <button className="s-btn">
              <BiTask />
              <span>Tasks</span>
            </button>
          </Link>
          <Link to={"/trash"} onClick={()=>setsideBarOpen(false)}>
            <button className="s-btn">
              <FaRegTrashAlt />
              <span>Trash</span>
            </button>
          </Link>
          <Link to={"/archive"} onClick={()=>setsideBarOpen(false)}>
            <button className="s-btn">
              <BiArchiveIn />
              <span>Archive</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
