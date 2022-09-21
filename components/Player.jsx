import React from "react";

const Player = () => {
  return (
    <div>
      <h2 className="h-12 py-3 ">HTML5 Player</h2>

      <figure id="videoContainer"></figure>

      <video
        className="border-8 border-gray-700 rounded-md"
        id="video"
        width=""
        height=""
        controls
        preload="metadata"
        poster="./images/poster.jpeg"
      >
        <source src="./video/sintel-short.mp4" type="video/mp4" />
        <source src="./video/sintel-short.webm" type="video/webm" />
        <a href="./video/sintel-short.mp4">Download MP4</a>
        Your browser does not support the video tag.
      </video>
      <figcaption>
        &copy; Blender Foundation |
        <a href="http://mango.blender.org">mango.blender.org</a>
      </figcaption>
    </div>
  );
};

export default Player;
