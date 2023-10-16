
import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../component/Constent";
import { addNowPlayingMovie } from "../util/movieSlice";
import { useEffect } from "react";

const useNowPlayingmovie = () => {
  const now_playing = useSelector(store=> store.movie.NowPlayingMovie)
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTION
    );
    const json = await data.json();
   
    dispatch(addNowPlayingMovie(json.results));
  };

  useEffect(() => {
    !now_playing && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingmovie;
