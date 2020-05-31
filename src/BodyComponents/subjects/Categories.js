import React from "react";
import Card_shared from "../shared/Card_shared";
import "./Categories.css";
function Categories(props) {
  const puremaths = (
    <Card_shared
      CardTitle="Pure Mathematics"
      ImgUrl="https://img.freepik.com/free-vector/realistic-math-chalkboard-background_23-2148163817.jpg?size=626&ext=jpg"
      CardText="Total Units: 11"
      ButtonText="Enroll now"
    />
  );

  const appliedmaths = (
    <Card_shared
      CardTitle="Applied Mathematics"
      ImgUrl="https://as2.ftcdn.net/jpg/01/98/08/51/500_F_198085199_b1bMoIWSfR5cbc5OK2xss7hDutFkXBVz.jpg"
      CardText="Total Units: 14"
      ButtonText="Enroll now"
    />
  );

  return (
    <div className="bg-img">
      <div className="mathsitem1">{puremaths}</div>
      <div className="mathsitem2">{appliedmaths}</div>
    </div>
  );
}

export default Categories;
