import React from "react";
import style from "./MainPage.module.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Movies } from "./Content/Movies/Movies";
import { Theatres } from "./Content/Theatres/Theatres";

export const MainPage = (props) => {
  return (
    <div className={style.mainContainer}>
      <Header />
      <div className={style.contentContainer}>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="theatres" element={<Theatres />} />
          <Route
            path="*"
            element={<h1 style={{ color: "red" }}>Not found</h1>}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
