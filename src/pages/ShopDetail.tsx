import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { gmailComposeUrl } from '../data/contactData';
import { getShopListing } from '../data/shopData';
import './ShopDetail.css';

const formatPrice = (price: number) => `৳${price.toLocaleString('en-BD')}`;

export default function ShopDetail() {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const listing = getShopListing(type, id);
  const [activeImage, setActiveImage] = useState(0);

  if (!listing) return <main className="shop-detail-page"><div className="shop-not-found"><p className="shop-eyebrow">MARKETPLACE</p><h1>Listing not found</h1><p>This listing may have been sold or removed.</p><button type="button" onClick={() => navigate('/shop')}>Back to Shop</button></div></main>;

  const isCar = listing.type === 'car';
  const subject = `${isCar ? 'Reserve vehicle' : 'Request part'} - ${listing.name}`;
  const details = isCar ? `Model: ${listing.model}\nYear: ${listing.year}\nMileage: ${listing.mileage}\nCondition: ${listing.condition}\nLocation: ${listing.location}` : `Category: ${listing.category}\nCondition: ${listing.condition}\nCompatibility: ${listing.compatibility}\nAvailability: ${listing.availability}`;
  const body = `Hello FixMyRide,\n\nI would like to ${isCar ? 'reserve this vehicle' : 'request this part'}.\n\nListing: ${listing.name}\nPrice: ${formatPrice(listing.price)}\n${details}\n\nPlease confirm availability and the next steps.\n\nThank you!`;

  return <main className="shop-detail-page"><div className="shop-detail-shell"><Link to="/shop" className="shop-back"><i className="fas fa-arrow-left"></i> Back to Shop</Link><div className="shop-detail-grid"><div className="shop-gallery"><div className="shop-main-image"><img src={listing.images[activeImage]} alt={`${listing.name} view ${activeImage + 1}`} /><span>{activeImage + 1} / {listing.images.length}</span></div><div className="shop-thumbnails">{listing.images.map((image, index) => <button type="button" key={image} className={activeImage === index ? 'active' : ''} onClick={() => setActiveImage(index)}><img src={image} alt={`${listing.name} thumbnail ${index + 1}`} /></button>)}</div></div><div className="shop-detail-copy"><div className="shop-detail-meta">{isCar ? `${listing.year} · ${listing.mileage} · ${listing.location}` : `${listing.category} · ${listing.condition}`}</div><h1>{listing.name}</h1><p className="shop-detail-price">{formatPrice(listing.price)}</p><p className="shop-detail-description">{listing.description}</p><div className="shop-specs">{isCar ? <><div><span>Model</span><strong>{listing.model}</strong></div><div><span>Condition</span><strong>{listing.condition}</strong></div><div><span>Availability</span><strong>{listing.availability}</strong></div></> : <><div><span>Condition</span><strong>{listing.condition}</strong></div><div><span>Compatibility</span><strong>{listing.compatibility}</strong></div><div><span>Availability</span><strong>{listing.availability}</strong></div></>}</div><h2>What to expect</h2><ul>{listing.highlights.map((highlight) => <li key={highlight}><i className="fas fa-check"></i>{highlight}</li>)}</ul><a href={gmailComposeUrl(subject, body)} target="_blank" rel="noopener noreferrer" className="shop-book-button"><i className="fas fa-envelope"></i>{isCar ? 'Book / Reserve' : 'Book / Request'}</a><p className="shop-detail-note">Your email opens with this listing's details pre-filled for a faster response.</p></div></div></div></main>;
}