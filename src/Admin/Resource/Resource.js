import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Button from "@material-ui/core/Button";

import PastPaper from "./Pastpaper/PastPaper";
import ExamPaper from "./Exampaper/ExamPaper";
import Lectures from "./Lectures/Lectures";
import Questions from "./Questions/Questions";
import Article from "./Article/Article";
import "./Resource.css";

axios.defaults.baseURL = "https://localhost:5000";

const resources = [
  "Lectures",
  "Pastpapers",
  "Exampapers",
  "Practice Questions",
  "Articles",
  "Forum",
];
const get = () => {
  axios.get("/resources").then((result) => {
    console.log(result.data);
  });
};
function Resource() {
  const [showView, setShowView] = useState("");
  const [dataR, setdataR] = useState([]);

  console.log(dataR);
  return (
    <Router>
      <div className="card resource">
        <h5 className="card-header text-center">
          <div className="btn-group" role="toolbar" aria-label="Basic example">
            {resources.map((resource) => {
              return (
                <button type="button" className="btn btn-secondary"onClick={() => setShowView(resource)}>
                  {resource}
                </button>
              );
            })}
          </div>
        </h5>
        <div className="card-body">
          <Button onClick={get}>Get</Button>
          <div className="resource__content mt-1">
            <p>{showView === "Pastpapers" && <PastPaper />}</p>
            <p>{showView === "Exampapers" && <ExamPaper />}</p>
            <p>{showView === "Lectures" && <Lectures />}</p>
            <p>{showView === "Practice Questions" && <Questions />}</p>
            <p>{showView === "Articles" && <Article />}</p>

          </div>
        </div>
      </div>
    </Router>
  );
}

export default Resource;
