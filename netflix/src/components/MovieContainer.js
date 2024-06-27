import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const MovieContainer = () => {

    const movie = useSelector((state)=>state.movie);
  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-10">
        <MoviesList title={"Popular Movies"} movies={movie.popularMovie} />
        <MoviesList
          title={"Now Playing Movies"}
          movies={movie.nowPlayingMovies}
        />
        <MoviesList title={"Top Rated Movies"} movies={movie.topRatedMovies} />
        <MoviesList title={"Upcoming Movies"} movies={movie.upcomingMovies} />
      </div>
    </div>
  );
};

export default MovieContainer;
