import { useState } from 'react';
import { faqChatbotData } from '../data/faqChatbotData';
import { contactData, gmailComposeUrl } from '../data/contactData';
import './FAQ.css';

export default function FAQ() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

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
          {faqChatbotData.map((faq) => (
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
            <a href={`tel:${contactData.phone}`} className="sidebar-contact-item">
              <span className="icon">📞</span>
              <div>
                <h4>Call Us</h4>
                <p>{contactData.phone}</p>
              </div>
            </a>
            <a href={gmailComposeUrl()} target="_blank" rel="noopener noreferrer" className="sidebar-contact-item">
              <span className="icon">📧</span>
              <div>
                <h4>Email Us</h4>
                <p>{contactData.email}</p>
              </div>
            </a>
            <a href={`https://wa.me/${contactData.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="sidebar-contact-item">
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
