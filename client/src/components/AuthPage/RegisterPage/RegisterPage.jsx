import React, { useState, useEffect } from "react";
import style from "./RegisterPage.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

export const RegisterPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Type an email");
  const [passwordError, setPasswordError] = useState("Type a password");
  const [formValid, setFormValid] = useState(false);

  const registerUser = (email, password) => {
    axios
      .post("http://localhost:5000/api/auth/register", {
        email,
        password,
      })
      .then((data) => console.log(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Incorrect email");
      if (!e.target.value) {
        setEmailError("Type an email");
      }
    } else {
      setEmailError("");
    }
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8 || e.target.value.length > 16) {
      setPasswordError("Must be 8-16 symbols");
      if (e.target.value === "") {
        setPasswordError("Type a password");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "e-mail":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      default:
        return;
    }
  };
  return (
    <section className={style.wrapper}>
      <p className={style.formImage}>
        <img src="/images/Logo.svg" alt="Login Logo"></img>
      </p>
      <form className={style.loginForm}>
        <legend className={style.formTitle}>
          Sign up and start enjoy movies
        </legend>
        {emailDirty && emailError && (
          <div style={{ color: "grey" }}>{emailError}</div>
        )}
        <p className={style.formField}>
          <input
            type="email"
            name="e-mail"
            placeholder="E-mail"
            value={email}
            id="email"
            className={style.inputField}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => emailChangeHandler(e)}
          />
        </p>
        {passwordDirty && passwordError && (
          <div style={{ color: "grey" }}>{passwordError}</div>
        )}

        <p className={style.formField}>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            id="password"
            className={style.inputField}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => passwordChangeHandler(e)}
          />
        </p>
        {/* <p className={style.formField}>
          <input
            type="password"
            placeholder="Confirm Password"
            id="password"
            className={style.inputField}
          />
        </p> */}
        <button
          type="submit"
          className={style.submitButton}
          disabled={!formValid}
          onClick={() => registerUser(email, password)}
        >
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
