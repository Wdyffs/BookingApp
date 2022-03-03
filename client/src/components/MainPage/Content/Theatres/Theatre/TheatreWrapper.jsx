import react from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Theatre from "./Theatre";

const TheatreWrapper = () => {
    const { id } = useParams();
    const cinema = useSelector(state => state.cinemas.cinemas.find(cinema => cinema._id === id))
    return (
        <Theatre cinema={cinema} />
    )
}

export default TheatreWrapper;