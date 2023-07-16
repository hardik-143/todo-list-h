import React from "react";
import { useAppContext } from "../AppContext";
import useAutosizeTextArea from "../hooks/useAutosizeTextarea";
import useWindowDimensions from "../hooks/useWindowdimensions";

const $ = require("jquery");

const Wrapper = () => {
  const { width } = useWindowDimensions();
  const { setValue, value, addTask, inpfocus, setInpfocus, setsideBarOpen,inputElement } =
    useAppContext();
  useAutosizeTextArea(inputElement.current, value);
  const changeValue = (e) => {
    setValue(e.target.value);
  };
  const inpBlurred = () => {
    setValue($(inputElement.current).val());
    setInpfocus(false);
    if (value.length > 0) {
      addTask(2);
    }
  };
  return (
    <div className="wrapper">
      <div className="inputWrapper">
        <textarea
          value={value}
          className={"noteInput"}
          onInput={(e) => changeValue(e)}
          onFocus={() => {
            setInpfocus(true);
            if (width < 991) {
              setsideBarOpen(false);
            }
          }}
          onBlur={() => inpBlurred()}
          placeholder="Make a note"
          autoComplete="off"
          ref={inputElement}
        ></textarea>
      </div>
      <div className={`buttons-wrapper ${inpfocus ? "show" : ""}`}>
        <button
          type="submit"
          className="button"
          onClick={() => {
            addTask(1);
          }}
          disabled={value ? false : true}
        >
          create
        </button>
      </div>
    </div>
  );
};

export default Wrapper;
