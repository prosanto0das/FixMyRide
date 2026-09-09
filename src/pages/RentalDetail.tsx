import { Link, useParams } from 'react-router-dom';
import { gmailComposeUrl } from '../data/contactData';
import { getRentalListing } from '../data/rentalData';
import './Rentals.css';

const formatPrice = (price: number) => `৳${price.toLocaleString('en-BD')}`;

export default function RentalDetail() {
  const { type, id } = useParams();
  const listing = getRentalListing(type, id);

  if (!listing) return <main className="rental-detail-page"><div className="rental-not-found"><p className="rentals-eyebrow">FIXMYRIDE MOBILITY</p><h1>Transport option not found</h1><Link to="/rentals">Back to Rentals</Link></div></main>;

  const recovery = listing.type === 'recovery';
  const specifications = recovery ? `Vehicle class: ${listing.vehicleClass}\nCapacity: ${listing.capacity}\nBed dimensions: ${listing.bedDimensions}\nSuitable for: ${listing.suitableFor.join(', ')}` : `Vehicle class: ${listing.vehicleClass}\nSeats: ${listing.seats}\nLuggage: ${listing.luggageCapacity}\nSuitable for: ${listing.suitableFor.join(', ')}`;
  const subject = `${recovery ? 'Recovery truck' : 'Private ride'} booking - ${listing.name}`;
  const body = `Hello FixMyRide,\n\nI would like to book this transport option.\n\nOption: ${listing.name}\nPrice: ${formatPrice(listing.pricePerTrip)} per trip\nService area: ${listing.serviceArea}\nAvailability: ${listing.availability}\n${specifications}\n\nPickup location:\nDestination / repair shop:\nPreferred time:\nPassengers: ${recovery ? 'Not applicable' : ''}\n\nPlease confirm availability and the next steps.\n\nThank you!`;

  return <main className="rental-detail-page"><div className="rental-detail-shell"><Link to="/rentals" className="rental-back"><i className="fas fa-arrow-left"></i> Back to Rentals</Link><div className="rental-detail-grid"><div className="rental-detail-image"><img src={listing.images[0]} alt={listing.name} /></div><div className="rental-detail-copy"><span className="rental-card-kicker">{listing.vehicleClass}</span><h1>{listing.name}</h1><p className="rental-detail-price">{formatPrice(listing.pricePerTrip)} <small>per trip</small></p><p className="rental-detail-description">{listing.description}</p><div className="rental-detail-specs">{recovery ? <><div><span>Capacity</span><strong>{listing.capacity}</strong></div><div><span>Bed dimensions</span><strong>{listing.bedDimensions}</strong></div></> : <><div><span>Passenger seats</span><strong>{listing.seats}</strong></div><div><span>Luggage</span><strong>{listing.luggageCapacity}</strong></div></>}<div><span>Service area</span><strong>{listing.serviceArea}</strong></div><div><span>Availability</span><strong>{listing.availability}</strong></div></div><h2>{recovery ? 'Suitable for' : 'Good for'}</h2><ul>{listing.suitableFor.map((item) => <li key={item}><i className="fas fa-check"></i>{item}</li>)}</ul><h2>Included</h2><ul>{listing.features.map((feature) => <li key={feature}><i className="fas fa-check"></i>{feature}</li>)}</ul><a className="rental-book-button" href={gmailComposeUrl(subject, body)} target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i> Book this {recovery ? 'recovery truck' : 'private ride'}</a><p className="rental-note">Your email will open with pickup, destination, passenger, and vehicle details ready to complete.</p></div></div></div></main>;
}
