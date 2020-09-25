import React, { useState } from "react";
import AddPastPaper from "./Components/AddPastPaper";
import ViewPastpaper from "./Components/ViewPastpaper";

import Button from "@material-ui/core/Button";

const options = ["Add Pastpaper", "View Pastpaper", "Generate Report"];
function PastPaper() {
  const [showView, setShowView] = useState("Add Pastpaper");

  return (
    <div className="pastpaper">
      <div className="btn-group" role="group" aria-label="Basic example">
        {options.map((option) => {
          return (
            <Button
              className="mr-2"
              variant="contained"
              color="primary"
              onClick={() => setShowView(option)}
            >
              {option}
            </Button>
          );
        })}
      </div>

      <div className="mt-5">
        <p>{showView === "Add Pastpaper" && <AddPastPaper />}</p>
        <p>{showView === "View Pastpaper" && <ViewPastpaper />}</p>
      </div>
    </div>
  );
}

export default PastPaper;
