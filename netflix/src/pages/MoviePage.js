import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";
import { TMDB_IMG_URL, options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { getId, setOpen, setTrailerMovie } from "../redux/slices/movieSlice";
import BackgroundVideo from "../components/BackgroundVideo";
import useMovieById from "../hooks/useMovieById";

const MoviePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const getMovieDetails = async (req, res) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}`,
        options
      );
      console.log("DATA", data);
      setMovie(data);
    } catch (error) {
      console.log("Error while fetching movie details");
    }
    setLoading(false);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  const handleWatchBtn = () => {
    dispatch(getId(id));
    dispatch(setOpen(true));
  };

  return (
    <div className="bg-black ">
      {loading === true ? (
        <div className="spinner">Loading...</div>
      ) : (
        <div className="max-w-[80vw] mx-auto bg-black opacity-90 text-white flex flex-col items-center justify-start min-h-screen pt-20 gap-3">
          <img
            src={`${TMDB_IMG_URL}/${movie.poster_path}`}
            alt="movie-banner"
            width={250}
            height={250}
          ></img>
          <h1 className="text-3xl font-bold">{movie.original_title}</h1>
          <p className=" mt-4">{movie.overview}</p>

          <div className="grid grid-cols-4 gap-10">
            <p><span className="font-semibold opacity-90">Langauge:</span> {movie.original_language}</p>
            <p><span className="font-semibold opacity-90">Release date:</span> {movie.release_date}</p>
            <p><span className="font-semibold opacity-90">Origin country:</span> {movie.origin_country}</p>
            <p><span className="font-semibold opacity-90">Popularity:</span> {movie.popularity}</p>
            <p><span className="font-semibold opacity-90">Budget:</span> {movie.budget}$</p>
            <p><span className="font-semibold opacity-90">IMDB ID:</span> {movie.imdb_id}</p>
            <p><span className="font-semibold opacity-90">Duration:</span> {movie.runtime} min</p>
            <p><span className="font-semibold opacity-90">Production company:</span> {movie.production_companies?.[0].name}</p>

          </div>
          <div className="flex gap-3 md:gap-5">
            <button
              className="bg-white opacity-100 text-black rounded-md p-2 hover:opacity-80 transition-all duration-300"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
            <button
              className="bg-white opacity-100 text-black rounded-md p-2 hover:opacity-80 transition-all duration-300"
              onClick={handleWatchBtn}
            >
              Watch Movie
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviePage;
