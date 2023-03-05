import React, { useEffect } from "react";
import { useAppContext } from "../AppContext";
import EditModal from "../components/EditModal";
import Tasks from "../components/Tasks";
import PinnedTasks from "../components/TaskType/PinnedTasks";
import Wrapper from "../components/Wrapper";

const Home = () => {
  const { setpathURL, pinnedTask } = useAppContext();
  useEffect(() => {
    setpathURL("/");
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Wrapper />
      {pinnedTask.length > 0 && <PinnedTasks />}
      <Tasks />
      <EditModal />
    </>
  );
};

export default Home;
