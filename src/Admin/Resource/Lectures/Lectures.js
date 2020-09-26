import React, { useState } from "react";
import AddLecture from "./Components/AddLecture";
import ViewLectures from "./Components/ViewLectures.js";

import Button from "@material-ui/core/Button";

const options = ["Add Lecture", "View Lectures", "Generate Report"];
function PastPaper() {
  const [showView, setShowView] = useState("View Lectures");

  return (
    <div className="lectures">
      <div className="btn-group" role="group" aria-label="Basic example">
        {options.map((option) => {
          return (
            <button
              className="btn btn-secondary mr-2"
              variant="contained"
              onClick={() => setShowView(option)}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="mt-5">
        <p>{showView === "Add Lecture" && <AddLecture />}</p>
        <p>{showView === "View Lectures" && <ViewLectures />}</p>
      </div>
    </div>
  );
}

export default PastPaper;
