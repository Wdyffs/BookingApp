import { applyMiddleware, combineReducers, createStore } from "redux";
import AuthReducer from "./AuthReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import moviesReducer from "./moviesReducer";
const reducers = combineReducers({
  auth: AuthReducer,
  movies: moviesReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
