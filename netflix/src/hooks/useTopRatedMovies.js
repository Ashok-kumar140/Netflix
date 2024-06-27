import axios from "axios";
import {  options } from "../utils/constants";
import {useDispatch} from "react-redux";
import { setTopRatedMovie } from "../redux/slices/movieSlice";

const useTopRatedMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get("https://api.themoviedb.org/3/movie/top_rated", options);
        dispatch(setTopRatedMovie(res.data.results));
    } catch (error) {
        console.log(error);
    }
}
export default useTopRatedMovies;