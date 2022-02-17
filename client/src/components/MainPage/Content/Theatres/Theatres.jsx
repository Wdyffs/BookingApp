import React from "react";
import style from "./Theatres.module.css";
import TheatreItem from "./TheatreItem/TheatreItem";

export const Theatres = ({cinemas}) => {
  return (
    <section className={style.theatresContainer}>
      <h2 className={style.theatreTitle}>Movies</h2>
      <div className={style.sortList}>
        <select className={style.selectItems}>
          <option disabled selected className={style.timeItems}>
            City
          </option>
          <option className={style.timeItems}>Minsk</option>
          <option className={style.timeItems}>Gomel</option>
          <option className={style.timeItems}>Grodno</option>
          <option className={style.timeItems}>Brest</option>
          <option className={style.timeItems}>Mogilev</option>
        </select>
        <select className={style.selectItems}>
          <option disabled selected className={style.timeItems}>
            Theatre
          </option>
          <option className={style.timeItems}>MinskClub</option>
          <option className={style.timeItems}>SilverScreen</option>
          <option className={style.timeItems}>Belarus</option>
          <option className={style.timeItems}>Mir</option>
        </select>
      </div>
      <div className={style.theatreList}>
        {cinemas.map((cinema) => <TheatreItem cinema={cinema} key={cinema._id}/>)}
      </div>
    </section>
  );
};
