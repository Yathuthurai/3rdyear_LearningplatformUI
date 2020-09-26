import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PastPaper from "./Pastpaper/PastPaper";
import ExamPaper from "./Exampaper/ExamPaper";
import "./Resource.css";

const resources = [
  "Lectures",
  "Pastpapers",
  "Exampapers",
  "Practice Questions",
  "Articles",
  "Forum" ];
function Resource() {
  const [showView, setShowView] = useState("Lectures");

  return (
    <Router>
      <div className="resource ">
        <div className="btn-group btn-group-justified" role="group" aria-label="Basic example">
          {resources.map((resource) => {
            return (
              <button
                type="button"
                className="btn btn-secondary mr=2"
                onClick={() => setShowView(resource)}
              >
                {resource}
              </button>
            );
          })}
        </div>
        ]
        <div className="resource__content mt-5">
          <p>{showView === "Pastpapers" && <PastPaper />}</p>
          <p>{showView === "Exampapers" && <ExamPaper />}</p>
        </div>
      </div>
    </Router>
  );
}

export default Resource;
