import React from "react";
import "./secondryContainer.css"

const MovieCard = ({ movie }) => {
  if(!movie?.poster_path) return;
  return (
    <div className="moveicard">
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
        alt="movieCard"
      />
    </div>
  );
};

export default MovieCard;
