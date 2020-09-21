import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import PersonIcon from "@material-ui/icons/Person";

import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import "./AdminSidebar.css";
import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="adminSidebar">
      <div className="adminSidebar__avatar">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <h6>Admin One</h6>
      </div>
      <List
        component="nav"
        className=".adminSidebar__button"
        aria-label="mailbox folders"
      >
        <ListItem button>
          <Link
            to="/admin/resource-management"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <LaptopChromebookIcon className="mr-2" />
            Resource Management
          </Link>
        </ListItem>
        <Divider />
        <ListItem button divider>
          <Link
            to="/admin/mentor-management"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <SupervisorAccountIcon className="mr-2" />
            Mentor Management
          </Link>
        </ListItem>
        <ListItem button>
          <Link
            to="/admin/student-management"
            style={{
              textDecoration: "none",
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <PersonIcon className="mr-2" />
            Student Management
          </Link>
        </ListItem>
        <Divider light />
      </List>
    </div>
  );
}

export default AdminSidebar;
