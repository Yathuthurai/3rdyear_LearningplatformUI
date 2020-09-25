import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import AdminSidebar from "./AdminSidebar";
import "./AdminDashboard.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Resource from "./Resource/Resource";

const routes = [
  {
    path: "/admin/resource-management",
    exact: true,
    main: () => <Resource />,
  },
  {
    path: "/admin/mentor-management",
    exact: true,
    main: () => <h1>hi</h1>,
  },
  {
    path: "/admin/student-management",
    exact: true,
    main: () => <h1>hi</h1>,
  },
];
function AdminDashboard() {
  return (
    <Router>
      <div className="adminDashboard">
        <div>
          <AdminSidebar />
          <div class="adminDashboard__container">
            {routes.map((route, index) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              ></Route>
            ))}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default AdminDashboard;
