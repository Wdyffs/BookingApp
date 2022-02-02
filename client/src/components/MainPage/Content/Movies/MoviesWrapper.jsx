import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./Movies.module.css";
import axios from "axios";
import Pagination from "./Pagination";
import { fetchMovies } from "../../../../asyncActions/getMovies";
import MovieItem from "./MovieItem/MovieItem";
import {Movies} from "./Movies";

export const MoviesWrapper = (props) => {
    const dispatch = useDispatch();
    const movieList = useSelector((state) => state.movies.movies);
    const [isLoading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage] = useState(8);

    useEffect(() => {
        dispatch(fetchMovies());
        setLoading(false)
    }    , []);

    const lastMovieIndex = currentPage * moviesPerPage;
    const firstMovieIndex = lastMovieIndex - moviesPerPage;
    const currentMovies = movieList.slice(firstMovieIndex, lastMovieIndex);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return  <>
        {isLoading ? <button>Loading</button>
            : <Movies currentMovies={currentMovies}
                      movies={movieList}
                      moviesPerPage={moviesPerPage}
                      paginate={paginate}/>}

    </>
};
