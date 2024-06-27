import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieName: null,
  searchedMovie: null,
};
const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    // actions
    setSearchMovieDetails(state, value) {
      const { searchMovie, movies } = value.payload;
      state.movieName = searchMovie;
      state.searchedMovie = movies;
    },
  },
});
export const { setSearchMovieDetails } = searchSlice.actions;
export default searchSlice.reducer;
