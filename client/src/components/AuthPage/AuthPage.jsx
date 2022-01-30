import React from "react";
import { Outlet } from "react-router-dom";
import { LoginPage } from "./LoginPage/LoginPage";
import { RegisterPage } from "./RegisterPage/RegisterPage";

export const AuthPage = (props) => {
  return (
    <>
      <Outlet />
    </>
  );
};
