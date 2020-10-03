import React, { useState } from "react";
import AddLecture from "./Components/AddLecture";
import ViewLectures from "./Components/ViewLectures.js";

const options = ["Add Lecture", "View Lectures", "Generate Report"];
function Lectures() {
  const [showView, setShowView] = useState("View Lectures");

  return (
    <div className="card" style={{ alignItems: "center" }}>
      <div className="card-header text-center">
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
      </div>
      <div className="card-body">
        <div className="mt-5">
          <p>{showView === "Add Lecture" && <AddLecture />}</p>
          <p>{showView === "View Lectures" && <ViewLectures />}</p>
        </div>
      </div>
    </div>
  );
}

export default Lectures;
