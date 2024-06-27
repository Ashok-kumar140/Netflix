import React from 'react'
import { useDispatch } from 'react-redux';
import { TMDB_IMG_URL } from '../utils/constants';
import { getId, setOpen } from '../redux/slices/movieSlice';
const MovieCard = ({ posterPath,movieId,cardWidth}) => {
    const dispatch = useDispatch();

    if (posterPath === null) return null;
  
    
  
    const handleOpen = () => {
      dispatch(getId(movieId));
      dispatch(setOpen(true));
    }
  
    return (
      <div className={`w-${cardWidth} mx-2 hover:scale-105 transition-all duration-300' onClick={handleOpen}`}>
        <img src={`${TMDB_IMG_URL}/${posterPath}`} alt="movie-banner" />
      </div>
    )
}

export default MovieCard