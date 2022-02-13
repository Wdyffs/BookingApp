const initialState = {
  movies: [],
};

const GET_MOVIES = "GET_MOVIES";
const DELETE_MOVIE = "DELETE_MOVIE"

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: [...action.payload] };
    case DELETE_MOVIE: {
      const arr = state.movies.filter(item => item._id !== action.payload._id)
      return { ...state, movies: arr}
    }

    default:
      return state;
  }
};

export const getMovies = (payload) => {
  return { type: GET_MOVIES, payload };
};
export const deleteMovie = (payload) => {
  return { type: DELETE_MOVIE, payload}
}
export default moviesReducer;
