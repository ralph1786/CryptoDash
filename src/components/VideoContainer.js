import React from "react";
import video from "../assets/video/cryptoVideo.mp4";
import "./VideoContainer.scss";

const VideoContainer = () => {
  return (
    <div className="video">
      <div className="overlay" />
      <video autoPlay loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoContainer;
