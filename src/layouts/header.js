import React from 'react';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/header.css"

const Header = () => {
  return (
    <header>
        <Nav className="Nav">
        <Nav.Item>
          <Nav.Link href="#">help</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Contact us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">English</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Cource</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">
            <i className="fa fa-home"></i>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
}

export default Header