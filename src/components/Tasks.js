import React, { useRef } from "react";
import SingleTask from "./SingleTask";
import { useAppContext } from ".././AppContext";
import { useEffect } from "react";

const Tasks = () => {
  const { getPreviousData, previewTasks } = useAppContext();
  const inner = useRef();
  useEffect(() => {
    getPreviousData();
    console.log(inner.current.scrollHeight);
    inner.current.screenTop = inner.current.scrollHeight
    // eslint-disable-next-line
  }, []);
  return (
    <div className="tasks">
      {previewTasks.length === 0 ? (
        <h2 className="title">No task created</h2>
      ) : (
        ""
      )}
      <div className="inner" ref={inner}>
        <div className="tasksWrapper">
          {previewTasks.map((item, index) => {
            return <SingleTask data={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
