import { useDispatch } from "react-redux";
import { API_OPTION } from "../component/Constent";
import { setUpcomingMovie } from "../util/movieSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useUpcomingMovie = () => {
  const upcomingMovie = useSelector(store=> store.movie.upcomingMovie)
          const dispatch = useDispatch();
          const getNowPlayingMovies = async () => {
            const data = await fetch(
           'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
              API_OPTION
            );
            const json = await data.json();
            
            dispatch(setUpcomingMovie(json.results));
          };
        
          useEffect(() => {
           !upcomingMovie && getNowPlayingMovies();
          }, []);
}

export default useUpcomingMovie