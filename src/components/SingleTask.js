import React, { useEffect } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { useAppContext } from "../AppContext";

const SingleTask = ({ data }) => {
  const {deleteTask,enableEditing}=useAppContext()
  const { id, task } = data;
  useEffect(() => {
  }, [])
  
  return (
    <div className="singleTask">
      <p className="taskName">{task}</p>
      <div className="btns">
        <button className="editTask" onClick={()=>enableEditing(id)}>
          <FiEdit2 />
        </button>
        <button className="deleteTask" onClick={()=> deleteTask(id)}>
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
};

export default SingleTask;
