import React, { useRef } from "react";
import SingleTask from "./SingleTask";
import { useAppContext } from ".././AppContext";
import { useEffect } from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
const Tasks = () => {
  const { getPreviousData, allNotes } = useAppContext();
  const inner = useRef();
  useEffect(() => {
    getPreviousData();
    inner.current.screenTop = inner.current.scrollHeight;
    // eslint-disable-next-line
  }, []);
  return (
    <div className="tasks">
      {allNotes.length === 0 ? <h2 className="title">No notes created</h2> : ""}
      <div className="inner" ref={inner}>
        <div className="tasksWrapper">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
          >
            <Masonry gutter={'10'}>
              {allNotes.map((item, index) => {
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