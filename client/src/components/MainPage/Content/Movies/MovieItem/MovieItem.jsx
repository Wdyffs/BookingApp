import React from "react";
import { Link } from "react-router-dom";
import style from "./MovieItem.module.css";
import {useDispatch} from "react-redux";
import {deleteMovie} from "../../../../../redux/moviesReducer";

const MovieItem = ({movie, deleteMovie}) => {
    const dispatch = useDispatch();
    const deleteMov = () => {
        dispatch(deleteMovie(movie));
    }


  return (
    <div className={style.movieItemContainer}>
      <Link to={`movies/${movie._id}`} className={style.movieLink}>
        <img
          src={movie.imageUrl}
          className={style.movieImage}
          alt={`${movie.title} avatar`}
        />
        <h3 className={style.movieTitle}>{movie.title}</h3>
      </Link>
        <button type="button"
                className={style.deleteButton}
                onClick={() => deleteMovie(movie)}>-</button>
    </div>
  );
};

export default MovieItem;
