import React, { useState, useContext } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [allTasks, setAllTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState("");
  const [previewTasks, setPreviewTasks] = useState([]);
  const [editID, setEditId] = useState("");
  const UpdateLocalStorage = (obj) => {
    let items = JSON.parse(localStorage.getItem("tasks"));
    if (items) {
      items.push(obj);
      localStorage.setItem("tasks", JSON.stringify(items));
    } else {
      localStorage.setItem("tasks", JSON.stringify([obj]));
    }
  };
  const getPreviousData = () => {
    let items = JSON.parse(localStorage.getItem("tasks"));
    if (items) {
      setAllTasks(items);
      setPreviewTasks(items);
    }
  };
  const addTask = () => {
    let isExist = allTasks.find((ele) => ele.task === value);
    if (isExist) {
      alert("exist");
      return false;
    }
    let obj = {
      id: new Date(),
      task: value,
      isIMP: false,
    };
    setAllTasks((prev) => {
      return [...prev, obj];
    });
    setPreviewTasks((prev) => {
      return [...prev, obj];
    });
    UpdateLocalStorage(obj);
    setValue("");
  };
  const deleteTask = (id) => {
    cancelEditing();
    let obj = allTasks.filter((ele) => ele.id !== id)
    setAllTasks(obj);
    setPreviewTasks(obj);
    localStorage.setItem("tasks", JSON.stringify(obj));
  };
  const enableEditing = (id) => {
    let editObj = allTasks.find((ele) => ele.id === id);
    setIsEditing(true);
    setEditId(editObj.id);
    setValue(editObj.task);
  };
  const cancelEditing = () => {
    setIsEditing(false);
    setValue("");
    setEditId("");
  };
  const editTask = () => {
    let removeEditTask = allTasks.filter((ele) => ele.id !== editID)
    let isExist = removeEditTask.find((ele) => ele.task === value);
    if (isExist) {
      alert("exist");
      return false;
    }
    const updatedTasks = allTasks.map((el) => {
      if (el.id === editID) {
        return { ...el, task: value };
      }
      return el;
    });
    setAllTasks(updatedTasks);
    setPreviewTasks(updatedTasks);
    cancelEditing();
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

  };
  return (
    <AppContext.Provider
      value={{
        allTasks,
        setAllTasks,
        isEditing,
        setIsEditing,
        value,
        setValue,
        addTask,
        getPreviousData,
        deleteTask,
        previewTasks,
        enableEditing,
        cancelEditing,
        editTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
