import React from "react";
import { useSelector } from "react-redux";

import styles from "./Slider.module.css";
import { Link } from "react-router-dom";

const Slider = () => {
  const trendingMovies = useSelector((state) => state.movies);
  const trendingTvs = useSelector((state) => state.tvs);

  return (
    <section>
      <section className="bg-black">
        <div className="container py-5">
          <h3 className="text-white">Trending Movies...</h3>
          <div className="row pt-5">
            {trendingMovies?.slice(0, 12).map((movieData, index) => (
              <div
                key={index}
                className={`col-lg-2 col-md-4 mb-4 ${styles.imgBox}`}
              >
                <img
                  className={`w-100 ${styles.img}`}
                  src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
                  alt={movieData.title}
                />
              </div>
            ))}
          </div>
          <Link to='/movies'><button className={`${styles.moreBtn}`}>More</button></Link>

        </div>
      </section>
      <section className="bg-black">
        <div className="container py-5">
          <h3 className="text-white">Trending Tvs...</h3>
          <div className="row pt-5">
            {trendingTvs?.slice(0, 12).map((tvData, index) => (
              <div
                key={index}
                className={`col-lg-2 col-md-4 mb-4 ${styles.imgBox}`}
              >
                <img
                  className={`w-100 ${styles.img}`}
                  src={`https://image.tmdb.org/t/p/w500/${tvData.poster_path}`}
                  alt={tvData.title}
                />
              </div>
            ))}
          </div>
          <Link to='/tvs'><button className={`${styles.moreBtn}`}>More</button></Link>
        </div>
      </section>
    </section>
  );
};

export default Slider;
