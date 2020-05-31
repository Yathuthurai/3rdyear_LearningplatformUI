import React from "react";
import CardMaterial from "../shared/CardMaterial";
import "./Categories.css";
function ComMathscategories(props) {
  const puremaths = (
    <CardMaterial
      AvatarLetter="P"
      CardTitle="Combined Mathematics"
      SubTitle="Pure Mathematics"
      ImgUrl="https://img.freepik.com/free-vector/realistic-math-chalkboard-background_23-2148163817.jpg?size=626&ext=jpg"
      ImgTitle="puremaths"
      UnitNum="12"
      ButtonText="View Units"
      LinkRoute="puremathsunits"
    />
  );

  const appliedmaths = (
    <CardMaterial
      AvatarLetter="A"
      CardTitle="Combined Mathematics"
      SubTitle="Applied Mathematics"
      ImgUrl="https://as2.ftcdn.net/jpg/01/98/08/51/500_F_198085199_b1bMoIWSfR5cbc5OK2xss7hDutFkXBVz.jpg"
      ImgTitle="appliedmaths"
      UnitNum="11"
      ButtonText="View Units"
      LinkRoute="appliedmathsunits"
    />
  );

  return (
    <div className="bg-img">
      <div className="pure-ma">{puremaths}</div>
      <div className="applied-ma">{appliedmaths}</div>
    </div>
  );
}

export default ComMathscategories;
