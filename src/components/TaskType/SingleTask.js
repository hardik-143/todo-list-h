import React, { useState } from "react";
import { useRef } from "react";
import { BiArchiveIn } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { RiMenuLine } from "react-icons/ri";
import { VscSymbolColor } from "react-icons/vsc";
import { useAppContext } from "../../AppContext";
import useWindowDimensions from "../../hooks/useWindowdimensions";
import ColorPallette from "../ColorPallette";
import SelectTask from "../SelectTask";
const $ = require("jquery");

const SingleTask = ({ data }) => {
  const { width } = useWindowDimensions();
  const {
    deleteNoteFunc,
    enableEditing,
    openPalette,
    setopenPalette,
    getStr,
    archiveNoteFunc,
  } = useAppContext();
  const { id, task, color, isArchived, background } = data;
  const [isSelected,setIsSelected] = useState(false)
  const singleTaskEle = useRef();

  const openEditModal = (e, id) => {
    if (
      !$(e.target).hasClass("taskFunctions") &&
      $(e.target).closest(".taskFunctions").length === 0 &&
      !$(e.target).hasClass("open-taskFunctions") &&
      $(e.target).closest(".open-taskFunctions").length === 0 &&
      !$(e.target).hasClass("select-task-btn") &&
      $(e.target).closest(".select-task-btn").length === 0
    ) {
      enableEditing(id, singleTaskEle);
    }
  };
  const openTaskFunc = () => {
    closeTaskFunc();
    $(singleTaskEle.current).find(".open-taskFunctions").addClass("hide");
    $(singleTaskEle.current).find(".taskFunctions").addClass("show");
  };
  const closeTaskFunc = () => {
    $(".taskFunctions").removeClass("show");
    $(".open-taskFunctions").removeClass("hide");
  };
  $(window).on("resize", function () {
    closeTaskFunc();
  });

  return (
    <div
      className={`singleTask ${isSelected ? "selected" : ""}`}
      onClick={(e) => openEditModal(e, id)}
      ref={singleTaskEle}
      onMouseLeave={() => setopenPalette(false)}
      style={{
        background: background ? background : "#fff",
        color: color ? color : "#000",
      }}
    >
      <SelectTask id={id} isSelected={isSelected} setIsSelected={setIsSelected} />
      <p
        className="taskName"
        dangerouslySetInnerHTML={{ __html: getStr(task) }}
      ></p>
      {width < 992 && (
        <button
          className="open-taskFunctions"
          style={{
            color: color,
          }}
          onClick={() => openTaskFunc()}
        >
          <RiMenuLine />
        </button>
      )}
      <div className="taskFunctions">
        <div className="btns">
          {width < 992 && (
            <button className="tf-btn" onClick={() => closeTaskFunc()}>
              <MdClose />
            </button>
          )}
          <button
            className="deleteTask tf-btn"
            onClick={() => deleteNoteFunc(id,false)}
          >
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
          <button
            className="archiveTask tf-btn"
            onClick={() => archiveNoteFunc(id, isArchived)}
          >
            <BiArchiveIn />
          </button>
        </div>
        <ColorPallette openPalette={openPalette} id={id} />
      </div>
    </div>
  );
};

export default SingleTask;
