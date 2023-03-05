import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useAppContext } from "../../AppContext";
import SingleTask from "./SingleTask";

const PinnedTasks = () => {
  const { allNotes, pinnedTask } = useAppContext();
  return (
    <div className="pinnedTask-Wrapper">
      <div className="tasksWrapper">
        <h2 className="title">Pinned Notes</h2>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 500: 2, 800: 3, 900: 4 }}
        >
          <Masonry gutter={"10"}>
            {allNotes
              .filter((ele) => {
                return (
                  !ele.isArchived &&
                  !ele.isDeleted &&
                  pinnedTask.includes(ele.id)
                );
              })
              .map((item, index) => {
                return <SingleTask data={item} key={index} />;
              })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default PinnedTasks;
