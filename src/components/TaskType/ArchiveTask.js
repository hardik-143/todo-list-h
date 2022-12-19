import React from "react";
import { BiArchiveOut } from "react-icons/bi";
import { useAppContext } from "../../AppContext";

const ArchiveTask = ({ data }) => {
  const { id, task, color, isArchived } = data;
  const { getStr, archiveNoteFunc } = useAppContext();

  return (
    <div
      className="singleTask"
      style={{
        background: color,
      }}
    >
      <p
        className="taskName"
        dangerouslySetInnerHTML={{ __html: getStr(task) }}
      ></p>
      <div className="taskFunctions alwaysOpen ">
        <div className="btns">
          <button
            className="archiveTask tf-btn"
            onClick={() => archiveNoteFunc(id, isArchived)}
          >
            <BiArchiveOut />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArchiveTask;
