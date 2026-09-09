import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { recoveryTrucks, rideHomeVehicles, type RentalCategory, type RentalListing } from '../data/rentalData';
import './Rentals.css';

const formatPrice = (price: number) => `৳${price.toLocaleString('en-BD')}`;

export default function Rentals() {
  const [category, setCategory] = useState<RentalCategory>('recovery');
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const listings = category === 'recovery' ? recoveryTrucks : rideHomeVehicles;
  const filteredListings = useMemo(() => {
    const query = search.trim().toLowerCase();
    return listings.filter((listing) => {
      const searchable = `${listing.name} ${listing.vehicleClass} ${listing.description} ${listing.suitableFor.join(' ')} ${listing.serviceArea}`.toLowerCase();
      const matchesSearch = !query || searchable.includes(query);
      const matchesFilter = filter === 'All' || listing.availability === filter;
      return matchesSearch && matchesFilter;
    });
  }, [filter, listings, search]);

  const changeCategory = (nextCategory: RentalCategory) => {
    setCategory(nextCategory);
    setSearch('');
    setFilter('All');
  };

  return <main className="rentals-page">
    <section className="rentals-hero"><div><p className="rentals-eyebrow">FIXMYRIDE MOBILITY</p><h1>Move your car.<br /><span>Get yourself home.</span></h1><p>Book the right recovery truck for your vehicle, then arrange a private ride for the people travelling with you.</p></div><div className="rentals-hero-stat"><strong>{recoveryTrucks.length + rideHomeVehicles.length}</strong><span>transport options<br />available to browse</span></div></section>
    <section className="rentals-content">
      <div className="rental-tabs" role="tablist" aria-label="Rental categories"><button type="button" role="tab" aria-selected={category === 'recovery'} className={category === 'recovery' ? 'active' : ''} onClick={() => changeCategory('recovery')}><span>01</span><div><strong>Recovery trucks</strong><small>Move a damaged or undriveable car</small></div></button><button type="button" role="tab" aria-selected={category === 'ride-home'} className={category === 'ride-home' ? 'active' : ''} onClick={() => changeCategory('ride-home')}><span>02</span><div><strong>Private ride home</strong><small>Travel safely with your passengers</small></div></button></div>
      <div className="rental-toolbar"><label className="rental-search"><span className="sr-only">Search rental options</span><i className="fas fa-search"></i><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder={category === 'recovery' ? 'Search by vehicle type, size, or area' : 'Search by seats, luggage, or route'} /></label><label><span className="sr-only">Filter availability</span><select value={filter} onChange={(event) => setFilter(event.target.value)}><option>All</option><option>Available</option><option>Limited availability</option><option>On trip</option></select></label></div>
      <div className="rental-results"><span>{filteredListings.length} options found</span><span>{category === 'recovery' ? 'Truck specifications shown for compatibility' : 'Private transport for safe return home'}</span></div>
      {filteredListings.length > 0 ? <div className="rental-grid">{filteredListings.map((listing) => <RentalCard key={listing.id} listing={listing} formatPrice={formatPrice} />)}</div> : <div className="rental-empty"><h2>No matching options</h2><p>Try another vehicle type or reset your filters.</p><button type="button" onClick={() => { setSearch(''); setFilter('All'); }}>Reset filters</button></div>}
    </section>
  </main>;
}

function RentalCard({ listing, formatPrice }: { listing: RentalListing; formatPrice: (price: number) => string }) {
  const recovery = listing.type === 'recovery';
  return <Link to={`/rentals/${listing.type}/${listing.id}`} className="rental-card"><div className="rental-card-image"><img src={listing.images[0]} alt={listing.name} /><span className={`rental-badge ${listing.availability === 'Limited availability' ? 'limited' : ''}`}>{listing.availability}</span></div><div className="rental-card-body"><span className="rental-card-kicker">{listing.vehicleClass}</span><h2>{listing.name}</h2><p>{listing.description}</p><div className="rental-specs">{recovery ? <><span><i className="fas fa-weight-hanging"></i>{listing.capacity}</span><span><i className="fas fa-ruler-combined"></i>{listing.bedDimensions}</span></> : <><span><i className="fas fa-users"></i>{listing.seats} seats</span><span><i className="fas fa-suitcase"></i>{listing.luggageCapacity}</span></>}</div><div className="rental-card-footer"><strong>{formatPrice(listing.pricePerTrip)} <small>/ trip</small></strong><span>View details <i className="fas fa-arrow-right"></i></span></div></div></Link>;
}
