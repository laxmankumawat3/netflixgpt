import React from "react";
import { BsPlayCircle } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "./maincontainer.css";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="vidowtitlecontaiener">
      <h1 className="videotitleheading">{title}</h1>
      <p style={{ width: "24vw" }}>{overview}</p>
      <div className="btnsection">
        <button className="playbtn">
          <span style={{ margin: "0 .5rem 0 0" }}>
            <BsPlayCircle />
          </span>
          Play
        </button>

        <button className="moreinfobtn">
          <span style={{ margin: "0 .5rem 0 0" }}>
            <AiOutlineInfoCircle />
          </span>
          more Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
