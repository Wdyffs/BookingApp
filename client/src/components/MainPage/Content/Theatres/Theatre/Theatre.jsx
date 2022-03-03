import React from "react";
import style from "./Theatre.module.css"

const Theatre = ({cinema}) => {
    return (
        <>
            <section className={style.cinemaContainer}>
                <div className={style.cinemaImage}>
                    <img src={`${cinema.imageUrl}`} alt={`Cinema ${cinema.imageUrl}`} className={style.cinemaImage}/>
                </div>
                <div className={style.cinemaInfo}>
                    <h1 className={style.cinemaName}>{cinema.name}</h1>
                    <div className={style.mainInfo}>
                        <div className={style.infoField}>
                            <p>City</p>
                            <p>{cinema.city.name}</p>
                        </div>
                        <div className={style.infoField}>
                            <p>Halls</p>
                            <p>
                                {cinema.halls}
                            </p>
                        </div>
                        <div className={style.infoField}>
                            <p>Seats</p>
                            <p>{cinema.seats}</p>
                        </div>
                        <div className={style.infoField}>
                            <p>Address</p>
                            <p>{cinema.address}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Theatre;


