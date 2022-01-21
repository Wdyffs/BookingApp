import React from "react";
import { Link } from "react-router-dom";
import style from "./NavMenu.module.css";
import { Search } from "./Search/Search";

export const NavMenu = () => {
  return (
    <nav className={style.Navigation}>
      <Link to="/">Movies</Link>
      <Link to="theatres">Theatres</Link>
      <Search />
    </nav>
  );
};
