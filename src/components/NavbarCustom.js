import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";
import "./NavbarCustom.scss";

function NavbarCustom(props) {
  return (
    <Navbar 
      bg={props.bg}
      textColor={props.textColor}
      variant={props.variant} 
      expand={props.expand}
      >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="brand-container">
            <img
              className="d-inline-block align-top"
              src={props.logo}
              alt="Logo"
              height="30"
            />
            <h3>The Paladin Programmer</h3>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Item>
              <Nav.Link>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-600}
                >
                About
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
              <Link
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              offset={-50}
              >
              Skills
              </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link>
              <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              offset={-50}
              >
              Projects
              </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-50}
                >
                Contact
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
