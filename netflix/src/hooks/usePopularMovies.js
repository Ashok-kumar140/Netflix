import axios from "axios";
import { options } from '../utils/constants';
import {useDispatch} from "react-redux";
import { setPopularMovie } from "../redux/slices/movieSlice";


const usePopularMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get("https://api.themoviedb.org/3/movie/popular", options);
        dispatch(setPopularMovie(res.data.results))
    } catch (error) {
        console.log(error);
    }
}

export default usePopularMovies;