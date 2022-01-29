import React from "react";
import { NavLink } from "react-router-dom";
import style from "./MovieItem.module.css";

const MovieItem = (props) => {
  return (
    <div>
      <NavLink to={`movie/${props.movie.title}`} className={style.movieLink}>
        <img
          src={props.movie.imageUrl}
          className={style.movieImage}
          alt={`${props.movie.title} avatar`}
        />
        <h3 className={style.movieTitle}>{props.movie.title}</h3>
      </NavLink>
    </div>
  );
};

export default MovieItem;
