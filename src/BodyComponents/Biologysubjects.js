import React from "react";
import CardShared from "./shared/CardShared";
import "./Mainsubjects.css";

function Biologysubjects(props) {
  const physics = (
    <CardShared
      CardTitle="Physics"
      ImgUrl="https://scx2.b-cdn.net/gfx/news/hires/2019/physics.jpg"
      CardText="Total Units: 11"
      ButtonText="Enroll now"
      LinkRoute="physicsunits"
    />
  );

  const chemistry = (
    <CardShared
      CardTitle="Chemistry "
      ImgUrl="https://www.thoughtco.com/thmb/XuJo7-P3gRDQshW69iFDNkFdS1U=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-545286316-433dd345105e4c6ebe4cdd8d2317fdaa.jpg"
      CardText="Total Units: 14"
      ButtonText="Enroll now"
      LinkRoute="chemistryunits"
    />
  );

  const biology = (
    <CardShared
      CardTitle="Biology"
      ImgUrl="https://neisd.mrooms.net/pluginfile.php/13882/course/overviewfiles/rawcoverimage.jpg"
      CardText="Total Units: 10"
      ButtonText="Enroll now"
      LinkRoute="biologyunits"
    />
  );

  return (
    <div className="bg-img">
      <div className="bio-card">{biology}</div>
      <div className="physics-card">{physics}</div>
      <div className="chemistry-card">{chemistry}</div>
    </div>
  );
}

export default Biologysubjects;
