import React from "react";
import "./App.css";
import Navibar from "./HeaderComponents/Navibar";
import "bootstrap/dist/css/bootstrap.min.css";
import Streamspage from "./BodyComponents/Streamspage";
import Biologysubjects from "./BodyComponents/Biologysubjects";
import Physicalsubjects from "./BodyComponents/Physicalsubjects";
import Physicsunit from "./BodyComponents/subjects/Physicsunit";
import Chemistryunits from "./BodyComponents/subjects/Chemistryunit";
import Biologyunits from "./BodyComponents/subjects/Biologyunits";
import ComMathscategories from "./BodyComponents/subjects/ComMathscategories";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Navibar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Streamspage />
          </Route>
          <Route path="/biosubjects" exact>
            <Biologysubjects />
          </Route>
          <Route path="/physubjects" exact>
            <Physicalsubjects />
          </Route>
          <Route path="/combinedmathscat" exact>
            <ComMathscategories />
          </Route>
          <Route path="/physicsunits" exact>
            <Physicsunit />
          </Route>
          <Route path="/chemistryunits" exact>
            <Chemistryunits />
          </Route>
          <Route path="/biologyunits" exact>
            <Biologyunits />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
