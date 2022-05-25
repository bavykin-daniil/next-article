//general
import React from "react";
import { BrowserRouter } from "react-router-dom";
//components
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
//styles
import styles from "./Application.module.scss";

const Application = () => {
  return (
    <BrowserRouter>
      <div className={styles.application}>
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
};

export default Application;
