import React from "react";
import { Link } from "react-router-dom";
import style from "./LoginPage.module.css";

export const LoginPage = (props) => {
  return (
    <section className={style.wrapper}>
      <p className={style.formImage}>
        <img src="/images/Logo.svg" alt="Login Logo"></img>
      </p>
      <form className={style.loginForm}>
        <legend className={style.formTitle}>
          Sign in and start enjoy movies
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
          <label for="remember" className={style.fieldName}>
            Remember me
          </label>
          <input type="checkbox" id="remember" className={style.checkbox} />
          <span>
            <Link to="/">Forgot password?</Link>
          </span>
        </p>
        <button type="submit" className={style.submitButton}>
          <Link to="/" className={style.submitLink}>
            Sign in
          </Link>
        </button>
        <p className={style.formFooter}>
          New to See?
          <Link to="register">Sign Up</Link>
        </p>
      </form>
    </section>
  );
};
