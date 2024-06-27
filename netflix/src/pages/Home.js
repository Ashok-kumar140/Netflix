import React, { useEffect } from "react";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import MovieContainer from "../components/MovieContainer";
import SearchMovies from "../components/SearchMovies";
import HomeVideoContainer from "../components/HomeVideoContainer";

const Home = () => {
  const user = useSelector(store => store.auth.user);
  const toggle = useSelector(store => store.movie.toggle);
  const navigate = useNavigate();

  // my custom hooks
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  useEffect(() => {
      if (!user) {
          navigate("/");
      }
  }, []);
  return (
    <>
      {toggle ? (
        <SearchMovies />
      ) : (
        <>
          <HomeVideoContainer/>
          <MovieContainer />
        </>
      )}
      {/* <MovieContainer/> */}
    </>
  );
};

export default Home;
