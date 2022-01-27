const initialState = {
  user: {},
  isAuth: false,
};

const SET_AUTH = "SET_AUTH";
const SET_USER = "SET_USER";
const LOGOUT = "LOGOUT";

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, isAuth: action.isAuth };
    case SET_USER:
      return { ...state, user: action.user };
    case LOGOUT:
      return { ...state, user: {}, isAuth: false };
    default:
      return state;
  }
};

export const setAuth = (isAuth) => {
  return { type: SET_AUTH, isAuth };
};
export const setUser = (user) => {
  return { type: SET_USER, user };
};
export const logout = () => {
  return { type: LOGOUT };
};
export default AuthReducer;
