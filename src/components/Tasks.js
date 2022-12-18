import React, { useRef } from "react";
import SingleTask from "./SingleTask";
import { useAppContext } from ".././AppContext";
import { useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import useWindowDimensions from "../hooks/useWindowdimensions";
const Tasks = () => {
  const { getPreviousData, allNotes, sideBarOpen } = useAppContext();
  const { width } = useWindowDimensions();
  const inner = useRef();
  useEffect(() => {
    getPreviousData();
    inner.current.screenTop = inner.current.scrollHeight;
    // eslint-disable-next-line
  }, []);
  return (
    <div
      className={`tasks ${
        sideBarOpen && width > 992 ? "sidebarOpened  " : ""
      } ${width > 992 ? "padding-left-45" : ""}`}
    >
      {allNotes.filter((ele) => {
        return ele.isDeleted === false;
      }).length === 0 ? (
        <h2 className="title">No notes created</h2>
      ) : (
        ""
      )}
      <div className="inner" ref={inner}>
        <div className="tasksWrapper">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 500: 2, 800: 3, 900: 4 }}
          >
            <Masonry gutter={"10"}>
              {allNotes
                .filter((ele) => {
                  return ele.isDeleted === false;
                })
                .map((item, index) => {
                  return <SingleTask data={item} key={index} />;
                })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
