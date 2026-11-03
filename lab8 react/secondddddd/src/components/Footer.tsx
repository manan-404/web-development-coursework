import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer(): React.JSX.Element {
  return (
    <footer className="footer-generic" id="contact">
      <Container>
        <div className="footer-links-generic mb-3">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="mb-1">© 2026 Abdul Manan. All rights reserved.</p>
        <small>Built with React + Bootstrap for a clean, modern interface.</small>
      </Container>
    </footer>
  );
}
