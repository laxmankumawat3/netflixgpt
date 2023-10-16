import React, { useRef, useState } from "react";
import "../App.css";
import "./Gptpage.css";
import { API_OPTION } from "./Constent";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMovieList } from "../util/gptSlice";
import MovieList from "./MovieList";

const Gptpage = () => {
  const [gptMovielist, setGptMovieList] = useState(null);
  const searchtext = useRef();
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.gpt.searchMovielist);
 

  const searchMoveitmbd = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    return json.results;
  };

  const searchmoviehandle = async () => {
   
    //  searchMovietmbd reture a promise
    const moviedata = searchMoveitmbd(searchtext.current.value);
    const movieresults = Promise.resolve(moviedata);
    movieresults.then((value) => {
      dispatch(setSearchMovieList(value));
      setGptMovieList(value);
    });
  };

  return (
    <div className="App">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchtext}
          className="searchbar"
          type="search"
          required
          placeholder="Enter the Movie Name"
        />
        <button
          onClick={searchmoviehandle}
          className="searchbutton"
          type="submit"
        >
          Search
        </button>
      </form>

      {movies !== null && (
        <div style={{ backgroundColor: "#000000a8", margin: "2rem" }}>
          <MovieList title={movies[0].title} movies={movies} />
        </div>
      )}
    </div>
  );
};

export default Gptpage;
