import React from "react";

const Player = () => {
  return (
    <div>
      <h2 className="h-12 py-3 ">HTML5 Player</h2>

      <figure id="videoContainer">
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

        <ul id="video-controls" className="controls float-left">
          <li>
            <button id="playpause" type="button">
              Play/Pause
            </button>
          </li>
          <li>
            <button id="stop" type="button">
              Stop
            </button>
          </li>
          <li className="progress">
            <progress id="progress" value="0" min="0">
              <span id="progress-bar"></span>
            </progress>
          </li>
          <li>
            <button id="mute" type="button">
              Mute/Unmute
            </button>
          </li>
          <li>
            <button id="volinc" type="button">
              Vol+
            </button>
          </li>
          <li>
            <button id="voldec" type="button">
              Vol-
            </button>
          </li>
          <li>
            <button id="fs" type="button">
              Fullscreen
            </button>
          </li>
        </ul>
      </figure>
    </div>
  );
};

export default Player;
