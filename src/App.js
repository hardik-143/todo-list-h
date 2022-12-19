import { BrowserRouter, Route, Routes } from "react-router-dom";
import Archive from "./pages/Archive";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Trash from "./pages/Trash";
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/archive" element={<Archive />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
