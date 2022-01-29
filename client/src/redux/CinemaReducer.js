const initialState = {
  cinemas: [],
};

const GET_CINEMAS = "GET_CINEMAS";

const cinemasReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CINEMAS:
      return { ...state, cinemas: [...action.payload] };
    default:
      return state;
  }
};

export const getCinemas = (payload) => {
  return { type: GET_CINEMAS, payload };
};
export default cinemasReducer;
