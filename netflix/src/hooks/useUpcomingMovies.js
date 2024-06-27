import axios from "axios";
import {options } from "../utils/constants";
import {useDispatch} from "react-redux";
import { setUpcomingMovie } from "../redux/slices/movieSlice";

const useUpcomingMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get("https://api.themoviedb.org/3/movie/upcoming", options);
        dispatch(setUpcomingMovie(res.data.results));
    } catch (error) {
        console.log(error);
    }
}
export default useUpcomingMovies;