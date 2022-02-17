import React from "react";
import style from "./TheatreItem.module.css"
import {Link} from "react-router-dom";

const TheatreItem = ({cinema}) => {
    return (
        <div className={style.theatreItem}>
            <Link to={`/theatre/${cinema._id}`}>
                <img
                    className={style.theatre}
                    src={cinema.imageUrl}
                    alt="Falcon Club"
                />
                <h3>{cinema.name}</h3>
            </Link>
        </div>
    )
}

export default TheatreItem;