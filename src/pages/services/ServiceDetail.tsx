import { useParams, useNavigate } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import './ServiceDetail.css';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const service = servicesData.find((s) => s.id === id);

  const phoneNumber = '01701140907';
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
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <button onClick={() => navigate('/services')} className="back-btn">
        ← Back
      </button>

      <div className="service-detail-container">
        <div className="service-hero">
          <div className="service-icon-large">{service.icon}</div>
          <h1>{service.name}</h1>
          <p className="breadcrumb">{service.category}</p>
        </div>

        <div className="service-info-grid">
          <div className="info-card">
            <h3>About This Service</h3>
            <p>{service.description}</p>
          </div>

          <div className="info-card">
            <h3>⏱️ Estimated Time</h3>
            <p>{service.estimatedTime}</p>
          </div>

          <div className="info-card">
            <h3>📅 Availability</h3>
            <p>{service.availability}</p>
          </div>
        </div>

        <div className="service-options-section">
          <h2>Available Options</h2>
          <p className="section-subtitle">
            Choose the option that best fits your needs
          </p>

          <div className="options-grid">
            {service.options.map((option) => (
              <div key={option.id} className="option-card">
                <div className="option-header">
                  <h3>{option.name}</h3>
                  <div className="option-price">
                    ₹{option.price.toLocaleString()}
                  </div>
                </div>

                <p className="option-description">{option.description}</p>

                <button className="book-btn" onClick={() => alert(`${option.name} added to cart!`)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="service-benefits">
          <h2>Why Choose Our {service.name} Service?</h2>
          <ul className="benefits-list">
            <li>✓ Professional and certified technicians</li>
            <li>✓ High-quality materials and equipment</li>
            <li>✓ Transparent and competitive pricing</li>
            <li>✓ Customer satisfaction guaranteed</li>
            <li>✓ Quick turnaround time</li>
            <li>✓ Warranty on all services</li>
          </ul>
        </div>

        <div className="contact-section">
          <h2>Need More Information?</h2>
          <p>Contact us for detailed pricing and custom packages</p>
          <div className="contact-buttons">
            <button className="contact-btn phone-btn" onClick={handlePhoneClick}>
              📞 Call Us
            </button>
            <button className="contact-btn whatsapp-btn" onClick={handleWhatsAppClick}>
              💬 WhatsApp
            </button>
            <button className="contact-btn email-btn" onClick={handleEmailClick}>
              📧 Email Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
