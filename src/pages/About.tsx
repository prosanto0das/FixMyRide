import './About.css';
import profileImage from '../assets/profile_resize.jpg';

export default function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About FixMyRide</h1>
        <p>Your Trusted Car Care Partner</p>
      </div>

      <div className="about-container">
        <section className="about-section">
          <h2>Our Founder</h2>
          <div className="founder-section">
            <div className="founder-content">
              <div className="founder-image-wrapper">
                <img 
                  src={profileImage}
                  alt="Prosanto Das - Founder" 
                  className="founder-image"
                />
              </div>
              <div className="founder-info">
                <h3>Prosanto Das</h3>
                <p className="founder-title">Founder & CEO</p>
                <p className="founder-education">
                  <span className="education-badge">BSc in Computer Science & Engineering</span>
                  <span className="education-badge">Shahjalal University of Science and Technology (SUST)</span>
                </p>
                <p className="founder-bio">
                  Prosanto Das is the visionary founder of FixMyRide. With a passion for technology and customer service, 
                  he founded FixMyRide to revolutionize the car maintenance industry by making quality automotive services 
                  accessible, transparent, and convenient for everyone. His technical background combined with his dedication 
                  to excellence has shaped FixMyRide's commitment to innovation and customer satisfaction.
                </p>
                <div className="social-links">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=prosantodas2020331008@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">📧 Email</a>
                  <a href="tel:01715954503" className="social-link">📞 Call</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            FixMyRide is a professional car maintenance and repair service platform dedicated to providing 
            top-quality automotive care to our valued customers. With years of industry experience, we've built 
            a reputation for excellence, reliability, and customer satisfaction.
          </p>
          <p>
            Our team of certified technicians is trained to handle all types of car maintenance, repairs, and 
            cosmetic services using the latest tools and techniques. We believe in transparency, quality workmanship, 
            and putting our customers first.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            To provide accessible, reliable, and affordable car maintenance services that exceed customer expectations. 
            We aim to make vehicle care simple, transparent, and hassle-free for every car owner.
          </p>
        </section>

        <section className="about-section">
          <h2>Why Choose FixMyRide?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>🏆 Professional Expertise</h3>
              <p>Certified technicians with years of experience in automotive maintenance and repair</p>
            </div>
            <div className="feature-card">
              <h3>💰 Transparent Pricing</h3>
              <p>No hidden charges. All prices are clearly displayed upfront before booking</p>
            </div>
            <div className="feature-card">
              <h3>⚡ Quick Service</h3>
              <p>Fast turnaround times without compromising on quality of work</p>
            </div>
            <div className="feature-card">
              <h3>✅ Quality Guarantee</h3>
              <p>100% satisfaction guarantee with warranty on all services performed</p>
            </div>
            <div className="feature-card">
              <h3>📍 Doorstep Service</h3>
              <p>Convenient doorstep service available for select services in your area</p>
            </div>
            <div className="feature-card">
              <h3>🕐 24/7 Support</h3>
              <p>Round-the-clock customer support for emergency roadside assistance</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Our Services</h2>
          <p>
            We offer a comprehensive range of automotive services including:
          </p>
          <ul className="services-list">
            <li>Car Wash - Interior & Exterior detailing</li>
            <li>Car Repair - Engine, transmission, suspension repairs</li>
            <li>Car Paint - Professional paint jobs and touch-ups</li>
            <li>Oil Change & Fluid Check - Regular maintenance service</li>
            <li>Tire Services - Replacement, rotation, alignment</li>
            <li>Battery Replacement - Car battery installation</li>
            <li>Doorstep Servicing - Convenient at-home service</li>
            <li>Emergency Roadside Assistance - 24/7 emergency support</li>
          </ul>
        </section>

        <section className="about-section testimonials">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Excellent service! The team fixed my car quickly and at a fair price. Highly recommended!"
              </p>
              <p className="testimonial-author">- Unayes Ahmed Khan</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Very professional and transparent pricing. No hidden charges. I'll definitely use their service again."
              </p>
              <p className="testimonial-author">- Jannatun Nayma</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "24/7 support is amazing! They helped me during an emergency at midnight. Great service!"
              </p>
              <p className="testimonial-author">- Shawon Das</p>
            </div>
          </div>
        </section>

        <section className="about-section contact-section">
          <div className="contact-wrapper">
            <div className="contact-content">
              <h2>Get in Touch</h2>
              <p className="contact-description">Have questions about our services? Reach out to our team and we'll get back to you within 24 hours.</p>
            </div>
            <div className="contact-methods">
              <a href="tel:01701140907" className="contact-method-card">
                <div className="method-icon">📞</div>
                <h3>Call Us</h3>
                <p>01701140907</p>
              </a>
              <a href="mailto:prosanto0das23@gmail.com" className="contact-method-card">
                <div className="method-icon">📧</div>
                <h3>Email</h3>
                <p>prosanto0das23@gmail.com</p>
              </a>
              <a href="https://wa.me/8801701140907" target="_blank" rel="noopener noreferrer" className="contact-method-card">
                <div className="method-icon">💬</div>
                <h3>WhatsApp</h3>
                <p>Chat with us</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
