import React from "react";
import { useSelector } from "react-redux";
import Movie from "../Movies/MovieCard";

const Favorites = () => {
  const favoritesList = useSelector((state) => state.favorites);

  return (
    <section className="bg-black">
      <div className="container">
        <div className="d-flex justify-content-between align-aitems-center">
          <h1 className="text-center text-light py-5">Favorites</h1>
        </div>

        <div className="row py-4 rounded">
          {favoritesList?.map((movieData,index) => (
            <Movie key={index} movie={movieData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
