import api from "../http";
import { getCinemas } from "../redux/CinemaReducer";

export const fetchCinemas = () => {
  return (dispatch) => {
    api.get("/cinema/cinemas").then((res) => {
      debugger;
      dispatch(getCinemas(res.data.cinemas));
    });
  };
};
