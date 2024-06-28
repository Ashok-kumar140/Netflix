import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import MovieContainer from "../components/MovieContainer";
import SearchMovies from "../components/SearchMovies";
import HomeVideoContainer from "../components/HomeVideoContainer";
import { setOpen } from "../redux/slices/movieSlice";
import useMovieById from "../hooks/useMovieById";

const Home = () => {
  const user = useSelector((store) => store.auth.user);
  const toggle = useSelector((store) => store.movie.toggle);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // my custom hooks
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  // useMovieById()

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispatch(setOpen(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {toggle ? (
        <SearchMovies />
      ) : (
        <>
          <HomeVideoContainer />
          <MovieContainer />
        </>
      )}
      {/* <MovieContainer/> */}
    </>
  );
};

export default Home;
