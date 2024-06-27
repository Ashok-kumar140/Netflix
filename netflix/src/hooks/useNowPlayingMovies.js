
import axios from "axios";
import { Now_Playing_Movie, options } from "../utils/constants";
import {useDispatch} from "react-redux";
import { setNowPlayingMovies } from "../redux/slices/movieSlice";

const useNowPlayingMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get("https://api.themoviedb.org/3/movie/now_playing", options);
        dispatch(setNowPlayingMovies(res.data.results));
    } catch (error) {
        console.log(error);
    }
}
export default useNowPlayingMovies;