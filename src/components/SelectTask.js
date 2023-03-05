import React from "react";
import { TiTickOutline, TiTick } from "react-icons/ti";
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
    <div className={`select-task-btn`} onClick={() => updateSelection()}>
      {selectedTask.includes(id) ? <TiTick /> : <TiTickOutline />}
    </div>
  );
};

export default SelectTask;
