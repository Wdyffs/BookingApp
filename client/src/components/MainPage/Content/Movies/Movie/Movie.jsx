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
          <h1 className={style.movieTitle}>{movie.title}</h1>
        <div className={style.mainInfo}>
            <div className={style.infoField}>
                <p>Duration</p>
                <p>{movie.duration}</p>
            </div>
            <div className={style.infoField}>
                <p>Actors</p>
                {/*!== 0  ? movie.actors : "Bred Pit"*/}
                <p>{movie.actors}</p>
            </div>
            <div className={style.infoField}>
                <p>Genre</p>
                {/*!== 0 ? movie.genre : "horror, adventure"*/}
                <p>{movie.genre}</p>
            </div>
            <div className={style.infoField}>
                <p>Age Restriction</p>
                {/*? movie.ageRestriction : "18+"*/}
                <p>{movie.ageRestriction }</p>
            </div>
        </div>
          <div className={style.movieDescription}>
              <h2>Description</h2>
              {/*? movie.description : "Default Description"*/}
              <p>{movie.description }</p>
          </div>
      </div>
    </section>
  );
};

export default Movie;
