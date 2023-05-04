import React from "react";
import videoBg from "../video/v3.mp4";
const BackgroundVideo = () => {
  return (
    <div className="main">
      <video src={videoBg}></video>
    </div>
  );
};

export default BackgroundVideo;
