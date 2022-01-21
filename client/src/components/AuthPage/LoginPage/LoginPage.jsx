import React from "react";
import style from "./LoginPage.module.css";
import { Link } from "react-router-dom";

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
          <input type="checkbox" id="remember" className={style.checkbox} />
          <label for="remember" className={(style.fieldName, style.remember)}>
            Remember me
          </label>
          <p className={style.forgotPassword}>
            <Link to="/" className={style.forgotPasswordLink}>
              Forgot password?
            </Link>
          </p>
        </p>
        <button type="submit" className={style.submitButton}>
          <Link to="/" className={style.submitLink}>
            Sign in
          </Link>
        </button>
        <p className={style.formFooter}>
          <span>New to See?</span>
          <Link to="register">Sign Up</Link>
        </p>
      </form>
    </section>
  );
};
