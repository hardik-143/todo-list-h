import React, { useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useAppContext } from "../AppContext";
import TrashTask from "../components/TaskType/TrashTask";

const Trash = () => {
  const { allNotes, getPreviousData } = useAppContext();
  useEffect(() => {
    getPreviousData();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="margin-top-50">
      <div className={`tasks `}>
        {allNotes.filter((ele) => {
            return ele.isDeleted
        }).length === 0 ? (
          <h2 className="title">No notes deleted</h2>
        ) : (
          ""
        )}
        <div className="inner">
          <div className="tasksWrapper">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 500: 2, 800: 3, 900: 4 }}
            >
              <Masonry gutter={"10"}>
                {allNotes
                  .filter((ele) => {
                    return ele.isDeleted
                  })
                  .map((item, index) => {
                    return <TrashTask data={item} key={index} />;
                  })}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trash;
