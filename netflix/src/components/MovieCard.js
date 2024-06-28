import React from 'react'
import { useDispatch } from 'react-redux';
import { TMDB_IMG_URL, options } from '../utils/constants';
import { getId, setTrailerMovie } from '../redux/slices/movieSlice';
import { useNavigate } from 'react-router-dom';
import useMovieById from '../hooks/useMovieById';
import axios from 'axios';
const MovieCard = ({ posterPath,movieId,cardWidth}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const getMovieById = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);

        // console.log(res.data.results);
        const trailer = res?.data?.results?.filter((item) => {
          return item.type === "Trailer";
        })
        dispatch(setTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0]));
      } catch (error) {
        console.log(error);
      }
    }

    if (posterPath === null) return null;
  
    
    const handleOpen = () => {
      dispatch(getId(movieId));
      getMovieById();
      
      navigate(`/movies/${movieId}`)
    }
  
    return (
      <div className={` mx-2 hover:scale-105 transition-all duration-300 w-${cardWidth}`}
      onClick={handleOpen}
      >
        <img src={`${TMDB_IMG_URL}/${posterPath}`} alt="movie-banner" loading='lazy' />
      </div>
    )
}

export default MovieCard