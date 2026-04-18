import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>FixMyRide</h3>
          <p>Your trusted partner for all car care and maintenance services.</p>
          <div className="social-icons">
            <a href="#" className="social-icon" title="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-icon" title="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon" title="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="/service/car-wash">Car Wash</a></li>
            <li><a href="/service/car-repair">Car Repair</a></li>
            <li><a href="/service/car-paint">Car Paint</a></li>
            <li><a href="/service/tire-services">Tire Services</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>
            <i className="fas fa-phone"></i> 01701140907
          </p>
          <p>
            <i className="fas fa-envelope"></i> prosanto0das23@gmail.com
          </p>
          <p>
            <i className="fas fa-clock"></i> 24/7 Available
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 FixMyRide. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <span>•</span>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
