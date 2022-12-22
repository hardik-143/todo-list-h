import React from "react";
import { BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";
import { useAppContext } from "../AppContext";
const SelectTask = ({ id, isSelected, setIsSelected }) => {
  const { selectedTask, setselectedTask } = useAppContext();
  const updateSelection = () => {
    if (!isSelected) {
        setselectedTask((prev)=>{
            return [...prev,id]
        })    
    }else{
        const newArr = selectedTask.filter((ele) => ele !== id);
        setselectedTask(newArr)
    }
    setIsSelected(!isSelected);
  };
  return (
    <div
      className={`select-task-btn`}
      onClick={() => updateSelection()}
    >
      {isSelected ? <BsCheckCircleFill /> : <BsCheckCircle />}
    </div>
  );
};

export default SelectTask;
