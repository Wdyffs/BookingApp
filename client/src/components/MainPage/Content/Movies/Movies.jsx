import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./Movies.module.css";
import axios from "axios";
import Pagination from "./Pagination";
import { fetchMovies } from "../../../../asyncActions/getMovies";
import MovieItem from "./MovieItem/MovieItem";

export const Movies = (props) => {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movies.movies);
  const [movies, setMovies] = useState(movieList);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(8);

  useEffect(() => setMovies(movieList), [movieList]);
  useEffect(() => dispatch(fetchMovies()), []);

  const lastMovieIndex = currentPage * moviesPerPage;
  const firstMovieIndex = lastMovieIndex - moviesPerPage;
  const currentMovies = movies.slice(firstMovieIndex, lastMovieIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <section className={style.moviesContainer}>
      <div></div>
      <h2 className={style.movieTitle}>Movies</h2>
      <div className={style.sortList}>
        <select className={style.selectItems}>
          <option disabled selected className={style.timeItems}>
            Theatre
          </option>
          <option className={style.timeItems}>13:00</option>
          <option className={style.timeItems}>13:30</option>
          <option className={style.timeItems}>14:00</option>
          <option className={style.timeItems}>14:30</option>
          <option className={style.timeItems}>15:00</option>
        </select>
        <select className={style.selectItems}>
          <option disabled selected className={style.timeItems}>
            Date
          </option>
          <option className={style.timeItems}>13:00</option>
          <option className={style.timeItems}>13:30</option>
          <option className={style.timeItems}>14:00</option>
          <option className={style.timeItems}>14:30</option>
          <option className={style.timeItems}>15:00</option>
        </select>
        <select className={style.selectItems}>
          <option disabled selected className={style.timeItems}>
            Time
          </option>
          <option className={style.timeItems}>13:00</option>
          <option className={style.timeItems}>13:30</option>
          <option className={style.timeItems}>14:00</option>
          <option className={style.timeItems}>14:30</option>
          <option className={style.timeItems}>15:00</option>
        </select>
      </div>
      <div className={style.movieList}>
        {currentMovies.map((movie) => (
          <MovieItem movie={movie} />
        ))}
      </div>
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
      />
    </section>
  );
};
