const initialState = {
  movies: [],
  tvs: [],
  favorites: [],
  moviesPage: 1,
  tvsPage: 1,
  lang: "en-US",
};

const Reducer = (state = initialState, action) => {
  if (action.type === "SET_MOVIES") {
    return {
      ...state,
      movies: action.payload,
    };
  } else if (action.type === "SET_TVS") {
    return {
      ...state,
      tvs: action.payload,
    };
  } else if (action.type === "SET_MOVIES_PAGE") {
    return {
      ...state,
      moviesPage: action.payload,
    };
  } else if (action.type === "SET_TVS_PAGE") {
    return {
      ...state,
      tvsPage: action.payload,
    };
  } else if (action.type === "SET_FAVORITES") {
    return {
      ...state,
      favorites: action.payload,
    };
  }
  return state;
};

export default Reducer;
