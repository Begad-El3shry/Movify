import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./MoviesDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../../redux/actions";

const MoviesDetails = () => {
  const params = useParams();
  const [movieData, setMovieData] = useState({});
  const [btnContent, setBtnContent] = useState("Add to Favorite");

  const favoritesList = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const getItemData = async (movie_id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=dc6d500d3a2fe12c724521a9ca5e67ea`
    );
    const data = await response.json();
    setMovieData(data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getItemData(params.id);
  }, [params.id]);

  const addToFavorite = () => {
    let newFavoritesList = favoritesList;
    if (!newFavoritesList.includes(movieData)) {
      newFavoritesList.push(movieData);
    }
    dispatch(setFavorites(newFavoritesList));
    setBtnContent("Added");
  };

  return (
    <section className="bg-black">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-7 col-sm-12">
            <div>
              <img
                className="rounded w-100"
                src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
                alt={movieData.title}
              />
            </div>
          </div>
          <div className="col-lg-7 col-md-5 col-sm-12">
            <div className="text-white ">
              <h4 className="fw-bold mt-4">
                Movie Name : <span>{movieData.title}</span>
              </h4>
              <p className="mt-4">
                <span className="fw-bold fs-4"> Overview : </span>
                <span className={styles.spanColor}>{movieData.overview}</span>
              </p>
              <p className="mt-4">
                <span className="fw-bold fs-4"> Date : </span>
                <span className={styles.spanColor}>
                  {movieData.release_date}
                </span>{" "}
              </p>
              <p className="mt-4">
                <span className="fw-bold fs-4"> Movie language : </span>
                <span className={styles.spanColor}>
                  {movieData.original_language}
                </span>{" "}
              </p>
              <p className="mt-4">
                <span className="fw-bold fs-4"> Runtime : </span>
                <span className={styles.spanColor}>
                  {movieData.runtime} min.
                </span>
              </p>
            </div>
            <button className="btn btn-warning mt-5" onClick={addToFavorite}>
              {btnContent}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviesDetails;
