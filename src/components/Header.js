import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" sticky="top">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {" get-in-IT - React Test"}
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default Header;
