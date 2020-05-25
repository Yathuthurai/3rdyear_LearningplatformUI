import React, { Component } from "react";
import "./Streamspage.css";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Streampage extends Component {
  state = {};
  render() {
    return (
      <div className="mainbg-img">
        <div className="stream1">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://scx2.b-cdn.net/gfx/news/hires/2019/physics.jpg"
            />
            <Card.Body>
              <Card.Title>Physical Stream</Card.Title>
              <Card.Text className="card-text">
                This stream has four main subjects. Combined Mathematics,
                Physics, Chemistry, and ICT. Here candidates can choose between
                either Chemistry or ICT, though Combined Mathematics and Physics
                are mandatory.
              </Card.Text>
              <Link to="/physubjects">
                <Button variant="warning">
                  <span>Click here</span>
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="stream2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://cdn.leverageedu.com/blog/wp-content/uploads/2020/01/30120543/Biology-Practical.png"
            />
            <Card.Body>
              <Card.Title>Biology Stream</Card.Title>
              <Card.Text className="card-text">
                Biological Science stream consists of four subjects. Biology,
                Chemistry, Physics and Agricultural science and candidates do
                have option of selecting physics or Agricultural science, while
                biology and chemistry are mandatory.
              </Card.Text>
              <Link to="/biosubjects">
                <Button variant="warning">
                  <span>Click here</span>
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Streampage;
