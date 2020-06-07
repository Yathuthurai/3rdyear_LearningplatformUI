import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../shared/Avatar";
import Card from "../shared/Card";
import "./UnitItem.css";

const UnitItem = (props) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/modules`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.modulesCount}{" "}
              {props.modulesCount === 1 ? "Module" : "Modules"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UnitItem;
