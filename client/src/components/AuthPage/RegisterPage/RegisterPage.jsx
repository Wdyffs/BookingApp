import React from "react";
import style from "./RegisterPage.module.css";
import { Link } from "react-router-dom";

export const RegisterPage = (props) => {
  return (
    <section className={style.wrapper}>
      <p className={style.formImage}>
        <img src="/images/Logo.svg" alt="Login Logo"></img>
      </p>
      <form className={style.loginForm}>
        <legend className={style.formTitle}>
          Sign up and start enjoy movies
        </legend>
        <p className={style.formField}>
          <input
            type="email"
            placeholder="E-mail"
            id="email"
            className={style.inputField}
          />
        </p>
        <p className={style.formField}>
          <input
            type="password"
            placeholder="Password"
            id="password"
            className={style.inputField}
          />
        </p>
        <p className={style.formField}>
          <input
            type="password"
            placeholder="Confirm Password"
            id="password"
            className={style.inputField}
          />
        </p>
        <button type="submit" className={style.submitButton}>
          <Link to="/" className={style.submitLink}>
            Sign up
          </Link>
        </button>
        <p className={style.formFooter}>
          <span>Already exist?</span>
          <Link to="/auth">Sign in</Link>
        </p>
      </form>
    </section>
  );
};
