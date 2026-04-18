import { useState } from 'react';
import './FAQ.css';

export default function FAQ() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What services does FixMyRide offer?',
      answer: 'FixMyRide offers a comprehensive range of automotive services including car wash, car repair, car paint, oil change & fluid check, tire services, battery replacement, doorstep servicing, and 24/7 emergency roadside assistance.'
    },
    {
      id: 2,
      question: 'Is FixMyRide available 24/7?',
      answer: 'Yes, we offer 24/7 customer support and emergency roadside assistance. You can reach us anytime for urgent automotive needs.'
    },
    {
      id: 3,
      question: 'Do you provide doorstep services?',
      answer: 'Yes, we offer convenient doorstep servicing for selected services in your area. Contact us to check if your location is covered.'
    },
    {
      id: 4,
      question: 'How much do your services cost?',
      answer: 'All prices are transparent and displayed upfront before booking. We believe in no hidden charges. Contact us for a detailed quote for your specific service.'
    },
    {
      id: 5,
      question: 'Are your technicians certified?',
      answer: 'Yes, all our technicians are certified professionals with years of experience in automotive maintenance and repair.'
    },
    {
      id: 6,
      question: 'Do you offer warranty on your services?',
      answer: 'Absolutely! We provide 100% satisfaction guarantee with warranty on all services performed. We stand behind our work.'
    },
    {
      id: 7,
      question: 'How do I book a service?',
      answer: 'You can book a service by calling us at 01715954503, emailing us, or using WhatsApp. Our team will assist you with scheduling.'
    },
    {
      id: 8,
      question: 'What areas do you serve?',
      answer: 'We serve multiple areas in the region. For specific location inquiries, please contact us directly and we\'ll let you know if we can service your area.'
    },
    {
      id: 9,
      question: 'How long does a typical service take?',
      answer: 'Service duration depends on the type of service. Basic services like oil change take 30-45 minutes, while major repairs may take a few hours. We\'ll provide you with an estimated timeline.'
    },
    {
      id: 10,
      question: 'Do you offer payment plans?',
      answer: 'For major repairs and services, we can work out flexible payment arrangements. Please contact our team to discuss payment options that suit your needs.'
    },
    {
      id: 11,
      question: 'Can I reschedule my appointment?',
      answer: 'Yes, absolutely! You can reschedule your appointment by contacting us at least 24 hours before your scheduled time. We\'ll be happy to find a time that works for you.'
    },
    {
      id: 12,
      question: 'What if I\'m not satisfied with the service?',
      answer: 'Your satisfaction is our priority. If you\'re not happy with the service, please contact us immediately. We\'ll work to resolve the issue and ensure you\'re completely satisfied.'
    },
    {
      id: 13,
      question: 'Do you use genuine parts?',
      answer: 'Yes, we exclusively use genuine and high-quality parts for all repairs and replacements. We believe in using the best materials to ensure your car\'s longevity and performance.'
    },
    {
      id: 14,
      question: 'How can I stay updated on my service?',
      answer: 'Our team will keep you updated throughout the service process via phone call or WhatsApp. You\'ll know exactly what\'s happening with your vehicle at every step.'
    }
  ];

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="faq-page">
      <div className="faq-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our services</p>
      </div>

      <div className="faq-container-main">
        <div className="faq-wrapper">
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <button 
                className={`faq-question ${expandedFAQ === faq.id ? 'active' : ''}`}
                onClick={() => toggleFAQ(faq.id)}
              >
                <span className="faq-text">{faq.question}</span>
                <span className="faq-icon">+</span>
              </button>
              {expandedFAQ === faq.id && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-sidebar">
          <h3>Still have questions?</h3>
          <p>Can't find the answer you're looking for? Our team is here to help.</p>
          <div className="sidebar-contact-items">
            <a href="tel:+8801701140907" className="sidebar-contact-item">
              <span className="icon">📞</span>
              <div>
                <h4>Call Us</h4>
                <p>+8801701140907</p>
              </div>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=prosanto0das23@gmail.com" target="_blank" rel="noopener noreferrer" className="sidebar-contact-item">
              <span className="icon">📧</span>
              <div>
                <h4>Email Us</h4>
                <p>prosanto0das23@gmail.com</p>
              </div>
            </a>
            <a href="https://wa.me/8801701140907" target="_blank" rel="noopener noreferrer" className="sidebar-contact-item">
              <span className="icon">💬</span>
              <div>
                <h4>WhatsApp</h4>
                <p>Chat with us</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
