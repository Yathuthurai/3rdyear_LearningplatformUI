import React, { useState } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import PersonIcon from "@material-ui/icons/Person";
import NoteIcon from "@material-ui/icons/Note";
import DateRangeIcon from "@material-ui/icons/DateRange";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import DescriptionIcon from "@material-ui/icons/Description";
import BookIcon from "@material-ui/icons/Book";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import "./AdminSidebar.css";
import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="adminSidebar">
      <div className="adminSidebar__avatar">
<<<<<<< HEAD
        <Avatar
          alt="Remy Sharp"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSq7kZ4qPLBXUSDFsH2g5rQY9xAUYSpdbmWw&usqp=CAU"
        />
        <h6>Admin One</h6>
      </div>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <LaptopChromebookIcon style={{ color: "#641E16" }} />
=======
        <Avatar />
        <h6 style={{color:"white"}}>Admin One</h6>
      </div>
      <Divider />
      <List>
        <ListItem button className="btnSidebar active">
          <ListItemIcon style={{color:"#ffffff"}}>
            <LaptopChromebookIcon />
>>>>>>> 9c2a79014f5c367e2ec9a000a78c9d2ec9be5829
          </ListItemIcon>
          <Link
            to="/admin/lectures"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <ListItemText primary="Lectures" />
          </Link>
        </ListItem>
<<<<<<< HEAD
        <ListItem button>
          <ListItemIcon>
            <DateRangeIcon style={{ color: "#512E5F" }} />
=======
        <ListItem button className="btnSidebar active">
          <ListItemIcon style={{color:"#ffffff"}}>
            <DateRangeIcon />
>>>>>>> 9c2a79014f5c367e2ec9a000a78c9d2ec9be5829
          </ListItemIcon>
          <Link
            to="/admin/pastpapers"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <ListItemText primary="Past Papers" />
          </Link>
        </ListItem>
<<<<<<< HEAD
        <ListItem button>
          <ListItemIcon>
            <BookIcon style={{ color: "#7D6608" }} />
=======
        <ListItem button className="btnSidebar active">
          <ListItemIcon style={{color:"#ffffff"}}>
            <BookIcon />
>>>>>>> 9c2a79014f5c367e2ec9a000a78c9d2ec9be5829
          </ListItemIcon>
          <Link
            to="/admin/exampapers"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <ListItemText primary="Exam Papers" />
          </Link>
        </ListItem>
<<<<<<< HEAD
        <ListItem button>
          <ListItemIcon>
            <QuestionAnswerIcon style={{ color: "#0E6251" }} />
=======
        <ListItem button className="btnSidebar active">
          <ListItemIcon style={{color:"#ffffff"}}>
            <QuestionAnswerIcon />
>>>>>>> 9c2a79014f5c367e2ec9a000a78c9d2ec9be5829
          </ListItemIcon>
          <Link
            to="/admin/questions"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <ListItemText primary="Questions" />
          </Link>
        </ListItem>
<<<<<<< HEAD
        <ListItem button>
          <ListItemIcon>
            <DescriptionIcon style={{ color: "#6E2C00" }} />
=======
        <ListItem button className="btnSidebar active">
          <ListItemIcon style={{color:"#ffffff"}}>
            <DescriptionIcon />
>>>>>>> 9c2a79014f5c367e2ec9a000a78c9d2ec9be5829
          </ListItemIcon>
          <Link
            to="/admin/resource-management"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <ListItemText primary="Articles" />
          </Link>
        </ListItem>
<<<<<<< HEAD
        <ListItem button>
          <ListItemIcon>
            <NoteIcon style={{ color: "#2471A3" }} />
=======
        <ListItem button className="btnSidebar">
          <ListItemIcon style={{color:"#ffffff"}}>
            <NoteIcon />
>>>>>>> 9c2a79014f5c367e2ec9a000a78c9d2ec9be5829
          </ListItemIcon>
          <Link
            to="/admin/resource-management"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <ListItemText primary="Short Notes" />
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button className="btnSidebar">
          <ListItemIcon style={{color:"#ffffff"}}>
            <SettingsIcon />
          </ListItemIcon>
          <Link
            to="/admin/resource-management"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <ListItemText primary="Mentors" />
          </Link>
        </ListItem>
<<<<<<< HEAD
        <ListItem button>
          <ListItemIcon>
            <PersonIcon style={{ color: "#641E16" }} />
=======
        <ListItem button className="btnSidebar">
          <ListItemIcon style={{color:"#ffffff"}}>
            <PersonIcon />
>>>>>>> 9c2a79014f5c367e2ec9a000a78c9d2ec9be5829
          </ListItemIcon>
          <Link
            to="/admin/resource-management"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <ListItemText primary="Students" />
          </Link>
        </ListItem>
      </List>

      <Divider />
      <List>
        <ListItem button className="btnSidebar">
          <ListItemIcon style={{color:"#ffffff"}}>
            <SupervisorAccountIcon />
          </ListItemIcon>
          <Link
            to="/admin/resource-management"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <ListItemText primary="Settings" />
          </Link>
        </ListItem>
        <ListItem button className="btnSidebar">
          <ListItemIcon style={{color:"#ffffff"}}>
            <ExitToAppIcon />
          </ListItemIcon>
          <Link
            to="/admin/resource-management"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <ListItemText primary="Logout" />
          </Link>
        </ListItem>
      </List>
    </div>
  );
}

export default AdminSidebar;
