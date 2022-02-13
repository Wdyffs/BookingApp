import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Movies.module.css";
import Pagination from "./Pagination";
import MovieItem from "./MovieItem/MovieItem";

export const Movies = ({currentMovies, moviesPerPage, paginate, movies, deleteMovie}) => {
  return (
    <section className={style.moviesContainer}>
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
        <NavLink to="addMovie">Add Movie</NavLink>
      </div>
      <div className={style.movieList}>
        {currentMovies.map((movie) => (
          <MovieItem movie={movie} key={movie._id} deleteMovie={deleteMovie}/>
        ))}
      </div>
      <div className={style.pagination}>
        <Pagination
            moviesPerPage={moviesPerPage}
            totalMovies={movies.length}
            paginate={paginate}
        />
      </div>

    </section>
  );
};
