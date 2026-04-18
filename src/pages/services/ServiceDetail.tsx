import { useParams, useNavigate } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import './ServiceDetail.css';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const service = servicesData.find((s) => s.id === id);

  const phoneNumber = '+8801701140907';
  const email = 'prosanto0das23@gmail.com';

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}`, '_blank');
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent(`Service Inquiry - ${service.name}`);
    const body = encodeURIComponent(`Hello,\n\nI am interested in the ${service.name} service.\n\nPlease provide more details and pricing information.\n\nThank you!`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  if (!service) {
    return (
      <div className="service-detail-page">
        <div className="not-found">
          <h1>Service Not Found</h1>
          <button onClick={() => navigate('/services')} className="back-btn">
            ← Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <div className="service-detail-hero">
        <button onClick={() => navigate('/services')} className="back-link">
          ← Back
        </button>
        <div className="hero-content">
          <div className="service-icon-large">{service.icon}</div>
          <h1>{service.name}</h1>
          <p className="breadcrumb">{service.category}</p>
          <p className="hero-description">{service.description}</p>
        </div>
      </div>

      <div className="service-detail-container">
        <div className="service-content-grid">
          <div className="main-content">
            <div className="info-section">
              <h2>Service Overview</h2>
              <p className="service-full-description">{service.description}</p>
              <div className="info-highlight-box">
                <div className="highlight-item">
                  <span className="highlight-icon">⏱️</span>
                  <div className="highlight-content">
                    <span className="highlight-label">ESTIMATED TIME</span>
                    <span className="highlight-value">{service.estimatedTime}</span>
                  </div>
                </div>
                <div className="highlight-divider"></div>
                <div className="highlight-item">
                  <span className="highlight-icon">📅</span>
                  <div className="highlight-content">
                    <span className="highlight-label">AVAILABILITY</span>
                    <span className="highlight-value">{service.availability}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="options-section">
              <div className="options-header">
                <h2>Pricing Packages</h2>
                <p className="section-subtitle">Select your preferred service package</p>
              </div>
              <div className="options-grid">
                {service.options.map((option, index) => (
                  <div key={option.id} className={`option-card ${index === 0 ? 'featured' : ''}`}>
                    {index === 0 && <div className="featured-badge">MOST POPULAR</div>}
                    <div className="option-top">
                      <h3>{option.name}</h3>
                      <div className="price-tag">
                        <span className="currency">₹</span>
                        <span className="amount">{option.price.toLocaleString()}</span>
                      </div>
                    </div>
                    <p className="option-description">{option.description}</p>
                    <button className="book-btn" onClick={handleEmailClick}>
                      <span>Book Now</span>
                      <span className="arrow">→</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="benefits-section">
              <div className="benefits-header">
                <h2>Why Choose Us?</h2>
                <p className="benefits-subtitle">Premium quality service with guaranteed satisfaction</p>
              </div>
              <ul className="benefits-list">
                <li>
                  <span className="benefit-icon">👨‍🔧</span>
                  <span className="benefit-text">Professional and certified technicians</span>
                </li>
                <li>
                  <span className="benefit-icon">⭐</span>
                  <span className="benefit-text">High-quality materials and equipment</span>
                </li>
                <li>
                  <span className="benefit-icon">💰</span>
                  <span className="benefit-text">Transparent and competitive pricing</span>
                </li>
                <li>
                  <span className="benefit-icon">✅</span>
                  <span className="benefit-text">Customer satisfaction guaranteed</span>
                </li>
                <li>
                  <span className="benefit-icon">⚡</span>
                  <span className="benefit-text">Quick turnaround time</span>
                </li>
                <li>
                  <span className="benefit-icon">🛡️</span>
                  <span className="benefit-text">Warranty on all services</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="sidebar">
            <div className="contact-card">
              <h3>Ready to Book?</h3>
              <p>Get in touch with our team for service inquiries and pricing details.</p>
              <div className="contact-methods">
                <button className="contact-method phone-method" onClick={handlePhoneClick}>
                  <span className="method-icon">📞</span>
                  <div>
                    <span className="method-label">Call Us</span>
                    <span className="method-value">{phoneNumber}</span>
                  </div>
                </button>
                <button className="contact-method whatsapp-method" onClick={handleWhatsAppClick}>
                  <span className="method-icon">💬</span>
                  <div>
                    <span className="method-label">WhatsApp</span>
                    <span className="method-value">Chat Now</span>
                  </div>
                </button>
                <button className="contact-method email-method" onClick={handleEmailClick}>
                  <span className="method-icon">📧</span>
                  <div>
                    <span className="method-label">Email</span>
                    <span className="method-value">Send Inquiry</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
