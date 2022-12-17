import React from "react";
import { useRef } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { useAppContext } from "../AppContext";
const $ = require("jquery");

const SingleTask = ({ data }) => {
  const { deleteTask, enableEditing } = useAppContext();
  const { id, task } = data;
  const singleTaskEle = useRef()
  const getStr = (str) => {
    return str
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\t/g, "\u00a0")
      .replace(/\n/g, "<br/>");
  };
  const openEditModal = (e,id) => {
    if (!$(e.target).hasClass('taskFunctions') && $(e.target).closest('.taskFunctions').length === 0) {
      enableEditing(id,singleTaskEle)
    }
  };

  return (
    <div className="singleTask" onClick={(e) => openEditModal(e,id)} ref={singleTaskEle}>
      <p
        className="taskName"
        dangerouslySetInnerHTML={{ __html: getStr(task) }}
      ></p>
      <div className="taskFunctions">
        <div className="btns">
          <button className="deleteTask" onClick={() => deleteTask(id)}>
            <BsFillTrashFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
