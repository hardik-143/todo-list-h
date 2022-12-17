import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "./AppContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <AppProvider>
    <App />
  </AppProvider>
  </>
);
