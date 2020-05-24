import React from "react";
import "./App.css";
import Navibar from "./HeaderComponents/Navibar";
import "bootstrap/dist/css/bootstrap.min.css";
import Streamspage from "./BodyComponents/Streamspage";
import Mainsubjects from "./BodyComponents/Mainsubjects";
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
          <Route path="/mainsubjects" exact>
            <Mainsubjects />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
