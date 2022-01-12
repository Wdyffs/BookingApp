import React from "react";
import { Link } from "react-router-dom";
import style from "./LoginPage.module.css";

export const LoginPage = (props) => {
  return (
    <form>
      <legend>Registration</legend>
      <input type="text" placeholder="Type message" />
      <label>Email</label>
      <input type="text" placeholder="Type message" />
      <label>Password</label>
      <input type="text" placeholder="Type message" />
      <label>Are you agree</label>
      <input type="checkbox" checked />
      <button type="submit">
        <Link to="/">Submit</Link>
      </button>
    </form>
  );
};
