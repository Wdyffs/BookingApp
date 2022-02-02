import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "./Movie";

const MovieWrapper = (props) => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        // setLoading(true);
        axios
            .get(`http://localhost:5000/movie/movie/${id}`)
            .then((res) => {
                setMovie(res.data.movie);
                setLoading(false);
            })
            .catch((e) => console.log(e.message));
    }, []);


    return (
        <Movie movie={movie} isLoading={isLoading}/>
    );
};

export default MovieWrapper;
