import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card_shared from "./shared/Card_shared";
import "./Mainsubjects.css";

function Physicalsubjects(props) {
  const physics = (
    <Card_shared
      CardTitle="Physics"
      ImgUrl="https://scx2.b-cdn.net/gfx/news/hires/2019/physics.jpg"
      CardText="Total Units: 11"
      ButtonText="Enroll now"
      LinkRoute="physicsunits"
    />
  );

  const chemistry = (
    <Card_shared
      CardTitle="Chemistry"
      ImgUrl="https://www.thoughtco.com/thmb/XuJo7-P3gRDQshW69iFDNkFdS1U=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-545286316-433dd345105e4c6ebe4cdd8d2317fdaa.jpg"
      CardText="Total Units: 14"
      ButtonText="Enroll now"
      LinkRoute="chemistryunits"
    />
  );

  const mathematics = (
    <Card_shared
      CardTitle="Combined Mathematics"
      ImgUrl="https://previews.123rf.com/images/nnudoo/nnudoo1709/nnudoo170900053/85559143-chalkboard-with-writing-math-formula-background-back-to-school-education-concept-.jpg"
      CardText="Total Units: 22"
      ButtonText="Enroll now"
      LinkRoute="combinedmathscat"
    />
  );

  return (
    <div className="bg-img">
      <div className="bio-card">{mathematics}</div>
      <div className="physics-card ">{physics}</div>
      <div className="chemistry-card ">{chemistry}</div>
    </div>
  );
}

export default Physicalsubjects;
