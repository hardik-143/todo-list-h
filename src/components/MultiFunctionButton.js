import React from "react";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import {  BsFillTrashFill } from "react-icons/bs";
import { useAppContext } from "../AppContext";
import useWindowDimensions from "../hooks/useWindowdimensions";

const MultiFunctionButton = () => {
  const { width } = useWindowDimensions();
  const { deleteNoteFunc, pathURL, restoreNoteFunc, archiveNoteFunc } =
    useAppContext();
  if (pathURL === "/trash") {
    return (
      <button
        className={`button danger MultiFunctionButton ${width <= 350 ? "square" : ""} `}
        onClick={() => restoreNoteFunc(0, true)}
      >
        {
          width > 350 ? (
            "restore" 
          ) : (
            <BiArchiveIn />
          )
        }
      </button>
    );
  } else if (pathURL === "/archive") {
    return (
      <button
        className="button danger MultiFunctionButton"
        onClick={() => archiveNoteFunc(0, true, true)}
      >
        {
          width > 350 ? (
            "unarchive" 
          ) : (
            <BiArchiveOut />
          )
        }
      </button>
    );
  } else {
    return (
      <>
        <button
          className="button danger MultiFunctionButton"
          onClick={() => deleteNoteFunc(0, true)}
        >
           {
          width > 350 ? (
            "delete" 
          ) : (
            <BsFillTrashFill />
          )
        }
        </button>
        <button
          className="button danger MultiFunctionButton"
          onClick={() => archiveNoteFunc(0, false, true)}
        >
         {
          width > 350 ? (
            "archive" 
          ) : (
            <BiArchiveIn />
          )
        }
        </button>
      </>
    );
  }
};

export default MultiFunctionButton;
