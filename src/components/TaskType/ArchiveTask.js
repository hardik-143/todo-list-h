import React from "react";
import { BiArchiveOut } from "react-icons/bi";
import { useAppContext } from "../../AppContext";
import SelectTask from "../SelectTask";

const ArchiveTask = ({ data }) => {
  const { id, task, color, isArchived,background } = data;
  const { getStr, archiveNoteFunc,selectedTask } = useAppContext();

  return (
    <div
    className={`singleTask ${selectedTask.includes(id) ? "selected" : ""}`}
      style={{
        background: background?background:'#fff',
        color: color?color:'#000',
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
