import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { expertProfiles, type ExpertDiscipline } from '../data/expertData';
import { contactData, gmailComposeUrl } from '../data/contactData';
import profileImage from '../assets/profile_resize.jpg';
import './About.css';

const disciplines: Array<'All experts' | ExpertDiscipline> = ['All experts', 'Repair', 'Diagnostics', 'Body & Paint', 'Design', 'Roadside'];

export default function About() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<'All experts' | ExpertDiscipline>('All experts');
  const [searchTerm, setSearchTerm] = useState('');
  const visibleExperts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return expertProfiles.filter((expert) => {
      const matchesDiscipline = selectedDiscipline === 'All experts' || expert.discipline === selectedDiscipline;
      const matchesSearch = !query || `${expert.name} ${expert.role} ${expert.specialty} ${expert.certifications.join(' ')}`.toLowerCase().includes(query);
      return matchesDiscipline && matchesSearch;
    });
  }, [searchTerm, selectedDiscipline]);

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-inner">
          <div>
            <p className="about-eyebrow">THE FIXMYRIDE WORKSHOP</p>
            <h1>People who know<br /><span>what moves.</span></h1>
            <p>We bring practical automotive expertise, careful workmanship, and clear communication together under one roof.</p>
          </div>
          <div className="about-hero-stat"><strong>{expertProfiles.length}</strong><span>specialists across<br />repair and design</span></div>
        </div>
      </section>

      <div className="about-container">
        <section className="about-founder-section">
          <div className="about-founder-image"><img src={profileImage} alt="Prosanto Das, founder of FixMyRide" /></div>
          <div className="about-founder-copy">
            <p className="about-eyebrow">01 / OUR FOUNDER</p>
            <h2>Built around trust, not guesswork.</h2>
            <h3>Prosanto Das <span>Founder & CEO</span></h3>
            <div className="founder-badges"><span>BSc Computer Science & Engineering</span><span>SUST</span></div>
            <p>FixMyRide was founded to make automotive care more accessible, transparent, and convenient. Our technical foundation helps us build better tools and workflows, while our workshop team keeps the focus on real cars and real customer needs.</p>
            <div className="about-actions"><a href={gmailComposeUrl()} target="_blank" rel="noopener noreferrer">Email the team <i className="fas fa-arrow-up-right-from-square"></i></a><a href={`tel:${contactData.phone}`}>Call {contactData.phone} <i className="fas fa-phone"></i></a></div>
          </div>
        </section>

        <section className="about-principles"><div><span>01</span><h3>Clear recommendations</h3><p>We explain the work, the options, and the expected timing before service begins.</p></div><div><span>02</span><h3>Skilled hands</h3><p>Our specialists focus on specific systems instead of treating every problem the same way.</p></div><div><span>03</span><h3>One accountable team</h3><p>From roadside help to finishing work, customers have one team to come back to.</p></div></section>

        <section className="expert-directory">
          <div className="expert-heading"><div><p className="about-eyebrow">02 / OUR EXPERTISE</p><h2>Meet the people behind the work</h2><p>Browse our workshop capabilities by specialty. Each profile includes experience, starting charge, and sample customer feedback.</p></div><div className="expert-count"><strong>{visibleExperts.length}</strong><span>profiles shown</span></div></div>
          <div className="expert-toolbar"><div className="expert-filters" role="tablist" aria-label="Expert disciplines">{disciplines.map((discipline) => <button type="button" role="tab" aria-selected={selectedDiscipline === discipline} className={selectedDiscipline === discipline ? 'active' : ''} key={discipline} onClick={() => setSelectedDiscipline(discipline)}>{discipline}</button>)}</div><label className="expert-search"><span className="sr-only">Search experts</span><i className="fas fa-search"></i><input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search expertise, system, or name" /></label></div>
          <div className="expert-grid">
            {visibleExperts.map((expert) => <article className="expert-card" key={expert.id}>
              <div className="expert-card-top"><span className="expert-discipline">{expert.discipline}</span><span className="expert-index">{String(expertProfiles.indexOf(expert) + 1).padStart(2, '0')}</span></div>
              <h3>{expert.name}</h3><p className="expert-role">{expert.role}</p><p className="expert-specialty">{expert.specialty}</p>
              <div className="expert-metrics"><span><i className="fas fa-star"></i> {expert.rating} <small>({expert.reviewCount} reviews)</small></span><span>From ৳{expert.startingCharge.toLocaleString('en-BD')}</span></div>
              <Link className="expert-profile-link" to={`/expert/${expert.id}`}>View full profile <i className="fas fa-arrow-right"></i></Link>
            </article>)}
          </div>
          {visibleExperts.length === 0 && <div className="expert-empty"><h3>No experts found</h3><p>Try another discipline or search term.</p></div>}
        </section>

        <section className="about-capabilities"><div><p className="about-eyebrow">03 / WHAT WE DO</p><h2>From first diagnosis to final finish.</h2></div><div className="capability-list"><div><span>01</span><strong>Mechanical and electrical repair</strong><p>Engines, transmissions, brakes, suspension, batteries, sensors, and charging systems.</p></div><div><span>02</span><strong>Inspection and roadside response</strong><p>Pre-purchase checks, mobile diagnostics, towing coordination, and emergency support.</p></div><div><span>03</span><strong>Body, paint, and design</strong><p>Collision repair, color matching, detailing, wraps, lighting, interiors, and restoration.</p></div></div></section>

        <section className="about-contact"><div><p className="about-eyebrow">04 / START A CONVERSATION</p><h2>Have a car question?</h2><p>Tell us what you are working on and our team will point you to the right person.</p></div><div className="about-contact-links"><a href={`tel:${contactData.phone}`}><span>Call</span><strong>{contactData.phone}</strong></a><a href={`mailto:${contactData.email}`}><span>Email</span><strong>{contactData.email}</strong></a><a href={`https://wa.me/${contactData.whatsappNumber}`} target="_blank" rel="noopener noreferrer"><span>WhatsApp</span><strong>Chat with the team</strong></a></div></section>
      </div>
    </main>
  );
}
