import React from "react";
import { useAppContext } from "../AppContext";

const MultiFunctionButton = () => {
  const { deleteNoteFunc, pathURL, restoreNoteFunc, archiveNoteFunc } =
    useAppContext();
  if (pathURL === "/trash") {
    return (
      <button
        className="button danger"
        onClick={() => restoreNoteFunc(0, true)}
      >
        restore
      </button>
    );
  } else if (pathURL === "/archive") {
    return (
      <button
        className="button danger"
        onClick={() => archiveNoteFunc(0, true, true)}
      >
        unarchive
      </button>
    );
  } else {
    return (
      <>
        <button
          className="button danger"
          onClick={() => deleteNoteFunc(0, true)}
        >
          delete
        </button>
        <button
          className="button danger"
          onClick={() => archiveNoteFunc(0, false, true)}
        >
          archive
        </button>
      </>
    );
  }
};

export default MultiFunctionButton;
