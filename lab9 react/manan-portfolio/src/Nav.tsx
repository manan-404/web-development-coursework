
export function Navbar() {
  return (
    <header className="header">
      <nav className="navbar" aria-label="Primary">
        <a href="#home" className="logo">
          Abdul Manan
        </a>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}