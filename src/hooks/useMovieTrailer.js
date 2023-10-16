import { API_OPTION } from "../component/Constent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTrailerkey } from "../util/movieSlice";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const TrailerKey = useSelector(store=>store.movie.TrailerKey)

  const getMovielist = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTION
    );
    const json = await data.json();
    const filtermovie = json.results.filter(
      (movie) => movie.type === "Trailer"
    );
    const filtermovietrailer = filtermovie.length ? filtermovie[0] : json.results[0]

    dispatch(setTrailerkey(filtermovietrailer.key));
   
  };

  useEffect(() => {
  !TrailerKey && getMovielist();
  }, []);
};

export default useMovieTrailer;
