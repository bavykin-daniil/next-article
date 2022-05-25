//general
import React from "react";
import { Route, Routes } from "react-router-dom";
//routes
import { mainRoutes } from "../../routes/mainRoutes";
//styles
import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <main>
      <div>
        <Routes>
          {mainRoutes.map((route) => (
            <Route key={route.id} path={route.path} element={route.component} />
          ))}
        </Routes>
      </div>
    </main>
  );
};

export default Main;
