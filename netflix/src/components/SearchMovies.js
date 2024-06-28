import React, { useState } from "react";
import { options } from "../utils/constants";
import axios from "axios";
import SearchMoviList from './SearchMoviList';
import {useDispatch, useSelector} from 'react-redux';
import {setSearchMovieDetails} from '../redux/slices/searchMovieSlice';
const SearchMovies = () => {
  const [searchMoviesArray,setSearchMoviesArray]= useState([]);
  const [searchQuery,setSearchQuery] = useState("");
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const {movieName,searchedMovie} = useSelector((state)=>state.search)

  console.log("Searched Movie",searchedMovie);


  const SearchHandler = async(e)=>{
    e.preventDefault();
    try{

      const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,options);
      console.log("SEARCH RESULT",data);
      setSearchMoviesArray(data?.results);
      const movies = data?.results;
      dispatch(setSearchMovieDetails({searchMovie:searchQuery, movies:movies}));

    }catch(error){
      console.log("Error while searching your query");
    }
  }

  return (
    <>
      <div className="flex justify-center pt-[10%] w-[100%] bg-black opacity-90">
        <form onSubmit={SearchHandler} className="w-[50%] bg-black opacity-90">
          <div className="flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%] gap-2 ">
            <input
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              className="w-full outline-none rounded-md text-lg"
              type="text"
              placeholder="Search Movies..."
            />
            <button className="bg-red-800 text-white rounded-md px-4 py-2">
              {loading ? "loading..." : "Search"}
            </button>
          </div>
        </form>
      </div>
      {searchedMovie?.length>0 ? (
        <SearchMoviList
          heading={movieName}
          // searchMovie={true}
          moviesArray={searchedMovie}
        />
      ) : (
        <h1 className="text-white min-h-[80vh] bg-black opacity-90 text-center flex items-center justify-center text-3xl">Movie Not Found!!</h1>
      )}
    </>
  );
};

export default SearchMovies;
