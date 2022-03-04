import api from "../http";
import {deleteCinema} from "../redux/CinemaReducer";

export const delCinema = (cinema) => {
    return (dispatch) => {
        api.delete(`/cinema/delete/${cinema._id}`).then((res) => {
            dispatch(deleteCinema(cinema));
            console.log('message: ', res.data.message)
        })
    };
};