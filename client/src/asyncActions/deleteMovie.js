import api from "../http";
import { deleteMovie } from "../redux/moviesReducer";

export const delMovie = (movie) => {
    return (dispatch) => {
        api.delete(`/movie/deleteMovie/${movie._id}`).then((res) => {
            deleteMovie(movie);
            console.log('movie deleted', res.data.message)
        })
    };
};
