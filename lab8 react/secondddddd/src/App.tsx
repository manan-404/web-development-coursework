import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AppNavbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App(): React.JSX.Element {
  return (
    <div className="homepage-wrapper">
      <AppNavbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

