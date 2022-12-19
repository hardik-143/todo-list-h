import React from "react";
import { useRef } from "react";
import { BiArchiveIn } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { RiMenuLine } from "react-icons/ri";
import { VscSymbolColor } from "react-icons/vsc";
import { useAppContext } from "../../AppContext";
import useWindowDimensions from "../../hooks/useWindowdimensions";
import ColorPallette from "../ColorPallette";
const $ = require("jquery");

const SingleTask = ({ data }) => {
  const { width } = useWindowDimensions();
  const {
    deleteTask,
    enableEditing,
    openPalette,
    setopenPalette,
    seteditModalColor,
    getStr,
    archiveTask
  } = useAppContext();
  const { id, task, color, isArchived } = data;
  const singleTaskEle = useRef();

  const openEditModal = (e, id, color) => {
    if (
      !$(e.target).hasClass("taskFunctions") &&
      $(e.target).closest(".taskFunctions").length === 0 &&
      !$(e.target).hasClass("open-taskFunctions") &&
      $(e.target).closest(".open-taskFunctions").length === 0
    ) {
      seteditModalColor(color);
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
      className="singleTask"
      onClick={(e) => openEditModal(e, id, color)}
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
      {width < 992 && (
        <button className="open-taskFunctions" onClick={() => openTaskFunc()}>
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
          <button
            className="archiveTask tf-btn"
            onClick={() => archiveTask(id, isArchived)}
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
