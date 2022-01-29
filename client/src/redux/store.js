import { applyMiddleware, combineReducers, createStore } from "redux";
import AuthReducer from "./AuthReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import moviesReducer from "./moviesReducer";
import cinemasReducer from "./CinemaReducer";
const reducers = combineReducers({
  auth: AuthReducer,
  movies: moviesReducer,
  cinemas: cinemasReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
