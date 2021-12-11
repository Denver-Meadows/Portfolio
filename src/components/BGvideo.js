import React from "react";
import video from "../imgs/video.mp4";

const BGvideo = () => {
  return (
    <div className="bg-video">
      <video
        autoPlay
        loop
        muted
        id="video"
        src={video}
        type="video/mp4"
      ></video>
    </div>
  );
};

export default BGvideo;
