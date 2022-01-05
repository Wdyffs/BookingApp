import React from "react";
import style from "./Header.module.css"
import { Login } from "./Login/Login";
import { Logo } from "./Logo/Logo";
import { NavMenu } from "./NavMenu/NavMenu";

export const Header = (props) => {
  return (
    <header>
      <Logo />
      <NavMenu />
      <Login />
    </header>
  )
}