import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovie:null,
        topRatedMovies:null,
        upcomingMovies:null,
        toggle:false,
        trailerMovie:null, 
        open:false,
        id:"",
    },
    reducers:{
        // actions
        setNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        setPopularMovie:(state,action)=>{
            state.popularMovie = action.payload;
        },
        setTopRatedMovie:(state,action)=>{
            state.topRatedMovies = action.payload;
        },
        setUpcomingMovie:(state,action)=>{
            state.upcomingMovies = action.payload;
        },
        setToggle:(state)=>{
            state.toggle = !state.toggle;
        },
        setTrailerMovie:(state,action)=>{
            state.trailerMovie = action.payload;
        },
        setOpen:(state,action)=>{
            state.open = action.payload;
        },
        getId:(state,action)=>{
            state.id = action.payload;
        }
    }
});
export const {setNowPlayingMovies, setPopularMovie, setTopRatedMovie, setUpcomingMovie,setToggle,setTrailerMovie,setOpen,getId} = movieSlice.actions;
export default movieSlice.reducer;