import React from "react";
import { useAppContext } from "../AppContext";

const Wrapper = () => {
  const { isEditing, setValue, value, addTask, editTask, cancelEditing } =
    useAppContext();
  const changeValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="wrapper">
      <h2 className="mb-3">{`${isEditing ? "Edit task" : "Create task"}`}</h2>
      <div className="inputWrapper">
        <input
          type="text"
          value={value}
          name="task"
          id="newTask"
          onInput={(e) => changeValue(e)}
          autoComplete="off"
          onKeyPress={(e) => {
            if (e.which === 13 && value ) {
              if (isEditing) {
                editTask()
              }else{
                addTask();
              }
            }
          }}
        />
        <div className="underline"></div>
        {isEditing ? (
          <>
            <button
              className="button"
              onClick={() => {
                editTask();
              }}
              disabled={value ? false : true}
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
          </>
        ) : (
          <button
            type="submit"
            className="button"
            onClick={() => {
              addTask();
            }}
            disabled={value ? false : true}
          >
            create
          </button>
        )}
      </div>
    </div>
  );
};

export default Wrapper;
