import api from "../http";
import { getMovies } from "../redux/moviesReducer";

export const fetchMovies = () => {
  return (dispatch) => {
    api.get("/movie/movies").then((res) => {
      dispatch(getMovies(res.data));
    });
  };
};
