
import { useDispatch } from "react-redux";
import { API_OPTION } from "../component/Constent";
import { setPopulerMovie } from "../util/movieSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const usePopulerMovie = () => {
  const PopulerMovie = useSelector(store=> store.movie.PopulerMovie)
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      API_OPTION
    );
    const json = await data.json();
  
    dispatch(setPopulerMovie(json.results));
  };

  useEffect(() => {
    !PopulerMovie && getNowPlayingMovies();
  }, []);
};

export default usePopulerMovie;
