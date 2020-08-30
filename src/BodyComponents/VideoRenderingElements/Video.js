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
          url="https://youtu.be/a9__D53WsUs"
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
    );
  }
}

export default Video;
