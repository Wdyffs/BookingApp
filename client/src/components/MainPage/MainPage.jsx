import React from "react";
import style from "./MainPage.module.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Movies } from "./Content/Movies/Movies";
import Movie from "./Content/Movies/Movie/Movie";
import { Theatres } from "./Content/Theatres/Theatres";

export const MainPage = (props) => {
  return (
    <div className={style.mainContainer}>
      <Header />
      <div className={style.contentContainer}>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="movie/:name" element={<Movie />} />
          <Route path="theatres" element={<Theatres />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
