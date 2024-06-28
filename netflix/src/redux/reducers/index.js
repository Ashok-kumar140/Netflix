
import { combineReducers } from "@reduxjs/toolkit"

import authReducer from "../slices/authSlice"
import movieReducer from "../slices/movieSlice";
import searchReducer from '../slices/searchMovieSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    movie:movieReducer,
    search:searchReducer,

})

export default rootReducer;