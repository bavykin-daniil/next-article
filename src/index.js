//general
import React from "react";
import ReactDOM from "react-dom/client";
//components
import Application from "./components/Application/Application";
//styles
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);
