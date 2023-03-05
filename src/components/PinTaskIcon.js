import React, { useEffect } from "react";
import { RiPushpinFill, RiPushpinLine } from "react-icons/ri";
import { useAppContext } from "../AppContext";

const PinTaskIcon = ({ id }) => {
  const { pinnedTask, setpinnedTask } = useAppContext();
  const updatePinTask = () => {
    if (pinnedTask.includes(id)) {
      const newArr = pinnedTask.filter((ele) => ele !== id);
      setpinnedTask(newArr);
    } else {
      setpinnedTask((prev) => {
        return [...prev, id];
      });
    }
  };
  useEffect(() => {
    localStorage.setItem("pinnedTask", JSON.stringify(pinnedTask));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pinnedTask]);
  return (
    <>
      <div className={`pin-task-btn`} onClick={() => updatePinTask()}>
        {pinnedTask.includes(id) ? <RiPushpinFill /> : <RiPushpinLine />}
      </div>
    </>
  );
};

export default PinTaskIcon;
