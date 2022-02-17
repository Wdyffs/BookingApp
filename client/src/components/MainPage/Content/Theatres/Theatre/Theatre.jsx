import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import style from "./Theatre.module.css"

const Theatre = () => {
    const { id } = useParams();
    const theatre = useSelector(state => state.cinemas.cinemas.find(cinema => cinema._id === id))
    return (
        <>
            <h1>{id}</h1>
            <img src={`${theatre.imageUrl}`} alt={`Cinema ${theatre.imageUrl}`} className={style.cinemaImage}/>
            <h2>{theatre.name}</h2>
        </>
    )
}

export default Theatre;