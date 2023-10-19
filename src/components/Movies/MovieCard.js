import React from "react";
import { Link } from "react-router-dom";
import styles from "./MoviesDetails.module.css";

const Movie = ({ movie }) => {
  return (
    <div className="col-lg-3 col-md-6 rounded mb-5 text-center">
      <Link to={"/moviedetails/" + movie.id} className={`rounded ${styles.decoration}`}>
        <div>
          <img
            className="rounded w-100"
            style={{ width: "200px", height: "300px" }}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="text-center py-1">
          <p className="text-light">{movie.title}</p>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
