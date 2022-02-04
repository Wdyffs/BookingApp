import {setAuth, setUser} from "../redux/AuthReducer";
import api from "../http";

export const authUser = () => {
    return dispatch => {
        api.get("/api/auth/me")
            .then(res => {
                dispatch(setUser(res.data.user));
                dispatch(setAuth(true));
            })
    }
}