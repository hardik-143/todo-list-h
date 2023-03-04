import React from "react";
import { useAppContext } from "../AppContext";
import "../scss/navbar.scss";
import MultiFunctionButton from "./MultiFunctionButton";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const { sideBarOpen, setsideBarOpen, selectedTask } = useAppContext();
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
          <>
            <span className="selectedCount">
              selected : <span>{selectedTask.length}</span>
            </span>
            <MultiFunctionButton />
          </>
        )}
      </div>
      <Sidebar />
    </nav>
  );
};

export default Navbar;
