import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import './Services.css';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All services');
  const [searchTerm, setSearchTerm] = useState('');
  const categories = ['All services', ...new Set(servicesData.map((service) => service.category))];
  const visibleServices = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return servicesData.filter((service) => {
      const matchesCategory = selectedCategory === 'All services' || service.category === selectedCategory;
      const matchesSearch = !query || `${service.name} ${service.category} ${service.description}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <main className="services-page">
      <div className="services-hero">
        <div className="services-hero-inner">
          <div>
            <p className="services-eyebrow">FIXMYRIDE SERVICE DIRECTORY</p>
            <h1>Care that keeps<br /><span>you moving.</span></h1>
            <p>From routine maintenance to urgent roadside support, find the right automotive service with clear packages, timing, and availability.</p>
          </div>
          <div className="services-hero-note"><strong>{servicesData.length}</strong><span>service categories<br />ready to book</span></div>
        </div>
      </div>

      <div className="services-container">
        <section className="service-directory">
          <div className="directory-toolbar">
            <div><p className="section-kicker">SERVICE DIRECTORY</p><h2>Find a service</h2></div>
            <label className="service-search"><span className="sr-only">Search services</span><i className="fas fa-search"></i><input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search by service or need" /></label>
          </div>
          <div className="service-filters" role="tablist" aria-label="Service categories">{categories.map((category) => <button type="button" role="tab" aria-selected={selectedCategory === category} className={selectedCategory === category ? 'active' : ''} key={category} onClick={() => setSelectedCategory(category)}>{category}</button>)}</div>
        <div className="services-grid">
          {visibleServices.map((service) => (
            <Link
              key={service.id}
              to={`/service/${service.id}`}
              className="service-card"
            >
              <div className="service-card-top"><div className="service-icon">{service.icon}</div><span className="service-category">{service.category}</span></div>
              <h3>{service.name}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-facts"><span><i className="fas fa-clock"></i>{service.estimatedTime}</span><span><i className="fas fa-layer-group"></i>{service.options.length} packages</span></div>
              <div className="service-card-bottom"><strong>From ৳{Math.min(...service.options.map((option) => option.price)).toLocaleString('en-BD')}</strong><span className="view-details-btn">View details <i className="fas fa-arrow-right"></i></span></div>
            </Link>
          ))}
        </div>
        {visibleServices.length === 0 && <div className="services-empty"><h3>No services found</h3><p>Try another search or category.</p></div>}
        </section>
      </div>
    </main>
  );
}
