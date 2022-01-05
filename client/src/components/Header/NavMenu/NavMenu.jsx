import React from "react";
import style from "./NavMenu.module.css"
import { Search } from "./Search/Search";

export const NavMenu = () => {
  return (
    <nav className={style.Navigation}>
      <a href="1">Movies</a>
      <a href="2">Theatres</a>
      <Search />
    </nav>
  )
}