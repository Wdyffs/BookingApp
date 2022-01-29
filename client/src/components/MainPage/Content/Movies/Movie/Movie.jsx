import React from "react";
import style from "./Movie.module.css";

const Movie = (props) => {
  return (
    <section className={style.movieContainer}>
      <div>Image</div>
      <div>Desription</div>
    </section>
  );
};

export default Movie;
