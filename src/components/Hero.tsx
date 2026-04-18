import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <svg className="hero-bg" viewBox="0 0 1440 820" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gradientBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1A1A1A', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#2D2D2D', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="1440" height="820" fill="url(#gradientBg)" />
      </svg>

      <div className="hero-waves">
        <svg className="wave" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,50 Q360,0 720,50 T1440,50 L1440,120 L0,120 Z"
            fill="white"
            opacity="0.1"
          />
        </svg>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Your Car Deserves the <span className="highlight">Best Care</span>
          </h1>
          <p className="hero-subtitle">
            Professional car washing, painting, and 24/7 roadside assistance
          </p>

          <div className="hero-features">
            <div className="feature">
              <i className="fas fa-droplet"></i>
              <span>Quick Wash</span>
            </div>
            <div className="feature">
              <i className="fas fa-palette"></i>
              <span>Expert Paint</span>
            </div>
            <div className="feature">
              <i className="fas fa-headset"></i>
              <span>24/7 Support</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary">
              <i className="fas fa-calendar"></i>
              Book Now
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-phone"></i>
              Emergency Help
            </button>
          </div>
        </div>

        <div className="hero-image">
          <div className="car-illustration">
            <i className="fas fa-car"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
