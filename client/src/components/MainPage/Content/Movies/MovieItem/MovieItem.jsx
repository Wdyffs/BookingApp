import React from "react";
import { Link } from "react-router-dom";
import style from "./MovieItem.module.css";

const MovieItem = (props) => {
  return (
    <div>
      <Link to={`movie/${props.movie._id}`} className={style.movieLink}>
        <img
          src={props.movie.imageUrl}
          className={style.movieImage}
          alt={`${props.movie.title} avatar`}
        />
        <h3 className={style.movieTitle}>{props.movie.title}</h3>
      </Link>
    </div>
  );
};

export default MovieItem;
