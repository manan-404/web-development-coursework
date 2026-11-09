
export function Hero() {
  return (
    <section id="home" className="section hero-section">
      <div className="hero-content">
        <p className="hero-eyebrow">BSCS Student & Developer</p>
        <h1 className="hero-title">Hi, I'm Abdul Manan.</h1>
        <p className="hero-description">
          A passionate Computer Science student at Sukkur IBA University focusing on software engineering, cybersecurity, and modern web applications.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="primary-button">See my work</a>
          <a href="#contact" className="secondary-button">Get in touch</a>
        </div>
      </div>
      <div className="hero-image-wrapper">
        <img 
          src="/profile.jpg" 
          alt="Portrait of Abdul Manan" 
          className="hero-profile-image" 
        />
      </div>
    </section>
  );
}