import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import "./maincontainer.css"
const VideoBackground = ({ id }) => {
  const moveitrailerkey = useSelector((store) => store.movie?.TrailerKey);
  useMovieTrailer(id);

  return (
    <div className="videobackgrondcontainer">
      <iframe
      style={{aspectRatio : "16/9"}}
        className="iframe"
        src={"https://www.youtube.com/embed/" + moveitrailerkey +  "?&autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
