import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../../../asyncActions/getMovies";
import {Movies} from "./Movies";
import axios from "axios";

export const MoviesWrapper = (props) => {
    const dispatch = useDispatch();
    const movieList = useSelector((state) => state.movies.movies);
    const [isLoading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage] = useState(8);
    const [isDeletedMovie, setDeletedMovie] = useState(false)

    useEffect(() => {
        dispatch(fetchMovies());
        setLoading(false)
    }, [isDeletedMovie]);

    const lastMovieIndex = currentPage * moviesPerPage;
    const firstMovieIndex = lastMovieIndex - moviesPerPage;
    const currentMovies = movieList.slice(firstMovieIndex, lastMovieIndex);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const deleteMovie = (movie) => {
        axios.delete(`http://localhost:5000/movie/deleteMovie/${movie._id}`)
            .then(res => setDeletedMovie(true))
        setDeletedMovie(false);
    }
    return  <>
        {isLoading ? <button>Loading</button>
            : <Movies currentMovies={currentMovies}
                      movies={movieList}
                      moviesPerPage={moviesPerPage}
                      paginate={paginate}
                      deleteMovie={deleteMovie}
            />}

    </>
};
