import React from 'react';
import { Container, Button } from 'react-bootstrap';

export default function Hero(): React.JSX.Element {
  return (
    <section className="hero-generic" id="home">
      <Container>
        <span className="hero-pill-generic">⚡ Frontend Developer • UI Designer</span>
        <h1 className="hero-heading-generic">
          I build memorable digital experiences that turn ideas into growth.
        </h1>
        <p className="hero-text-generic">
          Hi, I&apos;m Abdul Manan — a creative developer focused on modern web interfaces,
          product design, and performance-first experiences that stand out.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Button className="btn-generic-primary">View My Work</Button>
          <Button className="btn-generic-outline">Contact Me</Button>
        </div>
      </Container>
    </section>
  );
}
