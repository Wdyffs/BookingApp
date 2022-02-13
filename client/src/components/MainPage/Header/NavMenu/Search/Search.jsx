import React from "react";
import style from "./Search.module.css";

export const Search = () => {
  return <input type="text" placeholder="Search?" className={style.search} />;
};
