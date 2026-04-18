import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <i className="fas fa-car"></i>
            <span>FixMyRide</span>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#gallery" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a href="#faq" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </a>
          </li>
          <li className="nav-item">
            <a href="#blog" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link nav-link-cta" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
