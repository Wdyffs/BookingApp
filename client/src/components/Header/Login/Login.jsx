import React from "react";
import style from "./Login.module.css"

export const Login = () => {
  return (
    <div className={style.login}>
      <img src="/images/LoginPicture.svg" alt="Login" />
      <p>Sign in</p>
    </div>
  )
}