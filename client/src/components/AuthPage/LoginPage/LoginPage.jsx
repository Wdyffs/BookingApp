import React, { useEffect, useState } from "react";
import style from "./LoginPage.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect, useDispatch, useSelector } from "react-redux";
import { setAuth, setUser } from "../../../redux/AuthReducer";

export const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const loginUser = (email, password) => {
    axios
      .post("http://localhost:5000/api/auth/login", { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch(setAuth(true));
        dispatch(setUser(res.data.user));
      })
      .catch((e) => console.log(e.res.data.message));
  };
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
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p className={style.formField}>
          <input
            type="password"
            placeholder="Password"
            id="password"
            className={style.inputField}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p className={style.formField}>
          <input type="checkbox" id="remember" className={style.checkbox} />
          <label
            htmlFor="remember"
            className={(style.fieldName, style.remember)}
          >
            Remember me
          </label>
          <p className={style.forgotPassword}>
            <Link to="/" className={style.forgotPasswordLink}>
              Forgot password?
            </Link>
          </p>
        </p>
        <button
          type="button"
          className={style.submitButton}
          onClick={() => loginUser(email, password)}
        >
          Sign in
        </button>
        <p className={style.formFooter}>
          <span>New to See?</span>
          <Link to="register">Sign Up</Link>
          <Link to="/" className={style.home}>Home page</Link>
        </p>
      </form>
    </section>
  );
};
