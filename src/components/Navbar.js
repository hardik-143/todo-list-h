import React from "react";
import { useAppContext } from "../AppContext";
import "../scss/navbar.scss";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const { sideBarOpen, setsideBarOpen, selectedTask,deleteNoteFunc } = useAppContext();
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
      <div className="right">
        {selectedTask.length > 0 && (
          <button className="button danger" onClick={()=>deleteNoteFunc(0,true)}>delete</button>
        )}
      </div>
      <Sidebar />
    </nav>
  );
};

export default Navbar;
