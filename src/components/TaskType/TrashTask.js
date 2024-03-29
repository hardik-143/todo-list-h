import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { FaTrashRestore } from "react-icons/fa";
import { useAppContext } from "../../AppContext";
import SelectTask from "../SelectTask";

const TrashTask = ({ data }) => {
  const { id, task, color, background } = data;
  const { getStr, finalDeleteFunc, restoreNoteFunc,selectedTask } = useAppContext();

  return (
    <div
    className={`singleTask ${selectedTask.includes(id) ? "selected" : ""}`}
      style={{
        background: background ? background : "#fff",
        color: color ? color : "#000",
      }}
    >
      <SelectTask id={id} />
      <p
        className="taskName"
        dangerouslySetInnerHTML={{ __html: getStr(task) }}
      ></p>
      <div className="taskFunctions alwaysOpen ">
        <div className="btns">
          <button
            className="deleteTask tf-btn"
            onClick={() => finalDeleteFunc(id)}
          >
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
