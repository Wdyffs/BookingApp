import React from "react";
import style from "./Login.module.css";
import { NavLink } from "react-router-dom";

export const LoginIcon = () => {
  return (
    <div className={style.login}>
      <img src="/images/LoginPicture.svg" alt="Login" />
      <NavLink to="login">Sign in</NavLink>
    </div>
  );
};
