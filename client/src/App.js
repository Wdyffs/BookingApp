import React, {useEffect} from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthPage } from "./components/AuthPage/AuthPage";
import { MainPage } from "./components/MainPage/MainPage";
import { LoginPage } from "./components/AuthPage/LoginPage/LoginPage";
import { RegisterPage } from "./components/AuthPage/RegisterPage/RegisterPage";
import MovieWrapper from "./components/MainPage/Content/Movies/Movie/MovieWrapper";
import {MoviesWrapper} from "./components/MainPage/Content/Movies/MoviesWrapper";
import AddMovieWrapper from "./components/MainPage/Content/Movies/AddMovie/AddMovieWrapper";
import {useDispatch} from "react-redux";
import {authUser} from "./asyncActions/authUser";
import {TheatresWrapper} from "./components/MainPage/Content/Theatres/TheatresWrapper";
import AddCinemaWrapper from "./components/MainPage/Content/Theatres/AddCinema/AddCinemaWrapper";
import TheatreWrapper from "./components/MainPage/Content/Theatres/Theatre/TheatreWrapper";



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(authUser());
      console.log('dispatching user')
    }
  }, [])
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<MoviesWrapper />} />
          <Route path="movie/add" element={<AddMovieWrapper />} />
          <Route path="movies/:id" element={<MovieWrapper />} />
          <Route path="theatres" element={<TheatresWrapper />} />
          <Route path="theatres/:id" element={<TheatreWrapper />} />
          <Route path="theatres/cinema/addCinema" element={<AddCinemaWrapper />} />
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
