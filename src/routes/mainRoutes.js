//general
import React from "react";
//pages
import MainPage from "../pages/MainPage";
import ArticlesPage from "../pages/ArticlesPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

export const mainRoutes = [
  { id: "MAIN", name: "Main", path: "/", component: <MainPage /> },
  {
    id: "ARTICLES",
    name: "Articles",
    path: "/articles",
    component: <ArticlesPage />,
  },
  { id: "ABOUT", name: "About", path: "/about", component: <AboutPage /> },
  {
    id: "CONTACT",
    name: "Contact",
    path: "/contact",
    component: <ContactPage />,
  },
];
