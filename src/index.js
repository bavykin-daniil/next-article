//general
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
//store
import store from "./store/store";
//components
import Application from "./components/Application/Application.jsx";
//styles
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.StrictMode>
);
