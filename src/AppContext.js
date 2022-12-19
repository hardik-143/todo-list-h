import React, { useState, useContext } from "react";
const AppContext = React.createContext();
const $ = require("jquery");
const AppProvider = ({ children }) => {
  const [allNotes, setAllNotes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState("");
  const [editValue, setEditValue] = useState("");
  const [editID, setEditId] = useState("");
  const [inpfocus, setInpfocus] = useState(false);
  const [openPalette, setopenPalette] = useState(false);
  const [sideBarOpen, setsideBarOpen] = useState(false);
  const [editModalColor, seteditModalColor] = useState("");
  const [modalPos, setModalPos] = useState({
    top: 0,
    left: 0,
  });

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
      setAllNotes(items);
    }
  };
  const addTask = (calledFrom) => {
    // calledFrom
    // 1 create button
    // 2 document click
    let obj = {
      id: new Date(),
      task: value,
      isPinned: false,
      color: "#fff",
      isDeleted: false,
      isArchived:false,
    };
    setAllNotes((prev) => {
      return [...prev, obj];
    });
    UpdateLocalStorage(obj);
    setValue("");
  };
  const archiveTask = (id,iArchive) => {
    cancelEditing();
    const obj = allNotes.map((el) => {
      if (el.id === id) {
        return { ...el, isArchived: !iArchive };
      }
      return el;
    });
    setAllNotes(obj);
    localStorage.setItem("tasks", JSON.stringify(obj));
  };
  const deleteTask = (id) => {
    cancelEditing();
    const obj = allNotes.map((el) => {
      if (el.id === id) {
        return { ...el, isDeleted: true };
      }
      return el;
    });
    setAllNotes(obj);
    localStorage.setItem("tasks", JSON.stringify(obj));
  };
  const restoreTask = (id) => {
    cancelEditing();
    const obj = allNotes.map((el) => {
      if (el.id === id) {
        return { ...el, isDeleted: false };
      }
      return el;
    });
    setAllNotes(obj);
    localStorage.setItem("tasks", JSON.stringify(obj));
  };
  const finalDelete = (id) =>{
    cancelEditing();
    let obj = allNotes.filter((ele) => ele.id !== id);
    setAllNotes(obj);
    localStorage.setItem("tasks", JSON.stringify(obj));
  }
  const enableEditing = (id, stElement) => {
    let editObj = allNotes.find((ele) => ele.id === id);
    setIsEditing(true);
    $(stElement.current).addClass("singleTaskHidden");
    let stPos = stElement.current.getBoundingClientRect();
    setModalPos({
      top: stPos.top,
      left: stPos.left,
      width: stPos.width,
    });
    setEditId(editObj.id);
    setEditValue(editObj.task);
    // setInpfocus(true);
  };
  const cancelEditing = () => {
    setIsEditing(false);
    setValue("");
    setEditValue("");
    setEditId("");
    setInpfocus(false);
    $(".singleTaskHidden").removeClass("singleTaskHidden");
  };
  const editTask = () => {
    console.log("prev", allNotes.length);
    const updatedTasks = allNotes.map((el) => {
      if (el.id === editID) {
        return { ...el, task: editValue };
      }
      return el;
    });
    setAllNotes(updatedTasks);
    cancelEditing();
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  const changeColor = (clr, id) => {
    const updatedTasks = allNotes.map((el) => {
      if (el.id === id) {
        return { ...el, color: clr };
      }
      return el;
    });
    setAllNotes(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setopenPalette(false);
  };
  const getStr = (str) => {
    return str
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\t/g, "\u00a0")
      .replace(/\n/g, "<br/>");
  };
  return (
    <AppContext.Provider
      value={{
        allNotes,
        setAllNotes,
        isEditing,
        setIsEditing,
        value,
        setValue,
        addTask,
        getPreviousData,
        deleteTask,
        enableEditing,
        cancelEditing,
        editTask,
        inpfocus,
        setInpfocus,
        modalPos,
        setModalPos,
        editValue,
        setEditValue,
        editID,
        changeColor,
        openPalette,
        setopenPalette,
        sideBarOpen,
        setsideBarOpen,
        editModalColor,
        seteditModalColor,
        getStr,
        finalDelete,
        restoreTask,
        archiveTask
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
