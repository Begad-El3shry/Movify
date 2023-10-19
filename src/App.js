import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SignUp from "./components/Signup/SignupForm";
import Movies from "./components/Movies/Movies";
import Tvs from "./components/Tvs/Tvs";
import Footer from "./components/Footer/Footer";

import "./App.css";
import { setMovies, setTvs } from "./redux/actions";
import MoviesDetails from "./components/Movies/MoviesDetails";
import TvsDetails from "./components/Tvs/TvsDetails";
import Favorites from "./components/Favorites/Favorites";

const Movies_API_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=dc6d500d3a2fe12c724521a9ca5e67ea";

const TVS_API_URL =
  "https://api.themoviedb.org/3/discover/tv?api_key=dc6d500d3a2fe12c724521a9ca5e67ea";

function App() {
  const moviesPage = useSelector((state) => state.moviesPage);
  const tvsPage = useSelector((state) => state.tvsPage);
  const dispatchMovies = useDispatch();
  const dispatchTvs = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function getMovies() {
      const response = await fetch(`${Movies_API_URL}&page=${moviesPage}`);
      const data = await response.json();
      dispatchMovies(setMovies(data.results));
    }
    getMovies();
  }, [dispatchMovies, moviesPage]);

  useEffect(() => {
    async function getTvs() {
      const response = await fetch(`${TVS_API_URL}&page=${tvsPage}`);
      const data = await response.json();
      dispatchTvs(setTvs(data.results));
    }
    getTvs();
  }, [dispatchTvs, tvsPage]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/moviedetails/:id" element={<MoviesDetails />} />
        <Route path="/tvs" element={<Tvs />} />
        <Route path="/tvdetails/:id" element={<TvsDetails />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
