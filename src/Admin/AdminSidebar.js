import React from "react";

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
import MailIcon from "@material-ui/icons/Mail";

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
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <LaptopChromebookIcon />
          </ListItemIcon>
          <Link
            to="/admin/resource-lectures"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <ListItemText primary="Lectures" />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DateRangeIcon />
          </ListItemIcon>
          <Link
            to="/admin/resource-management"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <ListItemText primary="Past Papers" />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <Link
            to="/admin/resource-management"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <ListItemText primary="Exam Papers" />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <QuestionAnswerIcon />
          </ListItemIcon>
          <Link
            to="/admin/resource-management"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <ListItemText primary="Questions" />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <Link
            to="/admin/resource-management"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <ListItemText primary="Articles" />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <NoteIcon />
          </ListItemIcon>
          <Link
            to="/admin/resource-management"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <ListItemText primary="Short Notes" />
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <Link
            to="/admin/resource-management"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <ListItemText primary="Mentors" />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <Link
            to="/admin/resource-management"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <ListItemText primary="Students" />
          </Link>
        </ListItem>
      </List>

      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <SupervisorAccountIcon />
          </ListItemIcon>
          <Link
            to="/admin/resource-management"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <ListItemText primary="Setting" />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <Link
            to="/admin/resource-management"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <ListItemText primary="Logout" />
          </Link>
        </ListItem>
      </List>
    </div>
  );
}

export default AdminSidebar;
