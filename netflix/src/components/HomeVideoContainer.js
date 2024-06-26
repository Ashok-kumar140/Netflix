import React from 'react'

import {useSelector} from "react-redux";
import BackgroundVideo from './BackgroundVideo';
import VideoTitle from './VideoTitle';

const HomeVideoContainer = () => {
  const movie = useSelector(store=>store.movie?.nowPlayingMovies);
  if(!movie) return; // early return in react
 
  const {overview, id, title} = movie[0];
  
  return (
    <div>
        <VideoTitle title={title} overview={overview}/>
        <BackgroundVideo movieId={id} bool={false}/>
    </div>
  )
}

export default HomeVideoContainer;