import React from "react";
import { useRef } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { useAppContext } from "../AppContext";
import "../scss/modal.scss";
import useAutosizeTextArea from "../hooks/useAutosizeTextarea";
const $ = require("jquery");

const EditModal = () => {
  const {
    isEditing,
    editNoteFunc,
    cancelEditing,
    setEditValue,
    modalPos,
    editValue,
    deleteNoteFunc,
    editID,
  } = useAppContext();

  const modalElement = useRef();
  const inputElement = useRef();
  useAutosizeTextArea(inputElement.current, editValue);
  const hideModal = (e) => {
    if ($(e.target).hasClass("edit-modal-background")) {
      $(modalElement.current).addClass("out");
      cancelEditing();
    }
  };

  return (
    <div
      className={`edit-modal ${isEditing ? "show" : ""}`}
      onClick={(e) => hideModal(e)}
      ref={modalElement}
    >
      <div className="edit-modal-background">
        <div
          className="edit-modal-body"
          style={{
            top: modalPos.top,
            left: modalPos.left,
            width: modalPos.width,
          }}
        >
          <div className="d-flex justify-content-end">
            <button className="deleteTask tf-btn" onClick={() => deleteNoteFunc(editID)}>
              <BsFillTrashFill />
            </button>
          </div>
          <textarea
            value={editValue}
            className={"noteInput"}
            onInput={(e) => setEditValue(e.target.value)}
            autoComplete="off"
            ref={inputElement}
          ></textarea>
          <div className="buttons-wrapper">
            <button
              className="button"
              onClick={() => {
                editNoteFunc();
              }}
              disabled={editValue ? false : true}
            >
              update
            </button>
            <button
              className="button cancel"
              onClick={() => {
                cancelEditing();
              }}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
