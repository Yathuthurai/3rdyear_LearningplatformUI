import React from "react";
//import "./Navibar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function Navibar() {
  return (
    <div className="font_header">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">LankaTutor</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/paymentcategory">MyTable</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-warning">Search</Button>
          <Nav.Link href="/signin">Login</Nav.Link>
        </Form>
      </Navbar>
    </div>
  );
}

export default Navibar;

{
  /* {<nav className="navbar navbar-expand-sm bg-dark navbar-dark container-fluid">
        <ul className="navbar-nav">
          <div className="align-self-center">
            <li className="nav-item active">
              <img
                className="logo"
                src="https://i.ya-webdesign.com/images/libro-vector-book-5.png"
                alt="logo"
              />
            </li>
          </div>

          <li className="nav-item active">
            <a className="nav-link text-warning" href="/">
              Lankatutor
            </a>
          </li>
          <li className="nav-item" style={{ paddingLeft: "7%" }}>
            <a className="nav-link text-light" href="/paymentcategory">
              MyTable
            </a>
          </li>
          <li className="nav-item" style={{ paddingLeft: "7%" }}>
            <a className="nav-link text-light" href="#about">
              About
            </a>
          </li>
          <li className="nav-item" style={{ paddingLeft: "7%" }}>
            <a className="nav-link text-light" href="#subjects">
              Subjects
            </a>
          </li>
          <li className="nav-item" style={{ paddingLeft: "7%" }}>
            <a className="nav-link text-light" href="#team">
              Team
            </a>
          </li>
          <li className="nav-item" style={{ paddingLeft: "7%" }}>
            <a className="nav-link text-light" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link text-light" href="/signin">
              Sign In
            </a>
          </li>
        </ul>
      </nav>} */
}
