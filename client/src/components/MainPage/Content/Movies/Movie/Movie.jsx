import React from "react";
import style from "./Movie.module.css";

const Movie = ({movie, isLoading}) => {
  return (
      <>
          {isLoading ? <span>Loading</span>
              : <section className={style.movieContainer}>
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
                          <p>
                              {movie.actors.map(a => <span key={a._id}>{`${a.firstName} ${a.lastName}, `}</span>)}
                          </p>
                      </div>
                      <div className={style.infoField}>
                          <p>Genre</p>
                          <p>{movie.genre.map(g => <span key={g._id}>{`${g.name}, `}</span>)}</p>
                      </div>
                      <div className={style.infoField}>
                          <p>Age Restriction</p>
                          <p>{movie.ageRestriction }</p>
                      </div>
                  </div>
                  <div className={style.movieDescription}>
                      <h2>Description</h2>
                      <p>{movie.description }</p>
                  </div>
              </div>
          </section>}
      </>
  );
};

export default Movie;
