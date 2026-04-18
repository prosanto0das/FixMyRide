import { useState } from 'react';
import './Feedback.css';

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://formsubmit.co/prosanto0das23@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Feedback from ${formData.name}`,
          _captcha: false
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="feedback-page">
      <div className="feedback-hero">
        <h1>Share Your Feedback</h1>
        <p>We'd love to hear from you. Send us your feedback, suggestions, or concerns.</p>
      </div>

      <div className="feedback-container">
        <div className="feedback-content">
          <div className="feedback-form-section">
            <h2>Get in Touch</h2>
            <p className="form-description">Fill out the form below and we'll get back to you as soon as possible.</p>

            {submitted && (
              <div className="success-message">
                ✅ Thank you! Your feedback has been sent successfully. We'll review it and get back to you soon!
              </div>
            )}

            <form onSubmit={handleSubmit} className="feedback-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number (optional)"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is your feedback about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Please share your detailed feedback, suggestions, or concerns..."
                  rows={6}
                />
              </div>

              <button type="submit" className="submit-btn" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Feedback'}
              </button>
            </form>
          </div>

          <div className="feedback-info">
            <h3>Other Ways to Reach Us</h3>
            <p>Can't use the form? Contact us directly through any of these channels:</p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">📞</div>
                <h4>Call Us</h4>
                <p>+8801701140907</p>
                <p className="info-time">Monday - Sunday: 24/7</p>
              </div>

              <div className="info-item">
                <div className="info-icon">📧</div>
                <h4>Email Us</h4>
                <p>prosanto0das23@gmail.com</p>
                <p className="info-time">Response within 24 hours</p>
              </div>

              <div className="info-item">
                <div className="info-icon">💬</div>
                <h4>WhatsApp</h4>
                <p>+8801701140907</p>
                <p className="info-time">Instant messaging</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
