import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./Video.css";

class Video extends Component {
  state = {};
  render() {
    return (
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://youtu.be/vz0UUVDt2ps"
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}

export default Video;
