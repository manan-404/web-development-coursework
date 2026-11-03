import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

export default function AppNavbar(): React.JSX.Element {
  return (
    <Navbar expand="lg" className="navbar-generic sticky-top" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="brand-generic">
          <span className="logo-badge-generic">AM</span>
          Abdul Manan
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="generic-navbar-nav" />
        <Navbar.Collapse id="generic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home" className="nav-link-generic">Home</Nav.Link>
            <Nav.Link href="#features" className="nav-link-generic">Features</Nav.Link>
            <Nav.Link href="#services" className="nav-link-generic">Services</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-generic">Contact</Nav.Link>
            <Button className="btn-generic-primary ms-lg-3 mt-3 mt-lg-0">Let's Talk</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
