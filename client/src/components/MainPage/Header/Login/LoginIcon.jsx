import React from "react";
import style from "./Login.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../redux/AuthReducer";

export const LoginIcon = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const onLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  };
  return (
    <div className={style.login}>
      <img src="/images/LoginPicture.svg" alt="Login" />
      {isAuth ? (
        <span onClick={() => onLogoutClick()} className={style.logout}>Logout</span>
      ) : (
        <NavLink to="auth">Sign in</NavLink>
      )}
    </div>
  );
};
