import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { FaTrashRestore } from "react-icons/fa";
import { useAppContext } from "../../AppContext";

const TrashTask = ({ data }) => {
  const { id, task, color } = data;
  const { getStr, finalDeleteFunc, restoreNoteFunc } = useAppContext();

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
          <button className="deleteTask tf-btn" onClick={() => finalDeleteFunc(id)}>
            <BsFillTrashFill />
          </button>
          <button
            className="restoreTask tf-btn"
            onClick={() => restoreNoteFunc(id)}
          >
            <FaTrashRestore />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrashTask;