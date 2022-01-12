import React from "react";
import { Link } from "react-router-dom";
import style from "./LoginPage.module.css";

export const LoginPage = (props) => {
  return (
    <section className={style.wrapper}>
      <form className={style.loginForm}>
        <legend>Registration</legend>
        <p className={style.formField}>
          <label for="email" className={style.fieldName}>
            Email
          </label>
          <input
            type="email"
            placeholder="Type message"
            id="email"
            className={style.inputField}
          />
        </p>
        <p className={style.formField}>
          <label for="password" className={style.fieldName}>
            Password
          </label>
          <input
            type="password"
            placeholder="Password must be no less 8 characters"
            id="password"
            className={style.inputField}
          />
        </p>
        <p className={style.formField}>
          <label for="remember" className={style.fieldName}>
            Remember me
          </label>
          <input type="checkbox" id="remember" className={style.checkbox} />
        </p>
        <button type="submit" className={style.submitButton}>
          <Link to="/" className={style.submitLink}>
            Submit
          </Link>
        </button>
      </form>
    </section>
  );
};
