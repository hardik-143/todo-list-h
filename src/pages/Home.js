import React from "react";
import EditModal from "../components/EditModal";
// import Sidebar from "../components/Sidebar";
import Tasks from "../components/Tasks";
import Wrapper from "../components/Wrapper";

const Home = () => {
  return (
    <>
      <Wrapper />
      <Tasks />
      <EditModal />
    </>
  );
};

export default Home;
