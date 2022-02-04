import React, {useEffect} from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthPage } from "./components/AuthPage/AuthPage";
import { MainPage } from "./components/MainPage/MainPage";
import { Theatres } from "./components/MainPage/Content/Theatres/Theatres";
import { LoginPage } from "./components/AuthPage/LoginPage/LoginPage";
import { RegisterPage } from "./components/AuthPage/RegisterPage/RegisterPage";
import MovieWrapper from "./components/MainPage/Content/Movies/Movie/MovieWrapper";
import {MoviesWrapper} from "./components/MainPage/Content/Movies/MoviesWrapper";
import AddMovieWrapper from "./components/MainPage/Content/Movies/AddMovie/AddMovieWrapper";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setAuth, setUser} from "./redux/AuthReducer";



function App() {
  const dispatch = useDispatch();
  //? Add get request to user/me
  useEffect(() => {
    axios.get("http://localhost:5000/api/auth/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      dispatch(setUser(res.data.user));
      dispatch((setAuth(true)))
    })
  }, [])
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<MoviesWrapper />} />
          <Route path="addMovie" element={<AddMovieWrapper />} />
          <Route path="movie/:id" element={<MovieWrapper />} />
          <Route path="theatres" element={<Theatres />} />
        </Route>
        <Route path="/auth/" element={<AuthPage />}>
          <Route index element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="*" element={<h1 style={{ color: "red" }}>Not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
