import React from "react";
import { Link } from "react-router-dom";
import styles from "./TvsDetails.module.css";

const TvCard = ({ tv }) => {
  return (
    <div className="col-lg-3 col-md-6 rounded mb-5 text-center">
      <Link to={"/tvdetails/" + tv.id} className={`rounded ${styles.decoration}`}>
        <div>
          <img
            className="rounded w-100"
            style={{ width: "200px", height: "300px" }}
            src={`https://image.tmdb.org/t/p/w500/${
              tv.backdrop_path ? tv.backdrop_path : tv.poster_path
            }`}
            alt={tv.original_name}
          />
        </div>
        <div className="text-center py-1">
          <p className="text-light">{tv.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default TvCard;
