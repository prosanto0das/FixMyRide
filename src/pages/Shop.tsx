import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { automobileParts, usedCars, type ShopCategory, type ShopListing } from '../data/shopData';
import './Shop.css';

const formatPrice = (price: number) => `৳${price.toLocaleString('en-BD')}`;

export default function Shop() {
  const [category, setCategory] = useState<ShopCategory>('used-cars');
  const [search, setSearch] = useState('');
  const [condition, setCondition] = useState('All');
  const [sort, setSort] = useState('featured');

  const listings = category === 'used-cars' ? usedCars : automobileParts;
  const filteredListings = useMemo(() => {
    const query = search.trim().toLowerCase();
    const result = listings.filter((listing) => {
      const searchable = `${listing.name} ${listing.description} ${listing.type === 'car' ? `${listing.model} ${listing.year} ${listing.condition}` : `${listing.category} ${listing.condition} ${listing.compatibility}`}`.toLowerCase();
      const matchesSearch = !query || searchable.includes(query);
      const matchesCondition = condition === 'All' || (listing.type === 'part' ? listing.condition === condition : listing.condition === condition);
      return matchesSearch && matchesCondition;
    });

    return [...result].sort((first, second) => sort === 'price-low' ? first.price - second.price : sort === 'price-high' ? second.price - first.price : 0);
  }, [condition, listings, search, sort]);

  const handleCategoryChange = (nextCategory: ShopCategory) => {
    setCategory(nextCategory);
    setCondition('All');
    setSearch('');
  };

  return (
    <main className="shop-page">
      <section className="shop-hero">
        <div>
          <p className="shop-eyebrow">FIXMYRIDE MARKETPLACE</p>
          <h1>Find your next <span>drive.</span></h1>
          <p>Inspected vehicles and dependable parts, with the FixMyRide team ready to help you choose with confidence.</p>
        </div>
        <div className="shop-hero-stat"><strong>{usedCars.length + automobileParts.length}</strong><span>curated listings</span></div>
      </section>

      <section className="shop-content">
        <div className="shop-category-tabs" role="tablist" aria-label="Shop categories">
          <button type="button" role="tab" aria-selected={category === 'used-cars'} className={category === 'used-cars' ? 'active' : ''} onClick={() => handleCategoryChange('used-cars')}>
            <span>01</span> Used Cars
          </button>
          <button type="button" role="tab" aria-selected={category === 'parts'} className={category === 'parts' ? 'active' : ''} onClick={() => handleCategoryChange('parts')}>
            <span>02</span> Automobile Parts
          </button>
        </div>

        <div className="shop-toolbar">
          <label className="shop-search"><span className="sr-only">Search listings</span><i className="fas fa-search"></i><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder={category === 'used-cars' ? 'Search by model, year, or feature' : 'Search by part, category, or vehicle'} /></label>
          <label><span className="sr-only">Filter by condition</span><select value={condition} onChange={(event) => setCondition(event.target.value)}><option>All</option>{category === 'used-cars' ? <><option>Excellent</option><option>Very good</option><option>Good</option><option>Refurbished</option></> : <><option>New</option><option>Used</option></>}</select></label>
          <label><span className="sr-only">Sort listings</span><select value={sort} onChange={(event) => setSort(event.target.value)}><option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select></label>
        </div>

        <div className="shop-result-line"><span>{filteredListings.length} {category === 'used-cars' ? 'vehicles' : 'parts'} found</span><span>Prices shown in BDT</span></div>
        {filteredListings.length > 0 ? <div className="shop-grid">{filteredListings.map((listing) => <ShopCard key={listing.id} listing={listing} formatPrice={formatPrice} />)}</div> : <div className="shop-empty"><h2>No matching listings</h2><p>Try a broader search or reset your filters.</p><button type="button" onClick={() => { setSearch(''); setCondition('All'); }}>Reset filters</button></div>}
      </section>
    </main>
  );
}

function ShopCard({ listing, formatPrice }: { listing: ShopListing; formatPrice: (price: number) => string }) {
  const isCar = listing.type === 'car';
  return <Link to={`/shop/${listing.type}/${listing.id}`} className="shop-card">
    <div className="shop-card-image"><img src={listing.images[0]} alt={listing.name} /><span className={`listing-badge ${isCar && listing.availability === 'Reserved' ? 'reserved' : ''}`}>{isCar ? listing.availability : listing.condition}</span><span className="image-count"><i className="fas fa-images"></i> {listing.images.length}</span></div>
    <div className="shop-card-body"><div className="shop-card-kicker">{isCar ? `${listing.year} · ${listing.mileage}` : `${listing.category} · ${listing.compatibility}`}</div><h2>{listing.name}</h2><p>{listing.description}</p><div className="shop-card-footer"><strong>{formatPrice(listing.price)}</strong><span>View details <i className="fas fa-arrow-right"></i></span></div></div>
  </Link>;
}