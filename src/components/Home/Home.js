import React, { useEffect } from "react";
import styles from "./Home.module.css";
import Slider from "../Slider/Slider";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <div
        className={`${styles.section} w-100 vh-100 d-flex align-items-center `}
      >
        <div className="text-white shadow-0 container mb-5">
          <h2 className={styles.homeTitle}>Free Movies to Watch</h2>
          <h2 className={styles.homeTitle}>
            Here on<span className={styles.logoSpan}> Movify! </span>
          </h2>
          <p className={`${styles.homeSubTitle}  mt-4`}>
            Unlimited Movies, TV Shows, and More
          </p>

          <button className={`${styles.btnStyle} mt-2`}>Get Started</button>
        </div>
      </div>

      <Slider />
    </section>
  );
};

export default Home;
