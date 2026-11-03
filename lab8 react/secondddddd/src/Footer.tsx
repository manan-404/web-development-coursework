
// src/components/Footer.tsx
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
          <a href="#contact">Privacy</a>
          <a href="#contact">Terms</a>
        </div>
        <p className="mb-1" style={{ fontSize: '0.95rem' }}>
          © 2026 DevFlow Platform. Built for Web Engineering Lab 12 Assignment.
        </p>
        <small style={{ color: 'var(--text-muted)' }}>
          Sukkur IBA University — Department of Computer Science
        </small>
      </Container>
    </footer>
  );
}