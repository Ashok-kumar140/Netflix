import React from "react";
import useMovieById from "../hooks/useMovieById";
import { useSelector } from "react-redux";

const BackgroundVideo = ({ movieId, bool }) => {
  const { trailerMovie } = useSelector((state) => state.movie);
  // useMovieById(movieId);
  // console.log("Trailer",trailerMovie);

  return (
    <div className="w-[vw] overflow-hidden">
      <iframe
        className={`${bool ? "w-[100%] h-[72vh]" : "w-screen aspect-video"} `}
        src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
