import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Movie.module.css";

const Movie = (props) => {
  const { title } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/movie/movie/${title}`)
      .then((res) => {
        setMovie(res.data.movie);
      })
      .catch((e) => console.log(e.message));
  }, [title]);
  return (
    <section className={style.movieContainer}>
      <div className={style.movieLogo}>
        <img src={movie.imageUrl} alt="MovieAvatar" />
      </div>
      <div className={style.movieInfo}>
        <h2>{movie.title}</h2>
        <div className={style.mainInfo}>
          <ul className={style.movieFields}>
            <li className={style.Field}>
              <input
                type="text"
                className={style.input}
                value="desctiprion"
                disabled
              />
            </li>
            <li className={style.Field}>Genre</li>
            <li className={style.Field}>Age restriction</li>
          </ul>
          <ul className={style.movieValues}>
            <li className={style.fieldValue}>{movie.duration}</li>
            <li className={style.fieldValue}>{movie.genre}</li>
            <li className={style.fieldValue}>{movie.ageRestriction}</li>
          </ul>
        </div>
        <div>Desription</div>
      </div>
    </section>
  );
};

export default Movie;
