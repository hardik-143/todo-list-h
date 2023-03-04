import React from "react";
import { BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";
import { useAppContext } from "../AppContext";
const SelectTask = ({ id }) => {
  const { selectedTask, setselectedTask } = useAppContext();
  const updateSelection = () => {
    if (selectedTask.includes(id)) {
      const newArr = selectedTask.filter((ele) => ele !== id);
      setselectedTask(newArr);
    } else {
      setselectedTask((prev) => {
        return [...prev, id];
      });
    }
  };
  return (
    <div
      className={`select-task-btn`}
      onClick={() => updateSelection()}
    >
      { selectedTask.includes(id) ? <BsCheckCircleFill /> : <BsCheckCircle /> }
    </div>
  );
};

export default SelectTask;
