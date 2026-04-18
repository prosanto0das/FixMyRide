import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import './Services.css';

export default function Services() {
  return (
    <div className="services-page">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Choose from our wide range of professional car services</p>
      </div>

      <div className="services-grid">
        {servicesData.map((service) => (
          <Link
            key={service.id}
            to={`/service/${service.id}`}
            className="service-card"
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.name}</h3>
            <p className="service-category">{service.category}</p>
            <p className="service-description">{service.description}</p>
            <div className="service-options-count">
              {service.options.length} options available
            </div>
            <button className="view-details-btn">View Details</button>
          </Link>
        ))}
      </div>
    </div>
  );
}
