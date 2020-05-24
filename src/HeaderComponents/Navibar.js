import React from "react";
import "./Navibar.css";



function Navibar() {
  return (
    <div className="font_header">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark container-fluid">
        <ul className="navbar-nav">
          <div className="align-self-center">
            <li className="nav-item active">
              <img
                className="logo"
                src="https://www.velocitymicro.com/img/Tutorials-Icon.png"
                alt="logo"
              />
            </li>
          </div>

          <li className="nav-item active">
            <a className="nav-link text-warning" href="#">
              Lankatutor
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="../Learningplatform/Learningplatform.js">
              Forum
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">
              Contact
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link text-light" href="#">
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navibar;
