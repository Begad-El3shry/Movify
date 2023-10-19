import React, { useEffect } from "react";
import Movie from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { setMoviesPage } from "../../redux/actions";

const Movies = () => {
  const movies = useSelector((state) => state.movies);
  const page = useSelector((state)=>state.moviesPage);
  const dispatchPage = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getPrevPage = () => {
    let currentPage = page;
    if (!currentPage <= 1) {
      currentPage = currentPage - 1;
      dispatchPage(setMoviesPage(currentPage));
    }
  };
  const getNextPage = () => {
    let currentPage = page;
    currentPage = currentPage + 1;
    dispatchPage(setMoviesPage(currentPage));
  };

  return (
    <section className="bg-black">
      <div className="container">
        <div className="d-flex justify-content-between align-aitems-center">
          <h1 className="text-center text-light py-5">Movies</h1>
          <div className="d-flex align-items-center">
            <button
              className="btn btn-success"
              disabled={page <= 1 ? true : false}
              onClick={getPrevPage}
            >
              Prev
            </button>
            <button className="btn btn-success ms-2" onClick={getNextPage}>
              Next
            </button>
          </div>
        </div>

        <div className="row py-4 rounded">
          {movies?.map((movieData) => (
            <Movie key={movieData.id} movie={movieData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Movies;
