import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import './Services.css';

export default function Services() {
  return (
    <div className="services-page">
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>Professional Car Care Solutions for Every Need</p>
      </div>

      <div className="services-container">
        <div className="services-intro">
          <p>At FixMyRide, we offer a comprehensive range of automotive services designed to keep your car running smoothly and looking great. Our certified technicians are equipped with the latest tools and technology to handle all your car care needs.</p>
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
              <button className="view-details-btn">View Details →</button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
