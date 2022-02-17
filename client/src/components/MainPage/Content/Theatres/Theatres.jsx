import React, { useEffect, useState } from "react";
import style from "./Theatres.module.css";

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
        {cinemas.map((cinema) => (
          <div className={style.theatreItem}>
            <a href="1">
              <img
                className={style.theatre}
                src={cinema.imageUrl}
                alt="Falcon Club"
              />
            </a>
            <h3>{cinema.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
