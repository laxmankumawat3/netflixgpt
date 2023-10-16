import { useDispatch } from "react-redux";
import { API_OPTION } from "../component/Constent";
import {  setTopRetedMovie } from "../util/movieSlice";
import { useEffect } from "react";
import {useSelector } from "react-redux"

const useTopRetedMovie = () => {
  const TopRatedMovie = useSelector(store=> store.movie.TopRatedMovie)

          const dispatch = useDispatch();
          const getNowPlayingMovies = async () => {
            const data = await fetch(
            'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
              API_OPTION
            );
            const json = await data.json();
            
            dispatch(setTopRetedMovie(json.results));
          };
        
          useEffect(() => {
            // we do it memoization
           !TopRatedMovie && getNowPlayingMovies();
          }, []);
}

export default useTopRetedMovie