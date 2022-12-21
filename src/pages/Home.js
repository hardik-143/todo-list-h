import React, { useEffect } from "react";
import { useAppContext } from "../AppContext";
import EditModal from "../components/EditModal";
import Tasks from "../components/Tasks";
import Wrapper from "../components/Wrapper";

const Home = () => {
  const { setpathURL } = useAppContext();
  useEffect(() => {
    setpathURL("/");
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Wrapper />
      <Tasks />
      <EditModal />
    </>
  );
};

export default Home;
