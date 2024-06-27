import React from 'react'
import MovieCard from './MovieCard'

const SearchMoviList = ({heading,moviesArray}) => {
  return (
    <div className='bg-black opacity-90'>
    <div className='max-w-[1300px] mx-auto pt-10 bg-black opacity-90 min-h-[82vh] text-white'>
        <h2 className='font-semibold text-xl mb-5 text-center '>{`Search results for "${heading}"`}</h2>
        <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {
               moviesArray && (
                moviesArray.map((movie)=>(
                    <MovieCard key={movie.id} movieId={movie.id} posterPath={movie.poster_path} cardWidth={60}/>
                ))
               )
            }
        </div>
    </div>
    
    </div>
  )
}

export default SearchMoviList;