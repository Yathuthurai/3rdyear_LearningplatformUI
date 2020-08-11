import React from "react";
import "./SubjectsList.css";
import SubjectItem from "./SubjectItem";
import Card from "../shared/Card";

const PhysicsUnits = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No subjects found</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((unit) => (
        <SubjectItem
          key={unit.id}
          id={unit.id}
          image={unit.image}
          name={unit.name}
          modulesCount={unit.modules}
        />
      ))}
    </ul>
  );
};

export default PhysicsUnits;
