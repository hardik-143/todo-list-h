import React from "react";
import { useAppContext } from "../AppContext";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { BiArchiveIn, BiTask } from "react-icons/bi";
import useWindowDimensions from "../hooks/useWindowdimensions";
const Sidebar = () => {
  const { width } = useWindowDimensions();
  const { pathURL } = useAppContext();

  const { sideBarOpen, setsideBarOpen, setselectedTask } = useAppContext();
  const pagechange = () => {
    if(width <= 991) {
      setsideBarOpen(false);
    }
    setselectedTask([]);
  };
  return (
    <div className={`sidebar ${sideBarOpen ? "open" : ""}`}>
      <div className="inner">
        <Link to={"/"} onClick={() => pagechange()}>
          <button className={`s-btn ${pathURL === "/" ? "active" : ""}`}>
            <BiTask />
            <span>Tasks</span>
          </button>
        </Link>
        <Link to={"/trash"} onClick={() => pagechange()}>
          <button className={`s-btn ${pathURL === "/trash" ? "active" : ""}`}>
            <FaRegTrashAlt />
            <span>Trash</span>
          </button>
        </Link>
        <Link to={"/archive"} onClick={() => pagechange()}>
          <button className={`s-btn ${pathURL === "/archive" ? "active" : ""}`}>
            <BiArchiveIn />
            <span>Archive</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
