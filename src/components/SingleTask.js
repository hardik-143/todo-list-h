import React, { useState } from "react";
import { useRef } from "react";
import { BsFillTrashFill, BsPinAngle, BsPinAngleFill } from "react-icons/bs";
import { VscSymbolColor } from "react-icons/vsc";
import { useAppContext } from "../AppContext";
import ColorPallette from "./ColorPallette";
const $ = require("jquery");

const SingleTask = ({ data }) => {
  const { deleteTask, enableEditing } = useAppContext();
  const { id, task, color } = data;
  const [openPalette, setopenPalette] = useState(false);
  const singleTaskEle = useRef();
  const getStr = (str) => {
    return str
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\t/g, "\u00a0")
      .replace(/\n/g, "<br/>");
  };
  const openEditModal = (e, id) => {
    if (
      !$(e.target).hasClass("taskFunctions") &&
      $(e.target).closest(".taskFunctions").length === 0
    ) {
      enableEditing(id, singleTaskEle);
    }
  };

  return (
    <div
      className="singleTask"
      onClick={(e) => openEditModal(e, id)}
      ref={singleTaskEle}
      onMouseLeave={() => setopenPalette(false)}
      style={{
        background: color,
      }}
    >
      <p
        className="taskName"
        dangerouslySetInnerHTML={{ __html: getStr(task) }}
      ></p>
      <div className="taskFunctions">
        <div className="btns">
          <button className="deleteTask tf-btn" onClick={() => deleteTask(id)}>
            <BsFillTrashFill />
          </button>
          {/* <button
            className="pinTask tf-btn"
            onClick={() => pinTask(id, isPinned)}
          >
            {isPinned ? <BsPinAngleFill /> : <BsPinAngle />}
          </button> */}
          <button
            className={`colorTask tf-btn ${openPalette ? "rotate" : ""}`}
            onClick={() => setopenPalette(!openPalette)}
          >
            <VscSymbolColor />
          </button>
        </div>
        <ColorPallette openPalette={openPalette} id={id} />
      </div>
    </div>
  );
};

export default SingleTask;
