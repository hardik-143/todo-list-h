import React, { useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useAppContext } from "../AppContext";
import ArchiveTask from "../components/TaskType/ArchiveTask";

const Archive = () => {
  const { getPreviousData,archiveNotes} = useAppContext();
  useEffect(() => {
    getPreviousData();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="margin-top-50">
      <div className={`tasks `}>
        {archiveNotes.length === 0 ? (
          <h2 className="title">No notes Archived</h2>
        ) : (
          ""
        )}
        <div className="inner">
          <div className="tasksWrapper">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 500: 2, 800: 3, 900: 4 }}
            >
              <Masonry gutter={"10"}>
                {archiveNotes.filter((ele) => {
                    return ele.isArchived && !ele.isDeleted;
                  })
                  .map((item, index) => {
                    return <ArchiveTask data={item} key={index} />;
                  })}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive;