import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Video from "./VideoRenderingElements/Video";
import QuizButton from "./VideoRenderingElements/QuizButton";
import "./SubjectVideo.css";

function SubjectVideo() {
  return (
    <div className="bgtype">
      <Container style={{ paddingTop: "50px" }}>
        <Row>
          <Col sm={10} style={{ paddingTop: "5px" }}>
            <Video />
            <br />
          </Col>
          <Col sm={2}>
            <div className="sideBox">
              <Card border="light" style={{ width: "18rem" }}>
                <Card.Header>Subject_Name: module 1</Card.Header>
                <Card.Body>
                  <Card.Title>Quiz</Card.Title>
                  <Card.Text style={{ textAlign: "justify" }}>
                    Time Duration : 60min
                    <br />
                    No. of Questions : 25
                    <br />
                    No. of Attempts : 0
                    <br />
                    <br />
                    Score : 0
                    <br />
                    <br />
                    Your highest marks in your attempts will be considered as
                    your score
                    <br />
                    <br />
                    <Button variant="outline-primary" size="sm">
                      Attempt Quiz
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
              <QuizButton />
              <br />
              <Button variant="outline-primary" size="md" block>
                Go to next module
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SubjectVideo;
