const initialState = {
  movies: [],
};

const GET_MOVIES = "GET_MOVIES";

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: [...action.payload] };
    default:
      return state;
  }
};

export const getMovies = (payload) => {
  return { type: GET_MOVIES, payload };
};
export default moviesReducer;
