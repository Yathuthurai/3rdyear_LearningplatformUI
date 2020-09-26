import React, { useState } from "react";
import AddPastPaper from "./Components/AddPastPaper";
import ViewPastpaper from "./Components/ViewPastpaper";

<<<<<<< HEAD:src/BodyComponents/Admin/Resource/Pastpaper/PastPaper.js
const options = ["Add Past papers", "View Past papers", "Generate Report"];
=======
import Button from "@material-ui/core/Button";

const options = ["Add Pastpaper", "View Pastpaper", "Generate Report"];
>>>>>>> 8d734a4348ef2bdfd8bc6c3ae10007824671b056:src/Admin/Resource/Pastpaper/PastPaper.js
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

<<<<<<< HEAD:src/BodyComponents/Admin/Resource/Pastpaper/PastPaper.js
      <div className="mt-3">
        <p>{showView === "Add Past papers" && <AddPastPaper />}</p>
        <p>{showView === "View Past papers" && <ViewPastpaper />}</p>
=======
      <div className="mt-5">
        <p>{showView === "Add Pastpaper" && <AddPastPaper />}</p>
        <p>{showView === "View Pastpaper" && <ViewPastpaper />}</p>
>>>>>>> 8d734a4348ef2bdfd8bc6c3ae10007824671b056:src/Admin/Resource/Pastpaper/PastPaper.js
      </div>
    </div>
  );
}

export default PastPaper;
