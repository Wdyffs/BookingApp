const initialState = {
  cinemas: [],
};

const GET_CINEMAS = "GET_CINEMAS";
const DELETE_CINEMA = "DELETE_CINEMA"

const cinemasReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CINEMAS:
      return { ...state, cinemas: [...action.payload] };
    case DELETE_CINEMA: {
      const arr = state.cinemas.filter(item => item._id !== action.payload._id)
      return { ...state, cinemas: arr}
    }
    default:
      return state;
  }
};

export const getCinemas = (payload) => {
  return { type: GET_CINEMAS, payload };
};
export const deleteCinema = (payload) => {
  return { type: DELETE_CINEMA, payload}
}
export default cinemasReducer;
