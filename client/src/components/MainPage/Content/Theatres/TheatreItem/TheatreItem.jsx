import React from "react";
import style from "./TheatreItem.module.css"
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {delCinema} from "../../../../../asyncActions/removeCinema";

const TheatreItem = ({cinema}) => {
    const dispatch = useDispatch();
    const deleteTheatre = (theatre) => {
        dispatch(delCinema(theatre));
    }

    return (
        <div className={style.cinemaItemContainer}>
            <Link to={`/theatres/${cinema._id}`} className={style.cinemaLink}>
                <img
                    className={style.cinemaImage}
                    src={cinema.imageUrl}
                    alt="Falcon Club"
                />
                <h3 className={style.cinemaName}>{cinema.name}</h3>
            </Link>
            <button type="button"
                    className={style.deleteCinemaBtn}
                    onClick={() => deleteTheatre(cinema)}>-</button>
        </div>
    )
}

export default TheatreItem;