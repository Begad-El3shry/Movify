export const setMovies = (movies) => {
  return {
    type: "SET_MOVIES",
    payload: movies,
  };
};

export const setTvs = (tvs) => {
  return {
    type: "SET_TVS",
    payload: tvs,
  };
};

export const setFavorites = (favorites) => {
  return {
    type: "SET_FAVORITES",
    payload: favorites,
  };
};

export const setMoviesPage = (moviesPage) => {
  return {
    type: "SET_MOVIES_PAGE",
    payload: moviesPage,
  };
};

export const setTvsPage = (tvsPage) => {
  return {
    type: "SET_TVS_PAGE",
    payload: tvsPage,
  };
};
