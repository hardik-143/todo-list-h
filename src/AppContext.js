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
  const [deletedNotes, setDeletedNotes] = useState([]);
  const [archiveNotes, setArchiveNotes] = useState([]);
  const [selectedTask, setselectedTask] = useState([]);
  const [pathURL, setpathURL] = useState("");
  const [pinnedTask, setpinnedTask] = useState([]);

  const [modalPos, setModalPos] = useState({
    top: 0,
    left: 0,
  });
  // set new localstorage
  const setNewLocalStorage = (data) => {
    localStorage.setItem("tasks", JSON.stringify(data));
  };
  // set new localstorage

  // update in localstorage
  const UpdateLocalStorage = (obj) => {
    let items = JSON.parse(localStorage.getItem("tasks"));
    if (items) {
      items.push(obj);
      setNewLocalStorage(items);
    } else {
      setNewLocalStorage([obj]);
    }
  };
  // update in localstorage
  // get data from localStorage
  const getPreviousData = () => {
    let items = JSON.parse(localStorage.getItem("tasks"));
    let pinned = JSON.parse(localStorage.getItem("pinnedTask"));
    if (items && items.length > 0) {
      let deleted = items.filter((ele) => {
        return ele.isDeleted;
      });
      let archived = items.filter((ele) => {
        return ele.isArchived;
      });
      setAllNotes(items);
      setDeletedNotes(deleted);
      setArchiveNotes(archived);
    }
    if (pinned && pinned.length > 0) {
      setpinnedTask(pinned);
    }
  };
  // get data from localStorage

  // create note function
  const addTask = () => {
    let obj = {
      id: new Date(),
      task: value,
      isPinned: false,
      background: "#fff",
      color: "#303030",
      isDeleted: false,
      isArchived: false,
    };
    setAllNotes((prev) => {
      return [...prev, obj];
    });
    UpdateLocalStorage(obj);
    setValue("");
  };
  // create note function

  // archive note function
  const archiveNoteFunc = (id, iArchive, isMultiple) => {
    cancelEditing();
    const obj = allNotes.map((el) => {
      if (isMultiple) {
        if (selectedTask.includes(el.id)) {
          return { ...el, isArchived: !iArchive };
        }
        return el;
      } else {
        if (el.id === id) {
          return { ...el, isArchived: !iArchive };
        }
        return el;
      }
    });
    setpinnedTask(() => {
      return pinnedTask.filter((ele) => ele !== id);
    });
    setAllNotes(obj);
    setNewLocalStorage(obj);
    let archived = obj.filter((ele) => {
      return ele.isArchived;
    });
    setArchiveNotes(archived);
    setselectedTask([]);
  };
  // archive note function

  // delete note function
  const deleteNoteFunc = (id, isMultiple = false) => {
    cancelEditing();
    const obj = allNotes.map((el) => {
      if (isMultiple) {
        if (selectedTask.includes(el.id)) {
          return { ...el, isDeleted: true };
        }
        return el;
      } else {
        if (el.id === id) {
          return { ...el, isDeleted: true };
        }
        return el;
      }
    });
    setpinnedTask(() => {
      return pinnedTask.filter((ele) => ele !== id);
    });
    setAllNotes(obj);
    setNewLocalStorage(obj);
    let deleted = obj.filter((ele) => {
      return ele.isDeleted;
    });
    setDeletedNotes(deleted);
    setselectedTask([]);
  };
  // delete note function

  // restore func function
  const restoreNoteFunc = (id, isMultiple = false) => {
    cancelEditing();
    const obj = allNotes.map((el) => {
      if (isMultiple) {
        if (selectedTask.includes(el.id)) {
          return { ...el, isDeleted: false };
        }
        return el;
      } else {
        if (el.id === id) {
          return { ...el, isDeleted: false };
        }
        return el;
      }
    });
    setAllNotes(obj);
    setNewLocalStorage(obj);
    let deleted = obj.filter((ele) => {
      return ele.isDeleted;
    });
    setDeletedNotes(deleted);
    setselectedTask([]);
  };
  // restore func function

  // final delete function
  const finalDeleteFunc = (id) => {
    cancelEditing();
    let obj = allNotes.filter((ele) => ele.id !== id);
    setAllNotes(obj);
    setNewLocalStorage(obj);
    let deleted = obj.filter((ele) => {
      return ele.isDeleted;
    });
    setDeletedNotes(deleted);
  };
  // final delete function

  // enable note edit function
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
  };
  // enable note edit function

  // cancel note editing
  const cancelEditing = () => {
    setIsEditing(false);
    setValue("");
    setEditValue("");
    setEditId("");
    setInpfocus(false);
    $(".singleTaskHidden").removeClass("singleTaskHidden");
  };
  // cancel note editing

  // edit note function
  const editNoteFunc = () => {
    console.log("prev", allNotes.length);
    const obj = allNotes.map((el) => {
      if (el.id === editID) {
        return { ...el, task: editValue };
      }
      return el;
    });
    setAllNotes(obj);
    cancelEditing();
    setNewLocalStorage(obj);
  };
  // edit note function

  // change color of note
  const changeColor = (clr, id) => {
    const obj = allNotes.map((el) => {
      if (el.id === id) {
        return { ...el, color: clr.color, background: clr.background };
      }
      return el;
    });
    setAllNotes(obj);
    setNewLocalStorage(obj);
    setopenPalette(false);
  };
  // change color of note

  // get html string
  const getStr = (str) => {
    return str
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\t/g, "\u00a0")
      .replace(/\n/g, "<br/>");
  };
  // get html string
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
        deleteNoteFunc,
        enableEditing,
        cancelEditing,
        editNoteFunc,
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
        getStr,
        finalDeleteFunc,
        restoreNoteFunc,
        archiveNoteFunc,
        deletedNotes,
        setDeletedNotes,
        archiveNotes,
        setArchiveNotes,
        pathURL,
        setpathURL,
        selectedTask,
        setselectedTask,
        pinnedTask,
        setpinnedTask,
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
