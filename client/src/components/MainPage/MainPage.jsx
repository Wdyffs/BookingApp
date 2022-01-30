import React from "react";
import style from "./MainPage.module.css";
import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const MainPage = (props) => {
  return (
    <div className={style.mainContainer}>
      <Header />
      <div className={style.contentContainer}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
