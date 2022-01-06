import React from "react";
import style from "./Movies.module.css"

export const Movies = (props) => {
  return (
    <section className={style.moviesContainer}>
      <h2 className={style.movieTitle}>Movies</h2>
      <div className={style.sortList}>
        <select className={style.selectItems}>
          <option disabled selected className={style.timeItems}>Theatre</option>
          <option className={style.timeItems}>13:00</option>
          <option className={style.timeItems}>13:30</option>
          <option className={style.timeItems}>14:00</option>
          <option className={style.timeItems}>14:30</option>
          <option className={style.timeItems}>15:00</option>
        </select>
        <select className={style.selectItems}>
          <option disabled selected className={style.timeItems}>Date</option>
          <option className={style.timeItems}>13:00</option>
          <option className={style.timeItems}>13:30</option>
          <option className={style.timeItems}>14:00</option>
          <option className={style.timeItems}>14:30</option>
          <option className={style.timeItems}>15:00</option>
        </select>
        <select className={style.selectItems}>
          <option disabled selected className={style.timeItems}>Time</option>
          <option className={style.timeItems}>13:00</option>
          <option className={style.timeItems}>13:30</option>
          <option className={style.timeItems}>14:00</option>
          <option className={style.timeItems}>14:30</option>
          <option className={style.timeItems}>15:00</option>
        </select>
      </div>
      <div className={style.movieList}>
        <a><img className={style.movie} src="/images/Movie.png" alt="Movie" /></a>
        <a><img className={style.movie} src="/images/Movie.png" alt="Movie" /></a>
        <a><img className={style.movie} src="/images/Movie.png" alt="Movie" /></a>
        <a><img className={style.movie} src="/images/Movie.png" alt="Movie" /></a>
        <a><img className={style.movie} src="/images/Movie.png" alt="Movie" /></a>
        <a><img className={style.movie} src="/images/Movie.png" alt="Movie" /></a>
        <a><img className={style.movie} src="/images/Movie.png" alt="Movie" /></a>
        <a><img className={style.movie} src="/images/Movie.png" alt="Movie" /></a>
        <a><img className={style.movie} src="/images/Movie.png" alt="Movie" /></a>
        <a><img className={style.movie} src="/images/Movie.png" alt="Movie" /></a>
        <a><img className={style.movie} src="/images/Movie.png" alt="Movie" /></a>
        <a><img className={style.movie} src="/images/Movie.png" alt="Movie" /></a>
        <a><img className={style.movie} src="/images/Movie.png" alt="Movie" /></a>
        <a><img className={style.movie} src="/images/Movie.png" alt="Movie" /></a>
        <a><img className={style.movie} src="/images/Movie.png" alt="Movie" /></a>
      </div>
    </section>
  )
}